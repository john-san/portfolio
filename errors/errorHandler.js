const handleFourOhFour = (req, res, next) => { 
  console.log('Handling 404 error');

  // Create new error to handle non-existent routes
  const err = new Error('err');
  err.status = 404;
  err.message = 'Oops, page not found. Looks like that route does not exist.';

  // Pass error to global error handler below
  next(err);
};

// Global error handler
const handleGlobalError = (err, req, res, next) => {
  console.log('Handling a global error');
  console.log(err);

  // Set error status and send error message to the page 
  res.status(err.status || 500);
  res.render('error', { err });
};

module.exports = { handleFourOhFour, handleGlobalError };