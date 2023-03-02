const replace = require('replace-in-file');
const options = {
  files: 'src/services/graphql/graphql-sdk-generated.ts',
  from: "import type {fetcher} from './graphql-fetcher';",
  to: "import {fetcher} from './graphql-fetcher';",
};

replace(options)
  .then(results => {
    console.log('Replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
