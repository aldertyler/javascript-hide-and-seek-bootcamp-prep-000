var getFirstSelector = function(selector) {
  return document.querySelector(selector);
};

var nestedTarget = function(parentElement, childElement) {
  return document.getElementsById('parentElement').querySelector('childElement');
};