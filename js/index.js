function turn_dark() {
    document.getElementById("myBody").classList.toggle("dark");
}

function disableTxt() {
  document.getElementById("header_search").hidden = true;
}

function undisableTxt() {
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