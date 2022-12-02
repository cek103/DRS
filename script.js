// Contact Us
document.getElementById("send__button").addEventListener("click", () => {
  let subject = document.getElementById("subject").value;
  let comment = document.getElementById("comment").value;
  let name = document.getElementById(name).value;

  window.open(
    "mailto:curtiseugenekelso@gmail.com?subject=" +
      subject +
      "&body=" +
      comment +
      "\n" +
      name
  );
});

// Light & Dark Mode
$(document).ready(() => {
  $(".radio-btn").click(() => {
    $(".radio-inner").toggleClass("active");
    $("body").toggleClass("dark");
    $(
      ".products__container .row .col-sm-4.center-block.text-center img"
    ).toggleClass("dark");
  });
});
