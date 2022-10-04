function disable(){
    if(document.getElementById("permission").value == "edit"){
        document.getElementById("textarea").disabled = false;
    }
    else{
        document.getElementById("textarea").disabled = true;
    }
}


function font(){
    document.getElementById("textarea").style.fontFamily = document.getElementById("font").value;
}


function color(){
    document.getElementById("textarea").style.color = document.getElementById("color").value;
}



function fontSize(){
    document.getElementById("textarea").style.fontSize = document.getElementById("size").value + "px";
}