// initial value
var groupname = 'G1';
// position of the group 
var GY = 0;

window.addEventListener("load", function () {

    var bodObj = document.getElementsByTagName("body")[0];
    var divObj = document.getElementsByTagName("div")[0];
    var btn = document.getElementsByTagName("input")[0];

    var G1Obj = document.getElementsByTagName("div")[0].children[0];
    var G2Obj = document.getElementsByTagName("div")[0].children[1];
    var G3Obj = document.getElementsByTagName("div")[0].children[2];
    var G4Obj = document.getElementsByTagName("div")[0].children[3];

    G1Obj.onclick = function (e) {
        divObj.children[GY].style.backgroundColor = "azure";
        G1Obj.style.backgroundColor = "brown";
        GY = 0;
    };

    G2Obj.onclick = function (e) {
        divObj.children[GY].style.backgroundColor = "azure";
        G2Obj.style.backgroundColor = "brown";
        GY = 1;
    };

    G3Obj.onclick = function (e) {
        divObj.children[GY].style.backgroundColor = "azure";
        G3Obj.style.backgroundColor = "brown";
        GY = 2;
    };

    G4Obj.onclick = function (e) {
        divObj.children[GY].style.backgroundColor = "azure";
        G4Obj.style.backgroundColor = "brown";
        GY = 3;
    };

    bodObj.onkeydown = function (e) {
            index = e.keyCode;
            switch (index) {
               
                    //down
                case 40:
                    var pos = GY++;
                    if (GY == 4)
                        GY = 0;
                    divObj.children[pos].style.backgroundColor="azure";
                    divObj.children[GY].style.backgroundColor="brown";
                    break;
                    //up
                case 38:
                    var pos = GY--;
                    if (GY == -1)
                        GY = 3;
                    divObj.children[pos].style.backgroundColor="azure";
                    divObj.children[GY].style.backgroundColor="brown";
                    break;
            }
    }

    btn.onclick = function () {

        var group = Number.parseInt(GY) + 1;
        groupname = "images/G"+group;
        localStorage.setItem("group", groupname);
        open("game.html", "_Self");
    };

});