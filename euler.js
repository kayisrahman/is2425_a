
function doCal() {
    let a = document.getElementById("userInputA").value;
    let b = document.getElementById("userInputB").value;
    let n = document.getElementById("userInputSum").value;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (i % a == 0 || i % b == 0) {
            sum += i;
        }
    }

    alert(sum);
}