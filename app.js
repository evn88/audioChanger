$( document ).ready(function() {
    var audio = $("#player")[0];
    var dataPath = "data/audio/";


    $("#start").on('click', function () {
        $("#start_form").toggle();
        $("#audio_form").toggle();
        audio.play();
    })


    $(".yes").click(function () {
       audio.play();
    })
    $(".no").click(function () {
        audio.pause();
    })
});

function scenario() {
    return $.getJSON('data/scenario.json');
}

console.log(scenario());
