//Arrays

//get username
let userName = localStorage.getItem('username');
userName = userName.toUpperCase();
console.log(userName);

//get botname
let botName = localStorage.getItem('selectedGender');
botName = botName.toUpperCase();
console.log(botName);

function startHere(){
    askQst();
}

function createBotReply(chatString){

    // if(chatString=="" || chatString==NULL){
    //     return;
    // }

    var newDiv = document.createElement("div");

    var styles = {
        "block-size" : "fit-content",
        "box-sizing" : "border-box",
        "padding"    : "10px",
        "margin"     : "10px",

        //"overflow"   : "auto",
        //"resize"     : "vertical",
        "height"     : "auto",

        "width"      : "fit-content",

        "min-width"  : "30%",
        "max-width"  : "100%",

        "border"       : "1px solid #6EFF86",
        "border-radius": "10px",

        "color"        : "white",
        "font-family"  : "'Source Sans Pro', sans-serif",
        "font-weight"  : "bold",
    };

    Object.assign(newDiv.style,styles);
    newDiv.innerHTML = botName + "&ensp;:&ensp;" +chatString;

    var parent = document.getElementById('main');
    parent.appendChild(newDiv);
}

function createUserReply(chatString){
    var newDiv = document.createElement("div");

    var styles = {
        "align-self" : "flex-end",
        "block-size" : "fit-content",
        "box-sizing" : "border-box",
        "padding"    : "10px",
        "margin"     : "10px",

        //"overflow"   : "auto",
        //"resize"     : "vertical",

        "height"     : "auto",

        "width"      : "fit-content",

        "min-width"  : "30%",
        "max-width"  : "100%",

        "border"       : "1px solid white",
        "border-radius": "10px",

        "color"        : "#6EFF86",
        "font-family"  : "'Source Sans Pro', sans-serif",
        "font-weight"  : "bold",
    };

    Object.assign(newDiv.style,styles);
    newDiv.innerHTML = userName + "&ensp;:&ensp;" + chatString;

    var parent = document.getElementById('main');
    parent.appendChild(newDiv);
}

/*Pass some string will split into words*/
function wordSplit(someString){
    var arr = someString.split(" ");
    return arr;
}

/*1. Greeting chat, pass the split word of input chat*/
function greetchat(chatArr){
    let check = 0;
    //var chatArr = userChat();
    for(let i=0;i<greet.length;i++){
        if(chatArr.includes(greet[i])){
            //createBotReply("Hello Deexith, I am Pugazh\n");
            setTimeout( function() { createBotReply("Hello "+ userName + " , I am " + botName + "\n"); }, 2000);
            check = 1;
        }
    }

    if(check==0){
        var tempString = chatArr.join(' ');
        for(let i=0;i<greet.length;i++){
            if(tempString == greet[i]){
                //createBotReply("Hello Deexith, I am Pugazh\n");
                setTimeout( function() { createBotReply("Hello "+ userName + " , I am " + botName + "\n"); }, 2000);
                check=1;
            }
        }
    }
    if(check==0){
        nextSearch(chatArr);
    }

}

/*3. getTime*/
function getTime(){
    var time = new Date();

    setTimeout( function() { 
        createBotReply("Time now is : \""+time.toLocaleTimeString()+"\"");
    }, 2000);
}

/*4. Game Start*/
function gameStart(){
    setTimeout(function(){createBotReply("Why not, Best of 3 Wins..."); },2000);
    setTimeout(function(){createBotReply("Game will start in 5 seconds..."); },3000);
    //createBotReply("Game will start in 5 seconds...");

    //var temp = document.getElementsByClassName("gameCanvas")[0]; 
    setTimeout(function(){
        var temp = document.getElementById("gameCanvas");
        temp.style.display = "flex";
        var parent = document.getElementById('main');
        parent.appendChild(temp);
         
        //console.log("Hello");
    },5000);
}

/*5. getDate*/
function getDate(){
    var value = new Date();
    
    if(value.getMonth()+1 < 9){
        var someString = "Today's date is : "+value.getDate()+"-0"+(value.getMonth()+1)+"-"+value.getFullYear();
    }
    else{
        var someString = "Today's date is : "+value.getDate()+"-"+(value.getMonth()+1)+"-"+value.getFullYear();
    }
    
    //createBotReply(someString);
    setTimeout(function(){createBotReply(someString); },3000);
}

/*5a. getDay*/
function getDay(){
    var value = new Date();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    someString = "Today is \""+days[value.getDay()]+"\"";
    
    //createBotReply(someString);
    setTimeout(function(){createBotReply(someString); },3000);
}

/*5b. getMonth*/
function getMonth(){
    var value = new Date();

    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    someString = "This month is : \"" + months[value.getMonth()] + "\"";
    
    //createBotReply(someString);
    setTimeout(function(){createBotReply(someString); },3000);
}

/*5c. getYear*/
function getYear(){
    var value = new Date();

    someString = "This is \"" + value.getFullYear() + "\"\n";
    
    //createBotReply(someString);
    setTimeout(function(){createBotReply(someString); },3000);
}

/*6. getJoke*/
function getJoke(){
    //var len = jokes.length+1;
    var index = Math.floor(Math.random() * 100);

    var someString = jokes[index];

    setTimeout(function(){createBotReply(someString); },2000);
}

/*2. date, time, month, year*/
function nextSearch(chatArr){
    let chk=0;

    for(let i=0;i<chatArr.length;i++){
        if((chatArr.includes("time") && chatArr.length==1) || (chatArr.includes("time") && chatArr.includes("is") && chatArr.includes("it")) || (chatArr.includes("time") && chatArr.includes("please")) || (chatArr.includes("time") && chatArr.includes("now"))){
            getTime();
            chk=1;
            break;
        }
        else if((chatArr.includes("game") && chatArr.includes("alien") && chatArr.includes("play"))||
        (chatArr.includes("how") && chatArr.includes("game") && chatArr.includes("alien") && (chatArr.includes("abt")||chatArr.includes("about")))||
        (chatArr.includes("game") && chatArr.includes("we") && chatArr.includes("alien") && chatArr.includes("can"))){
            setTimeout(function(){createBotReply("Yaay!! I'm excited to introduce my brother to you..."); },3000);
            setTimeout(function(){createBotReply("Cuzz he is my creator's first project..."); },3500);
            setTimeout(function(){
                window.open("https://clever-bhaskara-7b82e6.netlify.app"); 
            },6000);
            //createBotReply("Why not, Best of 3 Wins...");
            chk=1;
            break;
        }
        else if((chatArr.includes("game") && chatArr.includes("play"))||
        (chatArr.includes("how") && chatArr.includes("game") && (chatArr.includes("abt")||chatArr.includes("about")))||
        (chatArr.includes("game") && chatArr.includes("we") && chatArr.includes("can"))){
            gameStart();
            //createBotReply("Why not, Best of 3 Wins...");
            chk=1;
            break;
        }
        else if((chatArr.includes("date") && chatArr.includes("today"))){
            getDate();
            chk=1;
            break;
        } 
        else if((chatArr.includes("day") && chatArr.includes("what") && chatArr.includes("today"))||(chatArr.includes("day") && chatArr.includes("what") && chatArr.includes("it"))){
            getDay();
            chk=1;
            break;
        }
        else if((chatArr.includes("month") && chatArr.includes("what") && (chatArr.includes("this")||chatArr.includes("present")))||(chatArr.includes("month") && chatArr.includes("what") && chatArr.includes("it"))){
            getMonth();
            chk=1;
            break;
        }
        else if((chatArr.includes("year") && chatArr.includes("what") && (chatArr.includes("this")||chatArr.includes("present")))||(chatArr.includes("year") && chatArr.includes("what") && chatArr.includes("it"))){
            getYear();
            chk=1;
            break;
        }
        else if((chatArr.includes("tell") && chatArr.includes("me") && (chatArr.includes("joke")))||(chatArr.includes("tell") && chatArr.includes("joke"))){
            getJoke();
            chk=1;
            break;
        }
        else if((chatArr.includes("play") && chatArr.includes("wordle"))||(chatArr.includes("launch") && chatArr.includes("wordle"))){
            setTimeout(function(){createBotReply("Starting wordle..."); },3000);
            setTimeout(function(){
                window.open("https://www.nytimes.com/games/wordle/index.html"); 
            },6000);
            chk=1;
            break;
        }
        else if((chatArr.includes("created") && chatArr.includes("you"))||(chatArr.includes("your") && chatArr.includes("creator"))){
            setTimeout(function(){createBotReply("I was created by Deexith on 20/4/22"); },3000);
            chk=1;
            break;
        }
        else if((chatArr.includes("your") && chatArr.includes("name"))){
            setTimeout(function(){createBotReply("My name is "+botName); },3000);
            chk=1;
            break;
        }
        else if((chatArr.includes("open") && chatArr.includes("youtube"))||(chatArr.includes("launch") && chatArr.includes("youtube"))){
            setTimeout(function(){createBotReply("Starting youtube..."); },3000);
            setTimeout(function(){
                window.open("https://www.youtube.com/"); 
            },6000);
            chk=1;
            break;
        }
        else if((chatArr.includes("i") && chatArr.includes("hungry"))||(chatArr.includes("i'm") && chatArr.includes("hungry"))){
            var reply;
            reply = window.prompt("If you'd like to order food, enter your preference : ");
            reply = reply.toLowerCase();

            if(reply=="zomato"){
                setTimeout(function(){createBotReply("Opening Zomato..."); },4000);
                setTimeout(function(){
                    window.open("https://www.zomato.com/"); 
                },6000);
                chk=1;
                break;
            }
            else if(reply=="swiggy"){
                setTimeout(function(){createBotReply("Opening Swiggy..."); },4000);
                setTimeout(function(){
                    window.open("https://www.swiggy.com/"); 
                },6000);
                chk=1;
                break;
            }
        }

        else if((chatArr.includes("book") && chatArr.includes("cab"))||(chatArr.includes("i") && (chatArr.includes("wanna")||chatArr.includes("want")) && chatArr.includes("travel"))){
            var reply;
            reply = window.prompt("Enter your preference, OLA or UBER : ");
            reply = reply.toLowerCase();

            if(reply=="ola"){
                setTimeout(function(){createBotReply("Opening Ola..."); },4000);
                setTimeout(function(){
                    window.open("https://www.olacabs.com/"); 
                },6000);
                setTimeout(function(){
                    createBotReply("Enjoy your ride!!!");
                },8000);
                chk=1;
                break;
            }
            else if(reply=="uber"){
                setTimeout(function(){createBotReply("Opening Uber..."); },4000);
                setTimeout(function(){
                    window.open("https://www.uber.com/in/en/"); 
                },6000);
                setTimeout(function(){
                    createBotReply("Enjoy your ride!!!"); 
                },8000);
                chk=1;
                break;
            }
        }

        else if((chatArr.includes("make") && chatArr.includes("me") && (chatArr.includes("happy")))|| (chatArr.includes("i") && chatArr.includes("am") && (chatArr.includes("sad"))) ||(chatArr.includes("entertain") && chatArr.includes("me"))){
            setTimeout(function(){createBotReply("Can I tell you a joke?"); },1000);
            
            var reply;
            reply = window.prompt("Reply if you want a joke : ");
            reply = reply.toLowerCase();
        
            console.log(reply);

            if(reply=="yes"){
                setTimeout(function(){createUserReply("yes"); },4000);
                setTimeout(function(){getJoke(); },8000);
                chk=1;
                break;
            }
            else{
                setTimeout(function(){createUserReply("no"); },4000);
                setTimeout(function(){createBotReply("As you say, Sir"); },8000);
                chk=1;
                break;
            }
        }
    }

    if(chk==0){
        setTimeout( function() { createBotReply("Sorry, I'm unable to understand what you are saying.<br>Can you kindly Rephrase?"); }, 2000);
    }
}

function askQst(){
    var inputBox = document.getElementById('inputBox');
    var input = inputBox.value;

    if(input==""){
        return;
    }

    createUserReply(input);

    greetchat(wordSplit(input.toLowerCase()));
}

document.addEventListener('keydown',someEvent = (event) =>{
    var recEvent = event.key;
    if(recEvent == 'Enter'){
        document.getElementById("tick").click();
        document.getElementById("tick").style.color = "darkorange";
        setTimeout(revertColor, 100);
    }
},true);

function revertColor(){
    document.getElementById("tick").style.color = "black";
    var inputBox = document.getElementById('inputBox');
    inputBox.value = "";
}


