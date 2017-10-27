function changeElement(id, newtext) {
  var element = document.getElementById(id);
  element.innerHTML = newtext;
}

function newElement(element) {
  document.createElement(element);
}

function attachElement(element) {
  document.appendChild(element);
}

function detachElement(element) {
  document.removeChild(element):
}

function reattachElement(element) {
  document.replaceChild(element);
}

function codifyElement(id, code) {
  document.getElementById(id).onclick = function(){code}
}

function addAttribute(elementid, attr, value) {
  var element = document.getElementById(elementid);
  element.setAttribute(attr, value);
}
