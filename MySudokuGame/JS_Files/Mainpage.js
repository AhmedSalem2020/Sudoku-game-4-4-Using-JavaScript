
//function Start()
//{
//    alert("Clicked");
//    document.body.style.backgroundColor = "blue";
//}
// declare 3 var to sent them to game page
var playerName = "";
var age = 0;
var level = 1;

window.addEventListener("load", function ()
{


    var objName = document.getElementsByTagName("input")[0];
    var objAge = document.getElementsByTagName("input")[1];
    var btn = document.getElementsByTagName("input")[2];


    var objS = document.getElementsByTagName("select")[0];



    btn.onclick = function () {

        playerName = objName.value;
        age = objAge.value;
            // if he dosent choose anything , set lavel 1 
        if (objS.selectedIndex == 2) {
            level = 2;
        }
        else {
            level = 1;
        }

        // to sent the data to game page
        localStorage.setItem("name", playerName);
        localStorage.setItem("age", age);
        localStorage.setItem("level", level);

        // open gallary page in the same tab 
        open("Gallary.html", "_Self");

    };












});


