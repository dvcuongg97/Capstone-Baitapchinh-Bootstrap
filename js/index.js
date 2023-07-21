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
      $("header").addClass("sticky")
    } else {
      $("header").removeClass("sticky")
    }
  })
});