'use strict';

exports.index = function(req, res){
  res.render('index');
};

exports.apidoc = function(req, res){
  res.json({ serverTime :  Date.now()}); 
};
