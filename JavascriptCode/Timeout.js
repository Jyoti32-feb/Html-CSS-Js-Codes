function welcomeMessage() {
    console.log("Welcome to the website!");
    setTimeout(orderrecived, 1000);
}
function orderrecived() {
    console.log("Order received!");
    setTimeout(orderprocessed, 1000);
}
function orderprocessed() {
    console.log("Order processed!");
    setTimeout(orderdelivered, 1000);
}
function orderdelivered() {
    console.log("Order delivered!");
    setTimeout(ordercompleted, 1000);

}
function ordercompleted() {
    console.log("Order completed!");
    setTimeout(orderfeedback, 1000);
}
function orderfeedback() {
    console.log("Rating 1,2,3,4,5...!");
}
setTimeout(welcomeMessage, 1000);