const app = require('./app');
const { connect } = require('mongoose');

connect(process.env.URL_DB).then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("Database connection successful");
  });
}).catch((error) => {
  console.log(error.message);
  process.exit(1);
});