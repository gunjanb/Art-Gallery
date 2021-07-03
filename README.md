[![Badge](https://img.shields.io/badge/GitHub-gunjanb-orange?style=flat-square&logo=appveyor)](https://github.com/gunjanb)
[![Badge](https://img.shields.io/badge/GitHub-jkcanoy-yellow?style=flat-square&logo=appveyor)](https://github.com/jkcanoy)
[![Badge](https://img.shields.io/badge/GitHub-FettBoba-green?style=flat-square&logo=appveyor)](https://github.com/Fett-Boba)
[![Badge](https://img.shields.io/badge/GitHub-twashke-blueviolet?style=flat-square&logo=appveyor)](https://github.com/twashke) [![Badge](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

# The Happy Little Art Gallery

The [Happy Little Art Gallery](http://localhost:3001/) was created for budding artists who want to find inspiration from other artists, or showcase their own work. After **Sign Up** the user is taken to their own **Dashboard** where they can begin posting their own pictures. The **Collection** tab will allow the user to see all of the art currently being displayed by all other users. By clicking on the **Details** button, information about the art is displayed, including a section for the user to provide feedback on the art. The **Purchase now** button allows the user the ability to purchase the artwork from the artist. The dashboard and collection are only avaialble to users that are currently logged in. Once the user is done, they can use the **Logout** tab to return to the oepning page of the website. The user can return to the dashboard or the collections page by using the **Login** tab to enter their login information again for access to the website.

**_"Talent is a pursued interest. Anything that you are willing to practice, you can do." - Bob Ross_**

## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## About the Project

- The motivation for this project is to create a place for a user to view, provide feedback, and even sell their art to other users.
- This website requires the user to sign in to view their own personal **Dashboard** to post and view comments on their art.
- Once logged in, the user has access to the **Collections** tab where they can view all of the art from all other users.
- In the **Details** portion of art, the user can leave comments or feedback on other artist's work.
- Once the user is done, they can use the **Logout** tab to return to the opening page of the websire.
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
  - [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3.org/Style/CSS/Overview.en.html), and [Javascript](https://www.javascript.com/)
  - [Bootstrap](https://getbootstrap.com/)
  - [Google Fonts](https://fonts.google.com/)
  - [Font Awesome](https://fontawesome.com/)

## Installation

- Open [Art Gallery](https://github.com/twashke/Art-Gallery)
- Use the command line to **git clone**
- **npm install**
- Copy [.envEXAMPLE](.env.EXAMPLE) and paste to create an **.env** file to include MySql and Cloudinary information for access to the database and the picture database.
- Copy [Database](/db/schema.sql) and drop in local [MySql Workbench](https://www.mysql.com/products/workbench/).
- **node run seeds/seeds.js** to drop seeds in command line - [art-seeds.js](seeds/art-seeds.js) will need to be updated to include clouidnary files from the login being used.
- **npm start** from command line to connect server.
- Go to [localhost:3001](http://localhost:3001/) in Web Browser to view.

## Usage

- Go to [Deployed Heroku Website(insert link here)
- Use the **Login** tab to **Sign Up**
- Enter **Username**, **Email**, and **Password**
- The user is directed to their personal **Dashboard**
- From their they can add pictures or view comments on their pictures.
- The **Collections** tab allows the user to view all other art on the website to view, comment, and purchase through the user.
- Clicking on the **Details** button allows the user to view more information about the art.
- Click on the **Purchase now** button allows the user to contact the seller to buy the art.
- By clicking **Logout** the user is returned to the opening page.

Images or Gif \
![Images or Gif](insert file here) \
\
Images or Gif \
![Images or Gif](insert file here) \
\
Images or Gif \
![Images or Gif](insert file here) \

## Contributing

- [Gunjan Bhargava](https://github.com/gunjanb)
- [Kyle Canoy](https://github.com/jkcanoy)
- [Tami Shepard](https://github.com/Fett-Boba)
- [Tiffany Washke](https://github.com/twashke)

## Tests

- Testing was done throughout the project development by using **git pull origin develop** as new files were merged in github.
- Each round of new files included vigourous testing to ensure everything was connecting properly and working as intended.

## License

This application is covered by the [MIT License](https://opensource.org/licenses/MIT).

      Copyright 2021 Gunjan Bhargava, Kyle Canoy, Tami Shepard, Tiffany Washke

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Questions

**Contact Gunjun Bhargava**

- **Email directly at** gunjanb2006@gmail.com
- **GitHub User Name:** [gunjanb](https://github.com/gunjanb)

![Developer Profile Picture](https://avatars.githubusercontent.com/u/13214814?v=4)

**Contact Kyle Canoy**

- **Email directly at** kcanoy@uw.edu
- **GitHub User Name:** [jkcanoy](https://github.com/jkcanoy)

![Developer Profile Picture](https://avatars.githubusercontent.com/u/78453584?v=4)

**Contact Tami Shepard**

- **Email directly at** thugfencer@gmail.com
- **GitHub User Name:** [Tami Shepard](https://github.com/Fett-Boba)

![Developer Profile Picture](https://avatars.githubusercontent.com/u/80312113?v=4)

**Contact Tiffany Washke**

- **Email directly at** twashke@gmail.com
- **GitHub User Name:** [Tiffany Washke](https://github.com/twashke)

![Developer Profile Picture](https://avatars.githubusercontent.com/u/79234530?v=4)
