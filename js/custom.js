$(document).ready(function () {
  var numAc = $("article").size();
  var numBc = $("div").size();
  var widSec = 200 * (numAc + numBc);
  var widTotal = widSec + 600;
  $("section").width(widTotal);
  $("body").height(widSec);
  $("html,body").animate(
    {
      scrollTop: widSec,
    },
    2000
  );
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    $("section").stop().animate(
      {
        left: -scroll,
      },
      600
    );
  });
  $("div h2").on("click", function (e) {
    e.preventDefault();
    var index = $(this).parent().index();
    var src = $(this).children("a").attr("href");
    var posAc = 200 * (index - 2);
    $("div,article").removeClass("on");
    $(this).parent().addClass("on");
    $("div p img").attr({
      src: "",
    });
    $(this).siblings("p").children("img").attr({
      src: src,
    });
    $("html,body").scrollTop(posAc);
  });
  $("article h2").on("click", function (e) {
    e.preventDefault();
    var index = $(this).parent().index();
    var src = $(this).children("a").attr("href");
    var posAc = 200 * (index - 2);
    $("article,div").removeClass("on");
    $(this).parent().addClass("on");
    $("article p img").attr({
      src: "",
    });
    $(this).siblings("p").children("img").attr({
      src: src,
    });
    $("html,body").scrollTop(posAc);
  });
  $("span").on("click", function () {
    $("article,div").removeClass("on");
  });
  $("#navi li").on("click", function () {
    var i = $(this).index();
    var posNavi = 1000 * i;
    $("#navi li, article").removeClass();
    $(this).addClass("on");
    $("html,body").scrollTop(posNavi);
  });
});
