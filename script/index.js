//Arrays
const greet = ["hola","hola amigo","hi", "hello", "hey", "helloo", "hellooo", "g morining", "gmorning", "good morning", "morning", "good day", "good afternoon", "good evening", "greetings", "greeting", "good to see you", "its good seeing you", "how are you", "how're you", "how are you doing", "how ya doin'", "how ya doin", "how is everything", "how is everything going", "how's everything going", "how is you", "how's you", "how are things", "how're things", "how is it going", "how's it going", "how's it goin'", "how's it goin", "how is life been treating you", "how's life been treating you", "how have you been", "how've you been", "what is up", "what's up", "what is cracking", "what's cracking", "what is good", "what's good", "what is happening", "what's happening", "what is new", "what's new", "what is neww", "g’day", "howdy"];

// function startHere(){
//     var UserInput = window.prompt("Can we start the bot : ");

//     if(UserInput=='No' || UserInput=='no'){
//         window.alert("Fuck Off\nNot in the mood");
//     }
//     else if(UserInput=='Yes' || UserInput=='yes'){
//         var Botchat = window.prompt("Pugazh Bot says what ? : ");
//         createBotReply(Botchat);
//     }
//     else{
//         window.alert("Invalid Input\n");
//     }
// }

function startHere(){
    askQst();
}

function createBotReply(chatString){
    var newDiv = document.createElement("div");

    var styles = {
        "block-size" : "fit-content",
        "box-sizing" : "border-box",
        "padding"    : "10px",
        "margin"     : "10px",

        "overflow"   : "auto",
        "resize"     : "none",

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
    newDiv.innerHTML = chatString;

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

        "overflow"   : "auto",
        "resize"     : "none",

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
    newDiv.innerHTML = chatString;

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
            setTimeout( function() { createBotReply("Hello Deexith, I am Pugazh\n"); }, 2000);
            check = 1;
        }
    }
    if(check==0){
        var tempString = chatArr.join(' ');
        for(let i=0;i<greet.length;i++){
            if(tempString == greet[i]){
                //createBotReply("Hello Deexith, I am Pugazh\n");
                setTimeout( function() { createBotReply("Hello Deexith, I am Pugazh\n"); }, 2000);
                check=1;
            }
        }
    }
    if(check==0){
        //createBotReply("Sorry I don't understand!!!");
        //setTimeout( function() { createBotReply("Sorry I am not able to understand!!!"); }, 2000);
        nextSearch(chatArr);
    }

}

/*3. Reply*/
function getTime(chatArr){
    var time = new Date();

    for(let i=0;i<chatArr.length;i++){
        if((chatArr.includes("time") && chatArr.length==1) || (chatArr.includes("time") && chatArr.includes("please")) || (chatArr.includes("time") && chatArr.includes("now"))){
            setTimeout( function() { 
            createBotReply("Time now is : \""+time.toLocaleTimeString()+"\"");
            }, 2000);
            break;
        }
    }
}

/*4. Game Start*/
function gameStart(){
    setTimeout(function(){createBotReply("Why not, Best of 3 Wins..."); },2000);
    setTimeout(function(){createBotReply("Game will start in 5 seconds..."); },3000);
    //createBotReply("Game will start in 5 seconds...");
}

/*2. date, time, month, year*/
function nextSearch(chatArr){
    let chk=0;

    for(let i=0;i<chatArr.length;i++){
        if((chatArr.includes("time") && chatArr.length==1) || (chatArr.includes("time") && chatArr.includes("please")) || (chatArr.includes("time") && chatArr.includes("now"))){
            getTime(chatArr);
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
    }

    if(chk==0){
        setTimeout( function() { createBotReply("Sorry I am not able to understand!!!"); }, 2000);
    }
}

function askQst(){
    var input = window.prompt("Ask Question : ");
    createUserReply(input);

    greetchat(wordSplit(input.toLowerCase()));
}


