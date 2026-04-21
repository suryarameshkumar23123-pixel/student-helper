function simplifyText() {
    let input = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText =
        "Simplified:\n" + input.substring(0,150);
}

function summarizeText() {
    let input = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText =
        "Summary:\n" + input.substring(0,80) + "...";
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").innerText =
        "Your result will appear here...";
}
