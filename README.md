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
