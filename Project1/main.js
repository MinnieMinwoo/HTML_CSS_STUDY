const target = document.querySelector("#dynamic");
const stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript"];

function randomString() {
    const selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    const selectStringArr = selectString.split("");
    return selectStringArr;
}

function resetTyping() {
    target.textContent = "";
    const newStringArr = randomString();
    dynamic(newStringArr);
}

function dynamic(randomArr) {
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(() => dynamic(randomArr), 80);
    }
    else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

function blink() {
    target.classList.toggle("active");
}

setInterval(blink, 500);