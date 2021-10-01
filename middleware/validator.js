'use strict';

module.exports = (req, res, next) => {
  if(!req.query.name){ throw new Error('name is not valid');}
  next();
};
