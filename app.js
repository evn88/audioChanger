$(document).ready(function () {
    var audio = $("#player")[0];
    var dataPath = "data/audio/";
    var scenario;



    $("#start").on('click', function () {
        $("#start_form").toggle();
        $("#audio_form").toggle();
        $(audio).attr('src', dataPath + data.start.default + ".mp3");
        audio.play();
    })


    $(".yes").click(function () {
        audio.play();
    })
    $(".no").click(function () {
        audio.pause();
    })
});



console.log(data.start);
/*

function iterator (obj, callback){
    var item, index=0, length=obj.length;

    for(; index < length; index++){
        item = obj[index];
        //if (Object.prototype.toString.call === '[object Object]') {
            iterator(item, callback);
            console.log('Object iteration');
       }
        else{
            callback(item);
            console.log('else iteration');
        }
    }
}

function callback(item){
    console.log(item);
}

*/
