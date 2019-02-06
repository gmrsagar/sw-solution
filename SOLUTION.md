## Design Decisions

# Listed below is the explanation of the design decisions made during the development of the app.

## Backend API

I started with the backend API following the Model-View-Controller Pattern. I chose the MVC approach in order to standardize the code organization and improve the maintainability. I made use of Sequelize package to build my models and controllers. Sequelize is an ORM which helped me develop faster within strict time constraints as it provided SQL queries bound in aliases. 

Using Sequelize CLI made it very easy to scaffold models and controllers which also contributed to the faster development.

I used ES6 to build this app considering its clean syntax and awesome features such as arrow functions, promises, async, await and classes.

## UI

I built the UI using React.Js, breaking it down into lean components for reusability. Also, it made updating the UI easier.

I used Axios to make the HTTP requests to the API server. Axios is a promise based HTTP Client with a clean syntax which also provides easy to use error handling.

## Plans for an extended timeline

Since the time was limited, I could not spend a lot of time in refactoring my code as well as implementing some enhancements. Some of my plans with an extended timeline would be as follows:

### 1. Writing tests:

I plan to write Unit tests starting with React UI components using Jest. Then I would move on to create Integration tests for UI and backend API using Mocha and Chai. I would also create end to end tests for backend end endpoints. React UI and Express API.

### 2. Employ a CI/CD pipeline:

I would also implement a CI/CD pipeline using travis CI.

### 3. Use State Management Tools: 

Also, I would implement state management using tools such as Redux or MobX to better implement the dataflow in React.

__Thanks for reading! I enjoyed working on the app.__