
var zorluk = 0;
var tempW = 0;
var currBox = 1;
var tempH = 35;
var count = 1;
const mainW = 820;
const mainH = 700;

var divRnd = [];
var div = [];
var rndArea = [];
var selected = 0;

for (var i = 0; i < 4; i++) {
    rndArea[i] = [];
    for (var j = 0; j < 4; j++) {
        rndArea[i][j] = false;
    }
}

$(function () {
    //Grading Criteria 2: Cover appereance animation
    $("#main").animate({opacity:1},1000);

    $("button").click(function () {

        zorluk = diff.dif.value;

        //Random box initialization
        while(selected != zorluk){
            var i = parseInt(Math.random() * 3 + 1);
            var j = parseInt(Math.random() * 3 + 1);
            
            if (!rndArea[i][j]) {
                rndArea[i][j] = true;
                selected++;
            }
        }

        selected = 0;

        //Random sequence initialization
        for (var i = 0; i < zorluk; i++){
            divRnd[i] = 0;
        }

        while(selected != zorluk){
            var k = parseInt(Math.random() * zorluk);

            if(!divRnd[k]){
                divRnd[k] = ++selected;
            }
        }

        selected = 0;

        //Grading Criteria 3:fadeIn/fadeOut
        $("#cover").fadeOut(1000,function(){
            $("#game").fadeIn(1000);
        });
        

        //Grading Criteria 5,7 : Random boxes, Checking sequenceNOTCOMPLETE. 
        for (var i = 0; i < 4; i++) {
            tempW = 40;
            for (var j = 0; j < 4; j++) {
                if (rndArea[i][j]) {
                    var tempDiv = $(`<div class="white" style="left:${tempW}px;top:${tempH}px;"></div>`)
                        .on('click', function () { 
                            if($(this).text() != currBox){
                                $("#main").after(`<div id="win"><p>You failed in level ${zorluk}. Press F5 to play again.</p></div>`);
                                $("#main").css({"box-shadow":"0px 0px 25px 0px red"});
                                $("#win").css({"box-shadow":"0px 0px 25px 0px red"});
                                $(this).css({"box-shadow":"0px 0px 25px 0px red"});
                                $(this).parent().children().off();
                            }
                            else{
                                if(currBox  == zorluk){
                                    $("#main").after(`<div id="win"><p>You completed level ${zorluk}. Press F5 to play again.</p></div>`);
                                    $("#main").css({"box-shadow":"0px 0px 25px 0px green"});
                                    $("#win").css({"box-shadow":"0px 0px 25px 0px green"});
                                    $(this).css({"box-shadow":"0px 0px 25px 0px green"});
                                }
                                else{
                                    currBox++;
                                    $(this).css({"box-shadow":"0px 0px 25px 0px green"});
                                }
                            }
                        }).text(divRnd[selected++]);
                    $("#game").prepend(tempDiv);

                    div.push(tempDiv);
                }
                tempW += 220;
            }
            tempH += 180;
        }    

    });
});

