const logger = (req, res, next) => {
  req.hello = 'hello I am here';
  console.log(
    `${req.method} ${req.protocall}://${req.hostname}:${process.env.PORT}${req.originalUrl}`
  );
  console.log('middleware ran');
  next();
};
module.exports = logger;
