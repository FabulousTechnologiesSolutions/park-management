$(document).ready(function () {
  $(".toggler").click(function () {
    $(".sidebar ").show();
    $(".toggler").hide();
    $(".close").show();
  });
  $(".close").click(function () {
    $(".sidebar ").hide();
    $(".toggler").show();
    $(".close").hide();
  });
});
