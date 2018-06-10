var getFirstSelector = function(selector) {
  return document.querySelector(selector);
};

var nestedTarget = function() {
  return document.querySelector('#nested .target');
};

var increaseRankBy = function(n) {
  let list = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
  list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    
  }

}