
var zorluk = 0;
var tempW = 0;
var tempH = 35;
var count = 1;
const mainW = 820;
const mainH = 700;

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

        while(selected != zorluk){
            var i = parseInt(Math.random() * 3 + 1);
            var j = parseInt(Math.random() * 3 + 1);
        
            if (!rndArea[i][j]) {
                rndArea[i][j] = true;
                selected++;
            }
        }
        

        $("#cover").fadeOut(1000);
        $("#main").animate({ "background-color": "rgba(0,0,0,0)" }, 'slow', function () {
            $("#main").css({ "background-image": `url("memorybackground.jpg")` });
        });

        for (var i = 0; i < 4; i++) {
            tempW = 40;
            for (var j = 0; j < 4; j++) {
                if (rndArea[i][j]) {
                    console.log(i + " " + j);
                    var tempDiv = $(`<div class="white" style="left:${tempW}px;top:${tempH}px;"></div>`)
                        .on('click', function () {
                            //to be filled
                        });
                    $("#main").prepend(tempDiv);

                    div.push(tempDiv);
                }
                tempW += 220;
            }
            tempH += 180;
        }
        
        for(var i = 0; i < div.length;i++){
            div[i].text(i+1);
        }

    });
});
