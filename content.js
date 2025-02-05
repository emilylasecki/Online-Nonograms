document.body.style.backgroundColor = "#f0f8ff";
document.getElementById("myDiv").innerHTML = "hello";

const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = '   .';
button.addEventListener('click', () => clicky());
button.style.backgroundColor = "red";

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