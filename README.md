Training Project Star Wars DB
==============================

Description
-----------------------------------
SPA inspired by the universal Star Wars.
Сontains information about people, planets and starships.

How to use
-----------------------------------

After loading select page - People, Planets or Starships.
The item list for the selected page will open. By clicking on one of the items in the list, you will see more details about that item.
Details about the person or planet will be displayed to the right of the list. The details of the selected starship are displayed instead of the list.

No matter which page you are on, there will always be a random planet displayed with little details about it. It is an inactive element, cannot show information about this planet.

If you want to open a secret page, you will need to login first. It's not difficult, you just need to click on the "Login" button and select the secret page again.

The change service button will show you data that contains information other than the Star Wars universe. For example, about Bilbo Baggins.

If you want to know what happens in case of an error, click the "Throw error" button in the selected element of any list

About the project.
-----------------------------------

This project was created for learning React according to the course of Yuri Bura.

Data is received from a remote server using Fetch Api. Created a mock server to test the app. The server can be changed with the Change Service button.

Used functional and class components (with lifecycle methods), custom HOCs.

To change pages is used React-router.

You can find some comments on the most interesting points.

Structure
-----------------------------------
* public  
  *images and initial markup file used when building the project*

* src
    * api
      * Swapi use fetchAPi to get data
      * Test-swapi return mock-data
    * components
      * Header and Planet-random components
      * Error-boundry, Error-button, Error-indicator and Spinner are used in case error or loading.
      * Item-detailes, Item-list, Row, Hoc is elements to create main components - pages.
      * Pages includes Login, Secret, People, Planets and Starships-pages with their lists and detailes.
      * App - the main page in app.
      * Swapi-Service-Context is use to create App-Context

Tools
-----------------------------------

* React
* React-router-dom
* Prop-types
* HTML 5
* Css 3
* JavaScript ES2015+

Autor
-----------------------------------

[Liliya Sagitova](https://github.com/Likaboil)

[Telegram](https://t.me/likaboil)

<a href="mailto:guverboil@gmail.com">guverboil@gmail.com</a>

Project setup
-----------------------------------

To install you need node.js v12.18.3+, npm v.6.14.8+.

Download project and run

```
$ npm install
$ npm start
```

Getting Started with Create React App
-----------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

####  Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

####  Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

####  Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

####  Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

####  `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
