a = document.getElementById("userInputA").value;
b = document.getElementById("userInputB").value;
n = document.getElementById("userInputSum").value;


function doCal() {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (i % a == 0 || i % b == 0) {
            sum += i;
        }
    }

    alert(sum);
}