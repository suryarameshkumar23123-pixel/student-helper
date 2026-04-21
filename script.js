function simplify() {
    let text = document.getElementById("inputText").value;
    document.getElementById("output").innerHTML = "Simple: " + text;
}

function summarize() {
    let text = document.getElementById("inputText").value;
    document.getElementById("output").innerHTML = "Summary: " + text.substring(0, 100);
}