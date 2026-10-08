(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.textContent = open ? "[ X ]" : "[ = ]";
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
})();
