window.onload = function() {
    // Lyssna efter händelser
    document.querySelectorAll('.team-member').forEach(element => {
        element.addEventListener("mouseenter", effectOn)
        element.addEventListener("mouseleave", effectOff)
        element.addEventListener("click", editTitle)
    });
}

// Position av "team-title" i "team-member"
const childPos = 2

var editTitle = function(e) {
    // Ändra "team-title"    
    let title = prompt("New title:", "Title")
    
    if (e.target.nodeName == "DIV") {
        e.target.children[childPos].innerHTML = title
    } else {
        e.target.parentNode.children[childPos].innerHTML = title
    }
    
};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?
    const style = id.target.style
    
    style.borderStyle = "solid"
    style.margin = "7px"
    style.boxShadow = "10px 10px gray"
}

function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    const style = id.target.style

    style.borderStyle = "none"
    style.margin = "10px"
    style.boxShadow = "none"
}
