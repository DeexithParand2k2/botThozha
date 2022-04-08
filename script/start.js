//0 means click to start
//1 means male or female page

//selected Gender, check = gender selection done
{
    var genderSelect;

    var tempMaleMsg = document.getElementById('male');
    var tempFemaleMsg = document.getElementById('female');
    var tempKing = document.getElementById('kingCoin');
    var tempQueen = document.getElementById('queenCoin');
}


function genderPage(){
    //generated icons
    tempKing.style.display = "block";
    tempQueen.style.display = "block"; 

    var tempText = document.getElementById('innerText');
    tempText.innerHTML = "Male (or) Female"; 
}

function genderMsgMale(){
    tempMaleMsg.style.display = "block";
    tempFemaleMsg.style.display = "none";
    //this value is to be shared
    genderSelect = "Pugazh";
}

function genderMsgFemale(){
    tempMaleMsg.style.display = "none";
    tempFemaleMsg.style.display = "block";
    //this value is to be shared
    genderSelect = "Kayal";
}