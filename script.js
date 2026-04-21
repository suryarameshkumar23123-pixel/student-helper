function simplifyText() {
    let input = document.getElementById("inputText").value;
    let result = "Simplified:\n" + input.substring(0, 150);
    document.getElementById("result").innerText = result;
}

function summarizeText() {
    let input = document.getElementById("inputText").value;
    let result = "Summary:\n" + input.substring(0, 80) + "...";
    document.getElementById("result").innerText = result;
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("result").innerText = "Your result will appear here...";
}
