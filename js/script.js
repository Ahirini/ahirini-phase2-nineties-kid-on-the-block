/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

function mySubmit() {
    var score = 0;
    for (var i = 0; i++; i=5 ) {
        score = $('.check').val();
    };
   $('#score').append('You got ' + score + ' questions right!!!');
}

$(document).ready(function(){
    $('#submit').on('click', function(){
        mySubmit();
        $('#score').val('');
    })
});
     
//each(function (i, e){sum+=$(e).val();});
//$("#totalScore").val(sum);
   


//$(document).ready(function () {
////    console.log("ready!");
////    $('#score').hide();
//
//    function mySubmit() {
//        var numCorrect = 0;
//        // If no user selection, progress is stopped
//        if (('input[type=radio]:checked') === false) {
//            alert('Please make a selection!');
//
//        }
//        var result = $('radio').val();
//        if (result === "right") {
//            numCorrect = numCorrect + 1;
//        } else {
//            numCorrect = numCorrect + 0;
//        }
//        $('#score').append('You got ' + numCorrect + ' questions right!!!');
//        return score;
//    }
//    
//    $('#submit').on('click', function () {
//        mySubmit();
//    });
//        
//    //    return false;
//
//
//
//});
//   