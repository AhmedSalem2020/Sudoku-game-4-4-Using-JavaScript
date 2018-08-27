
var PX = 0;
var PY = 0;
var groupname = 'images/G1';
var flag = false;
var duration = 60;
var playerName = "ahmed";
var age = 0;
var level = 1;
var score = 0;

var arrg = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

function Create_imgObj(gr_name,num) {

    var im = document.createElement("img");
    im.src = gr_name + "/" + num + ".jpg";
    im.style.width = "100px";
    im.style.height = "100px";
    return im;
}

window.onload = function () {
    picObj = document.createElement('div');
    picObj.style.backgroundImage = groupname+"/1.jpg"

    var tabObj = document.getElementsByTagName("table")[0];
    var bodObj = document.getElementsByTagName("body")[0];

    var btn = document.getElementsByTagName("input")[0];
    var sp_time = document.getElementsByName("time")[0];

    var tabData = document.getElementsByClassName("data")[0].children[0];

    playerName = localStorage.getItem("name");
    age = localStorage.getItem("age");
    level = localStorage.getItem("level");
    groupname = localStorage.getItem("group");

    tabData.children[0].children[0].innerText = "Name : " + playerName;
    tabData.children[1].children[0].innerText = "Age : " + age;
    tabData.children[2].children[0].innerText = "Level :" + level;

    tabData.children[3].children[0].children[0].src = groupname + "/1.jpg";
    tabData.children[4].children[0].children[0].src = groupname + "/2.jpg";
    tabData.children[5].children[0].children[0].src = groupname + "/3.jpg";
    tabData.children[6].children[0].children[0].src = groupname + "/4.jpg";

    var argd = rand();
    var arim = rand_img();

    arrg[argd[0][0]][argd[0][1]] = arim[0];
    arrg[argd[1][0]][argd[1][1]] = arim[1];
    arrg[argd[2][0]][argd[2][1]] = arim[2];
    arrg[argd[3][0]][argd[3][1]] = arim[3];

    tabObj.children[0].children[argd[0][0]].children[argd[0][1]].appendChild(new Create_imgObj(groupname, arim[0]));
    tabObj.children[0].children[argd[1][0]].children[argd[1][1]].appendChild(new Create_imgObj(groupname, arim[1]));
    tabObj.children[0].children[argd[2][0]].children[argd[2][1]].appendChild(new Create_imgObj(groupname, arim[2]));
    tabObj.children[0].children[argd[3][0]].children[argd[3][1]].appendChild(new Create_imgObj(groupname, arim[3]));

    tabObj.children[0].children[PX].children[PY].style.borderColor = "red";

    tabObj.onclick = function (e) {
       /* global = e;
        global.target.cellIndex
        global.target.parentNode.rowIndex
        global.path[0].cellIndex
        global.path[1].rowIndex
        */
        if (flag == true) {
            var posx = PX;
            var posy = PY;
            PX = e.target.parentNode.rowIndex
            PY = e.target.cellIndex;
           
            tabObj.children[0].children[posx].children[posy].style.borderColor = "";
            tabObj.children[0].children[PX].children[PY].style.borderColor = "red";
            console.log(PX + ',' + PY);
        }
    };
    bodObj.onkeydown = function (e) {
        if (flag == true) {

            global = e;
            index = e.keyCode;
            switch (index) {
                //right
                case 39:
                    var pos = PY++;
                    if (PY == 4)
                        PY = 0;
                    tabObj.children[0].children[PX].children[pos].style.borderColor = "";
                    tabObj.children[0].children[PX].children[PY].style.borderColor = "red";
                    break;
                    //left
                case 37:
                    var pos = PY--;
                    if (PY == -1)
                        PY = 3;
                    tabObj.children[0].children[PX].children[pos].style.borderColor = "";
                    tabObj.children[0].children[PX].children[PY].style.borderColor = "red";
                    break;
                    //down
                case 40:
                    var pos = PX++;
                    if (PX == 4)
                        PX = 0;
                    tabObj.children[0].children[pos].children[PY].style.borderColor = "";
                    tabObj.children[0].children[PX].children[PY].style.borderColor = "red";
                    break;
                    //up
                case 38:
                    var pos = PX--;
                    if (PX == -1)
                        PX = 3;
                    tabObj.children[0].children[pos].children[PY].style.borderColor = "";
                    tabObj.children[0].children[PX].children[PY].style.borderColor = "red";
                    break;
            }
        }
    }

    bodObj.onkeypress = function (e) {
        if (flag == true) {

            //global = e;
            index = e.key;
            switch (index) {
                case "1":
                    if (fill(arrg, PX, PY, 1) == true) {
                        console.log("1");
                        var imObj = new Create_imgObj(groupname, 1);
                        tabObj.children[0].children[PX].children[PY].appendChild(imObj);
                    }

                    break;
                case "2":
                    if (fill(arrg, PX, PY, 2) == true) {
                        console.log("2");
                        var imObj = new Create_imgObj(groupname, 2);
                        tabObj.children[0].children[PX].children[PY].appendChild(imObj);
                    }
                    break;
                case "3":
                    if (fill(arrg, PX, PY, 3) == true) {
                        console.log("3");
                        var imObj = new Create_imgObj(groupname, 3);
                        tabObj.children[0].children[PX].children[PY].appendChild(imObj);
                    }
                    break;
                case "4":
                    if (fill(arrg, PX, PY, 4) == true) {
                        console.log("4");
                        var imObj = new Create_imgObj(groupname, 4);
                        tabObj.children[0].children[PX].children[PY].appendChild(imObj);
                    }
                    break;
                    if (false == false) {

                    }
                    //if (check_winner(arrg) == true)
                    //    alert("Win");
            }
        }
    };

    btn.onclick = function () {
        if (flag == false) {
            flag = true;
            alert("Game started");

            tm = setInterval(function () {

                if (check_winner(arrg) == true) {
                    clearInterval(tm);
                    flag = false;
                    if (confirm("You Have Won. DO you want to play again?") == true) {
                        //localStorage.setItem("score", score + 1);
                        location.reload();
                    }
                    else    
                    {
                        open("Mainpage.html", "_Self");
                    }  
                }

                duration--;
                sp_time.innerText = duration;
                if (duration == 0) {
                    clearInterval(tm);
                    flag = false;
                    if (confirm("Game Over. DO you want to play again?") == true) {
                        location.reload();
                    }
                    else {
                        open("Mainpage.html", "_bhhhSelf");
                    }
                }
            }, 1000);
        }
    };
};