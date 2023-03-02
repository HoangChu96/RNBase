require('dotenv').config();

const schema = process.env.BASE_URL;

module.exports = {
  schema,
  documents: './src/**/*.graphql',
};
