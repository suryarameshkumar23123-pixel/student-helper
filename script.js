function simplifyText() {
    let input = document.getElementById("inputText").value;
    let output = document.getElementById("output");

    if (input.trim() === "") {
        output.innerHTML = "Please enter text first.";
        return;
    }

    output.innerHTML = "Simple Version:<br><br>" + input.substring(0, 150) + "...";
}

function summarizeText() {
    let input = document.getElementById("inputText").value;
    let output = document.getElementById("output");

    if (input.trim() === "") {
        output.innerHTML = "Please enter text first.";
        return;
    }

    output.innerHTML = "Summary:<br><br>" + input.substring(0, 80) + "...";
}
