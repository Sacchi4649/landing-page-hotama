document.addEventListener("DOMContentLoaded", function () {
  var backtotop = document.getElementById("backtotop");
  const navElement = document.querySelector("header");
  window.onscroll = function () {
    // scrollFunction();
    if (window.pageYOffset > 50) {
      backtotop.style.position = "fixed";
      backtotop.style.display = "inline-block";

      navElement.style.background = "#fff";
      navElement.style.position = "fixed";
      navElement.style.borderBottom = "1px solid #e2e8f0";
    } else {
      backtotop.style.display = "none";

      navElement.style.background = "none";
      navElement.style.position = "relative";
      navElement.style.borderBottom = "none";
    }
  };

  backtotop.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});
