# Portfolio

This app will serve as an all encompassing software development portfolio. The main goal of this project is to demonstrate key software development skills as well as documenting the process of creating the portfolio. Key skills to be demonstrated will be:

- Web application development
- Agile software design
- Continuous integration and continuous delivery
- Version control
- Documentation
- Testing
- Cloud deployment and integration
- Infrastructure as code

# Initial MVP

The initial MVP will be to create a blogging application in order to support posting articles documenting the process of adding future features. This application will involve:

- A simple interface for listing all blog post titles with a the first sentence. Each post should be clickable linking to the post details page.
- An interface for writing a new blog post.
- Details pages for each post.
- A post data structure will contain:
  - title
  - post_body
  - created_date

The initial tech stack:

- React.js. The user interface will be developed using React.js. I will primarily be using functional React. I prefer this paradigm because it keeps me honest when it comes to state.
- Typescript. I weighed two options when choosing a language for the server code: Python or Typescript. I love both languages but decided it to to be simpler to use one language primarily for this project rather than two.
- Express.js. I want to learn as much as possible during this project so I want the most customizable server framework out there.
- PostgreSQL. I acknowledge that a relational database is likely overkill for any uses this app will initially need. I have the most experience using PSQL and will be using it for now.
- Sequelize. I want to use a Node ORM to help speed up development time initially. I chose sequelize because its popularity and security rating on vulnerability databases was the highest all around.
- AWS. I will be deploying the project on AWS. This is because I already have a domain through AWS and also am most familiar working with AWS.
- Github VC. Simple, free, popular for FOSS.

Some extra goodies:

- Conventional Commits
- Eslint
- Prettier
- Husky
- ADR tools

These will all be set up before any development work starts because it will be easier to start using them from the beginning rather than integrating them later. I will try to write a blog post about each of these tools and their uses at some point soon.

# MVP Progress

Since the MVP is somewhat involved I will be documenting progress by leaving a short log for every major commit below.

## chore: Setup linter and formatter configuration.

I wanted to make sure that my linter, formatter, and pre-commit hook were all working before any major code got committed. It is easier to only check in clean code rather than refactor dirty code later in my opinion.

This involved setting up my **eslintrc** and **tsconfig** files with my preferred settings. I like to use Typescript with strict checks and use the Airbnb style guide so I set those settings as needed. I later fixed both of these configurations to use different settings for my React app and Express server as they use different versions of Javascript.

Afterwards I set-up **prettier** which allows a team to keep to a consistent format within a codebase. Prettier handles odds and ends such as semi-colons, quote style, tab style, etc.

Next I set-up **lint-staged** which when paired with **husky** allows you to create a pre-commit hook that lints and formats the code only staged for commit. If you aren't familiar with git-hooks, they are just scripts that can be automated to run during typical git lifecycle events such as a commit or push. With a pre-commit hook I'm able to automate my style and format guidelines by requiring eslint and prettier to be run before each commit.

## chore: Setup react boilerplate.

This is self explanatory but necessary. I wanted to have some static files ready for serving when I set-up the express server in order to debug and also have some .js files ready for linting to make sure my eslintrc and tsconfig settings were all in working order. This also gives me the availability to focus solely on **babel** and **webpack** in a future commit.

## chore: Add node scripts for linting and formatting.

I wanted to have some easy scripts for checking my style and formatting so I added some useful scripts into my package.json.

## feat(server): ✨ Implement base express server.

I added a basic express server with logging and file serving from the public directory. The logging library I used was morgan and I set it up to run in development mode for right now. The express server runs on **ts-node** allowing me to use typescript on the server-side as well. I also setup a **watch** script using **nodemon** in order to allow for hot reloads during development. There was an issue with using nodemon and ts-node right out of the box which required me to overwrite the base exec property for nodemon. Specifying the exec command explicitly in **nodemon.json** seemed to do the trick without requiring a global install of ts-node.
