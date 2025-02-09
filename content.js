document.body.style.backgroundColor = "#F8F8FF"//"#f0f8ff";
document.getElementById("myDiv").innerHTML = "=ōwō=";
/*
for (var i = 0; i <10; i++) {
    var button = document.createElement("button");
    this.button.textContent = ' .';
    document.body.appendChild(this.button);
    this.button.addEventListener('click', () => clicky());
    this.button.style.backgroundColor = "red";
}*/

const buttonNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
var br = document.createElement("br");
for (var i =0; i<buttonNames.length; i++) {
    document.body.appendChild(document.createElement("br"));
    for (var j=0; j<buttonNames.length; j++) {
        const button = document.createElement("button");
        button.id = "btnItems" +i +j; // adds position so can be referred to in other places
        button.textContent = 'X';
        button.style.borderBlockColor = "grey";
        button.style.borderInlineColor = "grey";
        button.style.color= "grey";
        button.style.width = "40px";
        button.style.height= "40px";
        button.addEventListener('click', () => {
            if (button.style.backgroundColor == "grey") {
                button.style.backgroundColor = "purple";
                button.style.color= "purple";
                button.style.borderInlineColor = "purple";
                button.style.borderBlockColor = "purple";
                } else if (button.style.backgroundColor == "purple") {
                   button.style.backgroundColor="darkgrey";
                   button.style.color= "black";
                   button.style.borderInlineColor = "darkgrey";
                   button.style.borderBlockColor = "darkgrey";
               } else {
                   button.style.backgroundColor="grey";
                   button.style.color= "grey";
                   button.style.borderInlineColor = "grey";
                   button.style.borderBlockColor = "grey";
               }
        });
        button.style.backgroundColor = "grey";

        button.onclick = function(el) {
       // button.addEventListener('click', () => {
          //  button.style.backgroundColor = "purple";
       // });
            const li = document.createElement('li');
            li.textContent = items[i].name;
    // append list element to your <ul> list 
        document.getElementById('list-section').appendChild(li);
    }
    document.body.appendChild(button);
}
//var br = document.createTextNode("br");
//element.appendChild(br);
//document.write("<br>");
//document.write("hello");
}





/*
const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = '   .';
button.addEventListener('click', () => clicky());
button.style.backgroundColor = "red";
*/

function clicky() {
    if (button.style.backgroundColor == "red") {
     button.style.backgroundColor = "green";
     } else {
        button.style.backgroundColor="red";
    }
}

// do some loopy boi to display a lot of these friends and toggle the corresponding one
// issue now is how to check for win status?
// will ponder this and come back with answers