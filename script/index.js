//when check=1 true, else false
//variable for username
var username;
//when true spawn Eye Slash else spawn Eye
var check = 1;

function changeHeader(){
    var user = document.getElementById('user');
    var lock = document.getElementById('lock');
    var eye = document.getElementById('eye');
    //if(passwordCheck()==true){
    if(check){
        user.style.display = 'block';
        lock.style.display = 'none';
        eye.style.display = 'block';
    }
    else{
        user.style.display = 'none';
        lock.style.display = 'block';
    }
}

function modalDisplay(){
    var temp = document.getElementById('modal');
    temp.style.display = "block";
}

//toggle case
var toggle=0;
function infoBoxText(){
    if(toggle==0){
        var temp = document.getElementsByClassName('infoBox');
        temp[0].style.display = "block";
        toggle=1;
    }
    else{
        var temp = document.getElementsByClassName('infoBox');
        temp[0].style.display = "none";
        toggle=0;
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

// var input = document.getElementById("username");
// input.addEventListener("keyup", function(event) {
//     if(event.keyCode == 13) {
//         document.getElementById("enter").click();
//     }
// });

function getUsername(){
    var inputBox = document.getElementById('username');
    username = inputBox.value;
    localStorage.setItem('username', inputBox.value);
}

document.addEventListener('keydown',someEvent = (event) =>{
    var recEvent = event.key;
    if(recEvent == 'Enter'){
        document.getElementById("enter").click();
        document.getElementById("enter").style.color = "orangered";
        setTimeout(revertColor, 100);
    }
},true);

function revertColor(){
    document.getElementById("enter").style.color = "rgba(255, 149, 0)";
    changeHeader();
    modal.style.display = "none";
}
