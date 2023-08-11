window.onload = function () {
    let count = document.getElementById("count");
    let dec = document.getElementById("dec");
    let inc = document.getElementById("inc");
    dec.onclick = function () {
        count.value = parseInt(count.value) + 1;
    };
    inc.onclick = function () {
        count.value = parseInt(count.value) - 1;
    };
};