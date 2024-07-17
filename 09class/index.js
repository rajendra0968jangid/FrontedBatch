function changes(){
    let name = "helo"
    document.getElementById("para").innerHTML = name;
    document.getElementById('para').style.color = 'green'
}

function changesrevert(){
    let name = "This is p tag"
    document.getElementById("para").innerHTML = name;
    document.getElementById('para').style.color = 'orange'
}