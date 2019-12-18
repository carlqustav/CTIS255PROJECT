
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

    $("button").click(function () {

        zorluk = diff.dif.value;

        for (var i = 0; i < zorluk; i++){
            divRnd[i] = 0;
        }
        while(selected != zorluk){
            var i = parseInt(Math.random() * 3 + 1);
            var j = parseInt(Math.random() * 3 + 1);
            
        
            if (!rndArea[i][j]) {
                rndArea[i][j] = true;
                selected++;
            }
        }

        selected = 0;

        while(selected != zorluk){
            var k = parseInt(Math.random() * zorluk);

            if(!divRnd[k]){
                divRnd[k] = ++selected;
            }
        }

        selected = 0;

        $("#cover").fadeOut(1000);
        $("#main").animate({ "background-color": "rgba(0,0,0,0)" }, 'slow', function () {
            $("#main").css({ "background-image": `url("memorybackground.jpg")` },{"opacity":"0"})
                .animate({"opacity":"1"});
        });

        for (var i = 0; i < 4; i++) {
            tempW = 40;
            for (var j = 0; j < 4; j++) {
                if (rndArea[i][j]) {
                    var tempDiv = $(`<div class="white" style="left:${tempW}px;top:${tempH}px;"></div>`)
                        .on('click', function () {
                            
                            
                            if($(this).text() != currBox){
                                alert("FAIL");
                                $(this).parent().children().off();
                            }
                            else{
                                if(currBox  == zorluk){
                                    alert("WIN");
                                }
                                else{
                                    currBox++;
                                }
                            }
                        }).text(divRnd[selected++]);
                    $("#main").prepend(tempDiv);

                    div.push(tempDiv);
                }
                tempW += 220;
            }
            tempH += 180;
        }    



    });
});
