function gifFun(){
    var search = $('#anim-text').val();
    search=search.replace('','+');
    $('#anim-text').val('');
    $('#gif-container').html('');
//  $('#gif-container').focus();
    $.get( "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=1", function( data ) {
//    console.log(data);
    for(var x = 0; x < data.data.length; x++){
      var img = $('<img>');
      img.attr('src', data.data[x].images.original.url);
      $('#gif-container').append(img);
    }
    });
}
 
function madLib(nameNoun, adj, songName, noun, year, animName) {
    var nameNoun = $('#name-text').val();
    var adj = $('#adj-text').val();
    var songName = $('#song-text').val();
    var noun = $('#noun-text').val();
    var year = $('#year-num').val();
    var animName =$('#anim-text').val();
    var story = '';
    story += 'Yo ';
    story += nameNoun;
    story += ' - you seem like a ';
    story += adj;
    story += ' person, since you like ';
    story += songName + '.';
    story += ' Basically, all the ';
    story += noun;
    story += ' born in ';
    story += year;
    story += ' are insanely ';
    story += adj + '.';
    story += ' As a reward for taking this quiz, here is a ';
    story += animName + ' for you! Check it out below!';
//  console.log(story);
    $('#story').append(story);
    $('#name-text').val("");
    $('#adj-text').val("");
    $('#song-text').val("");
    $('#noun-text').val("");
    $('#year-num').val("");
}

$( document ).ready(function() {
    $(this).scrollTop(0);
//    console.log( "ready!" );
    $('#gif-submit-btn').click(function() {
        madLib();
        gifFun();
    });
});


