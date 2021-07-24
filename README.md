# Happy Little Art Gallery

![MIT license badge](https://img.shields.io/badge/license-MIT-green)

This application [Happy Little Art Gallery](https://happylittleartgallery072021.herokuapp.com/) is created for budding artists who wants to find inspiration from other artists, showcase their own work and even sell their artwork to others. This application is build keeping in mind that when we critique the work of others, we not only offer helpful suggestions but we also learn to find things that can be applied to our own work. We can see how other artists solve problems and if their solutions are better than our own, we can borrow them. As a result, we all grow.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributing)
- [Tests](#tests)
- [Technologies](#Technologies)
- [Questions](#questions)

## Installation

- Clone project into a local directory and cd into that directory.
- On console run **npm install** to install all packages needed for an  
  application to run.
- Using .env.EXAMPLE file create a .env file to include MySql,
  Cloudinary and paypal sanbox key information needed for an app to run.
- Copy [Database](/db/schema.sql) and drop in local [MySql Workbench]
  (https://www.mysql.com/products/workbench/).
- Run **node run seeds/seeds.js** to drop seeds in command line -
  [art-seeds.js](seeds/art-seeds.js) will need to be updated to include clouidnary files from the login being used.
- **npm start** from command line to connect server.
- Go to [localhost:3001](http://localhost:3001/) in Web Browser to view.

## Usage

- Go to [Deployed **Happy Little Art Gallerty**](https://happylittleartgallery072021.herokuapp.com/)
- Use the **Login** tab to **Sign Up**
- Enter **Username**, **Email**, and **Password**
- The user is directed to their personal **Dashboard**
- To add art, click the **Add New Art** button and enter details and choose the art to upload.
- From their they can add pictures or view comments on their pictures.
- The **Collections** tab allows the user to view all other art on the website to view, comment, and
  purchase through the user.
- Clicking on the **Details** button allows the user to view more information about the art.
- Click on the **Purchase now** button directs the user to paypal to purchase the seller's art.
- By clicking **Logout** the user is returned to the opening page.

### Mock Up

- [View App Here](https://happylittleartgallery072021.herokuapp.com/)

- **Home**, **Sign Up** and **Login** to **Dashboard**

  ![Home, Sign Up and Login Page](public/images/home-login-signup.gif)

- Updating Art on **Dashboard**

  ![Viewing Collections](public/images/update-art-details.gif)

- Remove Art Using the **Delete** button

  ![Delete Art](public/images/delete-art.gif)

- Viewing the **Collection** tab for all User Artwork and to see comments

  ![Viewing Collections](public/images/collections-tab.gif)

- Add **Comments** on Artwork in the **Details** section

  ![Add Comments to Art](public/images/add-comment.gif)

- Use the **Purchase now** button in the **Details** section to purchase through [PayPal](https://www.paypal.com/us/home)

  ![Purchase through PayPal](public/images/purchase-paypal.gif)

- **Logout** of [Happy Little Art Gallery](https://happylittleartgallery072021.herokuapp.com/)

  ![Logout of Website](public/images/logout.gif)

- Contact Information in Footer

  ![Footer Contact Information](public/images/footer-contact-info.gif)

## Contributors

- Gunjan-Bhargava
- Kyle Canoy
- Tami Shepard
- Tiffany Washke

## Tests

- Used Insomnia to test all routes.

## License

This application is covered by the [MIT License](https://opensource.org/licenses/MIT).

## Technologies

- Built with the following technologies:
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [path](https://www.npmjs.com/package/path)
  - [express](https://www.npmjs.com/package/express)
  - [express-session](https://www.npmjs.com/package/express-session)
  - [express-handlebars](https://www.npmjs.com/package/express-handlebars)
  - [mysql2](https://www.npmjs.com/package/mysql2)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [sequelize](https://www.npmjs.com/package/sequelize)
  - [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
  - [multer](https://www.npmjs.com/package/multer)
  - [cloudinary](https://www.npmjs.com/package/cloudinary)
  - [multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)
  - [paypal-rest-sdk](https://www.npmjs.com/package/paypal-rest-sdk)
  - [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3.org/Style/CSS/Overview.en.html), [Javascript](https://www.javascript.com/)
  - [Bootstrap](https://getbootstrap.com/)
  - [Google Fonts](https://fonts.google.com/)
  - [Font Awesome](https://fontawesome.com/)

## Questions

If you have any questions about project you can contact contributors by email or by visiting their github profile.

### Gunjan Bhargava

- Email : gunjanbhargava2021@gmail.com
- GitHub: [Gunjan Bhargava](https://github.com/gunjanb)

### Kyle Canoy

- Email : kcanoy@uw.edu
- GitHub: [Kyle Canoy](https://github.com/jkcanoy)

### Tami Shepard

- Email : thugfencer@gmail.com
- GitHub: [Tami Shepard](https://github.com/Fett-Boba)

### Tiffany Washke

- Email: twashke@gmail.com
- GitHub: [Tiffany Washke](https://github.com/twashke)
