//when check=1 true, else false
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