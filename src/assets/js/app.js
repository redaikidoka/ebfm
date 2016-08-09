$(document).foundation();

function openTab(tab) {
  $("#example-tabs").foundation("selectTab", tab);
}

jQuery(document).ready(function($) {
        $(".rt01").rubytabs({
            "fx"     : "cssOne",
            "speed"  : 800,
            "pag"    : { "align" : "center" }
        });
    });
