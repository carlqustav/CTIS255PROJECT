
var zorluk = 0;
var tempW = 0;
var tempH = 35;
var count = 1;
const mainW = 820;
const mainH = 700;

var rndArea = [];
var selected = 0;

for (var i = 0; i < 4; i++) {
    rndArea[i] = [];
    for (var j = 0; j < 4; j++) {
        rndArea[i][j] = false;
    }
}

while (selected != 4) {
    var i = parseInt(Math.random() * 3 + 1);
    var j = parseInt(Math.random() * 3 + 1);

    if (!rndArea[i][j]) {
        rndArea[i][j] = true;
        selected++;
    }
}

$(function () {

    $("button").click(function () {

        zorluk = diff.dif.value;

        $("#cover").fadeOut(1000);
        $("#main").animate({ "background-color": "rgba(0,0,0,0)" }, 'slow', function () {
            $("#main").css({ "background-image": `url("memorybackground.jpg")` });

        });

        for (var i = 0; i < 4; i++) {
            tempW = 40;
            for (var j = 0; j < 4; j++) {
                if (rndArea[i][j]) {
                    var div = $(`<div class="white" style="left:${tempW}px;top:${tempH}px;"></div>`)
                        .on('click', function () {
                            alert("osman");
                        });
                    $("#main").prepend(div);
                }
                tempW += 220;
            }
            tempH += 180;
        }
    });
});