let vector1 = [];
let vector2 = [];

for (let i = 0; i < 10; i++) {
    vector1.push(i);
    vector2.push(i);
    console.log("Lennando V1", vector1);
    console.log("Lennando V2", vector2);
}

var paragraph = document.createElement("p");

var htmlString = `<p>Vector 1: ${vector1}.</p> <br>
        <p>Vector 2: ${vector2}.</p>`;
paragraph.innerHTML = htmlString;

document.body.appendChild(paragraph);
console.log("Vector 1:", vector1);
console.log("Vector 2:", vector2);

