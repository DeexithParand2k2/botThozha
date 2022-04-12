//0 means click to start
//1 means male or female page

//selected Gender, check = gender selection done
{
    //need to get from previous page
    //var username;
    //need to pass to next page where the chat is 
    var selectedGender;

    var textSelect = false;

    var tempMaleMsg = document.getElementById('male');
    var tempFemaleMsg = document.getElementById('female');
    var tempKing = document.getElementById('kingCoin');
    var tempQueen = document.getElementById('queenCoin');

    var tempText = document.getElementById('innerText');
}


function genderPage(){

    if(textSelect==false){
        //generated icons
        tempKing.style.display = "block";
        tempQueen.style.display = "block"; 

        tempText.innerHTML = "Male (or) Female";
        textSelect=true;
    }
    else{
        tempText.innerHTML = "Starting Chat...";
        setTimeout( function() { 
            //window.open("");
            window.open("C:/Users/deexi/OneDrive/Desktop/Thozha/page/chat.html","_self");
        }, 2000);
    }
     
}

function genderMsgMale(){
    tempMaleMsg.style.display = "block";
    tempFemaleMsg.style.display = "none";
    //this value is to be shared
    selectedGender = "Pugazh";
    localStorage.setItem('selectedGender', selectedGender);

    tempText.innerHTML = "Can we confirm"+ "<br />" + "&nbsp;&nbsp;Bot Pugazh";
}

function genderMsgFemale(){
    tempMaleMsg.style.display = "none";
    tempFemaleMsg.style.display = "block";
    //this value is to be shared
    selectedGender = "Kayal";
    localStorage.setItem('selectedGender', selectedGender);

    tempText.innerHTML = "Can we confirm" + "<br />" + "&nbsp;&nbsp;Bot Kayal";
}

function updateUserName(){

    const usernameStr = localStorage.getItem('username');
    console.log(usernameStr);

    var temp = document.getElementById('user');
    //this is the variable from firstpage.html
    temp.innerHTML = usernameStr;
}