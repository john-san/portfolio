const express = require('express');
const path = require('path'); 
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/');
const { handleFourOhFour, handleGlobalError } = require('./errors/errorHandler');

app.set('view engine', 'pug');

// handle static assets
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/')));
app.use('/static/css', express.static(path.join(__dirname, '/node_modules/animate.css')));

// handle routes
app.use(routes);

// handle errors
app.use(handleFourOhFour);
app.use(handleGlobalError);

app.listen(port, '0.0.0.0', function() {
  console.log('Listening to port:  ' + port);
});
