const localStorage = new Object();

localStorage.setObj = function(key, obj) {
  window.localStorage.setItem(key, JSON.stringify(obj));
};

localStorage.getObj = function(key) {
  return JSON.parse(window.localStorage.getItem(key));
};

localStorage.removeObj = function(key) {
  window.localStorage.removeItem(key);
};

localStorage.clear = function() {
  window.localStorage.clear();
};

export default localStorage;
