var startNumber;
var numberOption = [];
var imageGenerator;
var numberGen;
var picArray = ['../unit-4-game/assets/images/cg28.jpg' , "../unit-4-game/assets/images/ek65.jpg" , "../unit-4-game/assets/images/mb30.jpg" , "../unit-4-game/assets/images/mm9.jpg"];
var count = 0;
var wins = 0;
var loses = 0;

function gameReset() {
    count = 0;
    numberOption = [];
   
    startNumber = Math.floor(Math.random() * (120 - 1 + 1) + 19);
    
    
    $('#numberGuess').text(startNumber);
    $('#currentScore').empty();
    $('#pictures').empty();
    while(numberOption.length < 4) {
        numberGen = Math.floor(Math.random() * (12 - 1) + 1);
        if(numberOption.indexOf(numberGen) < 0)
        numberOption.push(numberGen);

    }

    for (i = 0; i < numberOption.length; i++) {
        imageGenerator = $('<img>');

        imageGenerator.addClass('image');

        imageGenerator.attr('src' , picArray[i]);

        imageGenerator.attr('data-value' , numberOption[i]);

        $('#pictures').append(imageGenerator);

    };
    $('.image').on('click' , function () {
        var imageValue = ($(this).attr('data-value'));
        imageValue = parseInt(imageValue);
        count += imageValue;
        $('#currentScore').text(count);
        if(count === startNumber){
            wins++;
            $('#wins').text(wins);
            gameReset();
            
        }else if(count > startNumber){
            loses++;
            $('#loses').text(loses);
            gameReset();
            
        }
    });
};

gameReset();







