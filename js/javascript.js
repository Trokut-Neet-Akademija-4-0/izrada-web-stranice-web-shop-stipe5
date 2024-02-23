function initPartial (element) {
  let xml = new XMLHttpRequest();
  xml.addEventListener("load", function() {
    document.getElementById(element).innerHTML = this.responseText;
  });
  xml.open("GET", `partials/${element}.html`);
  xml.send();
}
initPartial("header");
initPartial("footer");

function headerActive(id) {
  let selector = document.getElementById(id);
  selector.classList.add("active");
}

