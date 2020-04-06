This project was developed by [Evandro](https://github.com/evandrobm) as an frontend test for **Axur**

There is an deployed version of this code on master branch in the URL [evandrobm-axur-test-front.netlify.com](https://evandrobm-axur-test-front.netlify.com/). This deploy was automated in Netlify.

## Important informations

This application was built over an ejected create-react-app application to win some time in development. There are some configurations and some changes in scripts to make a better use of webpack.

The UX/UI was made to be the simplier as possible, the application was develop as desktop first and adapted to don't break on mobile. The focus of this test was deliver the best code as possible with an simple and functional interface.

As this was a single page blog, there is no router configured, to avoid adding complexity to the application.

## Install, run and test

For install the application you should be in the project directory, and then:

#### `npm install` or `yarn`

You can run the app in the development mode. For this you will need to run:

#### `npm start` or `yarn start`

Then, you can open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

To run the unit tests of the application, you should run:

#### `npm test` or `yarn test`

This will run all application tests and check the test coverage over all source files. As will be explained later in this documentation, there are some hooks to grant 100% of tests coverage in code

To build the project to production, use:

#### `npm run build` or `yarn build`

This will generate a `build` folder where the static files will be, you can use this directory do deploy.

## Final informations

### Code Organization

This project **focused on componentization**, so we have a logic layer with all bussiness rules and a presentational layer with small components to be used in application. This componentization idea will produce simplier code and components, there are easier to code, read, understand and test.

```
  /src
   |-components //Here will be the smallest pieces of code, for the presentation layer
   |-conatiners //Logic components there are responsible for business and getting data from services
   |-context //Here are all the application data contexts, custom hooks are used to share data
   |-services //All connections external from application are made here and exported as functions
```

Tests are created inside each component folder, to keep everything related together

### Code Quality

To ensure the code quality of the project, we have:

- Custom lint rules
- Prettier integration with eslint to keep consistency (I strongly recommend to use Prettier if you will contribute in this project)
- Git hook for commit: Commits are only allowed if all lint rules are respected
- Git hook for Push: Push to repository aree only allowed with all tests passing and 100% of code coverage

Jest and react-testing-library are used to make the unit tests, there will be a `coverage` folder after run tests with all the coverage reports, any line of code that are uncovered will be detailed there.

#### Linting Rules

The main rules for code quality are:

- Limit cyclomatic complexity in 3
- Max statements in functions are 10
- Max nested callbacks are 2
- Max depth of nested code blocks are 2
- Max lines per file are 150
- Use of `var` are not allowed
- Erro using console for debugging
- Prefer destructuring and spread
- Add every dependency used inside useEffect

## Thanks

Any questions, please contact me here on github, on `evandrobm@gmail.com` email or in phone (or whatsapp) in +55 51 98100 0485.

Hope you enjoy!
