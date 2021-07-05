const router = require("express").Router();
const { User } = require("../../models");
const paypal = require("paypal-rest-sdk");
//const paypalsandbox = require("../../config/key");
paypal.configure({
  mode: "sandbox", //sandbox
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({
        user: userData,
        message: "You are now logged in, welcome to the Art Gallery",
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

var amountForArt;
var productPrice;

router.post("/pay", (req, res) => {
  console.log(req.body.artname, req.body.artprice);
  amountForArt = parseFloat(req.body.artprice).toFixed(2);
  console.log(typeof amountForArt);
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@total", amountForArt);

  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      // return_url: "https://paypalnode.herokuapp.com/success",
      return_url: "http://localhost:3001/api/users/success",
      //cancel_url: "https://paypalnode.herokuapp.com/cancel",
      cancel_url: "http://localhost:3001/api/users/cancel",
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: req.body.artname,
              sku: "001",
              price: amountForArt,
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: amountForArt,
        },
        description: "Art work",
      },
    ],
  };
  console.log(create_payment_json);
  productPrice = { totalamount: amountForArt };
  console.log(productPrice.totalamount);
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(payment);
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          console.log(i);
          console.log(payment.links[i].href);
          res.status(200).json({ togo: payment.links[i].href });
        }
      }
    }
  });
});

router.get("/success", (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  console.log("********", req.body);
  console.log(amountForArt);
  console.log("@@@@@@@@@@@@@@@@@@", productPrice.totalamount);
  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: productPrice.totalamount,
        },
      },
    ],
  };

  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    function (error, payment) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log(JSON.stringify(payment));
        res.render("success", { layout: "successmain" });
      }
    }
  );
});

module.exports = router;
