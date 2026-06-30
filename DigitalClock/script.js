const clock = document.querySelector("#clock");

setInterval(function () {

    const date = new Date();

    clock.innerText = date.toLocaleTimeString();

}, 1000);