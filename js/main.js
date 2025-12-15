const hisob = document.getElementById("hisob");

function appendValue(value) {
if (hisob.innerText === "0") {
hisob.innerText = value;
} else {
hisob.innerText += value;
}
}


function clearDisplay() {
hisob.innerText = "0";
}


function deleteLast() {
if (hisob.innerText.length > 1) {
hisob.innerText = hisob.innerText.slice(0, -1);
} else {
hisob.innerText = "0";
}
}


function calculate() {
try {
hisob.innerText = eval(hisob.innerText);
} catch (error) {
hisob.innerText = "Error";
}
}