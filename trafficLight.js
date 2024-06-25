const body = document.body;

const div = document.createElement("div");
div.className = "cont";
body.appendChild(div);

let h = document.createElement("h1");
h.textContent = "Traffic Light";
div.appendChild(h);

const div2 = document.createElement("div");
div2.className = "d-flex flex-row justify-content-center m-5";
div.appendChild(div2);

let div3 = document.createElement("div");
div3.className = "d-flex flex-column";
div2.appendChild(div3);

let b1 = document.createElement("button");
b1.className = "button";
b1.id = "stopButton";
b1.onclick = turnOnRed;
b1.textContent = "Stop";
div3.appendChild(b1);

let b2 = document.createElement("button");
b2.className = "button";
b2.id = "readyButton";
b2.onclick = turnOnYellow;
b2.textContent = "Ready";
div3.appendChild(b2);

let b3 = document.createElement("button");
b3.className = "button";
b3.id = "goButton";
b3.onclick = turnOnGreen;
b3.textContent = "Go";
div3.appendChild(b3);

let div4 = document.createElement("div");
div4.className = "traffic";
div2.appendChild(div4);

let div5 = document.createElement("div");
div5.className = "bulb";
div5.id = "stopLight";
div4.appendChild(div5);

let div6 = document.createElement("div");
div6.className = "bulb";
div6.id = "readyLight";
div4.appendChild(div6);

let div7 = document.createElement("div");
div7.className = "bulb";
div7.id = "goLight";
div4.appendChild(div7);

function turnOnRed() {
    div5.style.backgroundColor = 'red';
    div6.style.backgroundColor = '';
    div7.style.backgroundColor = '';
}

function turnOnYellow() {
    div5.style.backgroundColor = '';
    div6.style.backgroundColor = 'yellow';
    div7.style.backgroundColor = '';
}

function turnOnGreen() {
    div5.style.backgroundColor = '';
    div6.style.backgroundColor = '';
    div7.style.backgroundColor = 'green';
}



// const body = document.body;

// const div = document.createElement("div");
// div.className = "cont";
// body.appendChild(div);

// let h = document.createElement("h1");
// h.textContent = "Traffic Light";
// div.appendChild(h);

// const div2 = document.createElement("div");
// div2.className="d-flex flex-row justify-content-center m-5";
// div.appendChild(div2);

// let div3 = document.createElement("div");
// div3.className = "d-flex flex-cloumn";
// div2.appendChild(div3);

// let b1 = document.createElement("button");
// b1.className = "button";
// b1.id ="stopButton";
// b1.onclick = "turnOnRed()";
// b1.textContent = "Stop";
// div3.appendChild(b1);

// let b2 = document.createElement("button");
// b1.className = "button";
// b1.id ="readyButton";
// b1.onclick = "turnOnYellow()";
// b1.textContent = "Ready";
// div3.appendChild(b2);

// let b3 = document.createElement("button");
// b1.className = "button";
// b1.id ="goButton";
// b1.onclick = "turnOnGreen()";
// b1.textContent = "Go";
// div3.appendChild(b3);

// let div4 = document.createElement("div");
// div4.className = "traffic";
// div2.appendChild(div4);

// let div5 = document.createElement("div");
// div5.className = "bulb";
// div5.id = "stopLight";
// div2.appendChild(div5);

// let div6 = document.createElement("div");
// div6.className = "bulb";
// div6.id = "readyLight";
// div2.appendChild(div6);

// let div7 = document.createElement("div");
// div7.className = "bulb";
// div7.id = "goLight";
// div2.appendChild(div7);


// const body = document.body;

// const div = document.createElement("div");
// div.className = "cont";
// body.appendChild(div);

// let h = document.createElement("h1");
// h.textContent = "Traffic Light";
// div.appendChild(h);

// const div2 = document.createElement("div");
// div2.className = "d-flex flex-row justify-content-center m-5";
// div.appendChild(div2);

// let div3 = document.createElement("div");
// div3.className = "d-flex flex-column";
// div2.appendChild(div3);

// let b1 = document.createElement("button");
// b1.className = "button";
// b1.id = "stopButton";
// b1.onclick = turnOnRed;
// b1.textContent = "Stop";
// div3.appendChild(b1);

// let b2 = document.createElement("button");
// b2.className = "button";
// b2.id = "readyButton";
// b2.onclick = turnOnYellow;
// b2.textContent = "Ready";
// div3.appendChild(b2);

// let b3 = document.createElement("button");
// b3.className = "button";
// b3.id = "goButton";
// b3.onclick = turnOnGreen;
// b3.textContent = "Go";
// div3.appendChild(b3);

// let div4 = document.createElement("div");
// div4.className = "traffic";
// div2.appendChild(div4);

// let div5 = document.createElement("div");
// div5.className = "bulb";
// div5.id = "stopLight";
// div4.appendChild(div5);

// let div6 = document.createElement("div");
// div6.className = "bulb";
// div6.id = "readyLight";
// div4.appendChild(div6);

// let div7 = document.createElement("div");
// div7.className = "bulb";
// div7.id = "goLight";
// div4.appendChild(div7);

// function turnOnRed() {
//     div5.style.backgroundColor = 'red';
//     div6.style.backgroundColor = '';
//     div7.style.backgroundColor = '';
// }

// function turnOnYellow() {
//     div5.style.backgroundColor = '';
//     div6.style.backgroundColor = 'yellow';
//     div7.style.backgroundColor = '';
// }

// function turnOnGreen() {
//     div5.style.backgroundColor = '';
//     div6.style.backgroundColor = '';
//     div7.style.backgroundColor = 'green';
// }



