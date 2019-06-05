const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next => console.error(next))
  };

module.exports = asyncMiddleware;
