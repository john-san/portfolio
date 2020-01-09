const express = require('express');
const path = require('path'); 

const app = express();
const routes = require('./routes/');
const { handleFourOhFour, handleGlobalError } = require('./errors/errorHandler');
app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));
app.use('/static', express.static(__dirname + '/node_modules/animate.css'));

app.use(routes);

app.use(handleFourOhFour);
app.use(handleGlobalError);


app.listen(3000, '0.0.0.0', function() {
  console.log('Listening to port:  ' + 3000);
});
