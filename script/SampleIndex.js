function startHere(){
    var check = window.prompt("Can we start the bot : ");

    if(check=='No' || check=='no'){
        window.alert("Fuck Off\nNot in the mood");
    }
    else if(check=='Yes' || check=='yes'){
        var chat = window.prompt("Pugazh Bot says what ? : ");
        updateChatBox(chat);
    }
    else{
        window.alert("Invalid Input\n");
    }
}

function updateChatBox(someString){
    document.getElementById('chatBox').innerHTML = someString;
    testCss(someString);
}

function testCss(string){
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

    //var obj = document.getElementById('test');
    Object.assign(newDiv.style,styles);
    newDiv.innerHTML = string;
    var parent = document.getElementById('main');
    parent.appendChild(newDiv);
}
