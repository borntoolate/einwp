$(function() {
  $("a[href^='#']").click(function () {
    var $speed = 800;
    var $href = $(this).attr("href");
    var $target = $($href === "#" || $href === "" ? 'html' : $href);
    var $position = $target.offset().top;
    $("body,html").animate({
      scrollTop: $position
    }, $speed, "swing");
    return false;
  });
  var $body = $("body");
  var $trigger = $("#js-spmenu_trigger");
  var $close_btn = $("#js-spmenu a");
  $trigger.click(function() {
    $body.toggleClass("spmenu_open");
  });
  $close_btn.click(function() {
    $body.removeClass("spmenu_open");
  });
});
