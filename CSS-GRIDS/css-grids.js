document.querySelector(".btn").addEventListener("click",changeHeader);

function changeHeader(){
    
    alert("WELL WELL WELL");
    var currentNode = document.querySelector('#website-layout');
    var newNode = document.createElement("div");

    newNode.id="#website"
    newNode.innerHTML=
    '<p>Hello mt name is</p>';

    currentNode.parentNode.replaceChild(newNode, currentNode);
}



