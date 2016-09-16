$(document).foundation();

function openTab(tab) {
  $("#example-tabs").foundation("selectTab", tab);
}

function moveToClosure() {
  location='#closure';
}
// jQuery(document).ready(function($) {
//         $(".rt01").attr('data-tabs',{
//            "isAutoInit" : true,
//            "fx"         : "line",
//            "speed"      : 800,
//            "isSlideshow" : true,
//            "slideshow"   : { "delay": 5000 },
//            "isPlayPause" : true,
//            "timer" : "arc",
//            "isTimer" : true
//         });
//     });
