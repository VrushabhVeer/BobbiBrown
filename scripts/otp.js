function clickEvent(first, last) {
    if (first.value.length) {
        document.getElementById(last).focus();
    }
}

function myFunction() {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}