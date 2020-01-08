const express = require('express');
// const path = require('path'); TODO

const app = express();
const routes = require('./routes/');
const { handleFourOhFour, handleGlobalError } = require('./errors/errorHandler');
app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.use(routes);

app.use(handleFourOhFour);
app.use(handleGlobalError);


app.listen(3000, '0.0.0.0', function() {
  console.log('Listening to port:  ' + 3000);
});
