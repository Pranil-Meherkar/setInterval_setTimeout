let count = 0;

function setTimeoutExample() {
    document.getElementById("timeout").innerHTML = "This will be executed only once after timeout";
    console.log("This will be executed only once after timeout");
}

function setIntervalExample() {
    count++;
    document.getElementById("interval").innerHTML = `This will be executed after every interval until clearInterval, Count: ${count}` 
    console.log("This will be executed after every interval");
}

function clearIntervalExample() {
    clearInterval(e);
}
setTimeout(setTimeoutExample,3000);
e = setInterval(setIntervalExample,1000);