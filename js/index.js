function turn_dark() {
    document.getElementById("myBody").classList.toggle("dark");
}

document.getElementById("header_search").hidden = true;

function hide() {
  document.getElementById("header_search").hidden = true;
}

function show() {
  document.getElementById("header_search").hidden = false;
}

$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()){
      $("body").addClass("sticky")
    } else {
      $("body").removeClass("sticky")
    }
  })
});

function go_to_top() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}



