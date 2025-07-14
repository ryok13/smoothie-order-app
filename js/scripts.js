class Smoothie {
    name;
    size;
    base;
    fruits;
    addins;
    toppings;

    constructor(name, size, base, fruits, addins, toppings) {
        this.name = name;
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.addins = addins;
        this.toppings = toppings;
    }

    getResult() {
        return `Thank you, ${this.name}! You ordered a ${this.size} smoothie with:<br><br>
        - Base: ${this.base}<br>
        - Fruits: ${this.fruits}<br>
        - Add-ins: ${this.addins.join(", ")}<br>
        - Toppings: ${this.toppings.join(", ")}<br>`;
    }
}

document.getElementById("smoothieForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    let sizeRadios = document.querySelector('input[name="size"]:checked');
    if (!sizeRadios) {
        alert("Please select a smoothie size.");
    } else {
        size = sizeRadios.value;
    }

    let base = document.getElementById("base").value;

    let fruits = document.getElementById("fruits").value;

    let addinsCheck = document.querySelectorAll('input[name="addins"]');
    let addins = [];
    for(let i=0; i < addinsCheck.length; i++) {
        if(addinsCheck[i].checked) {
            addins.push(addinsCheck[i].value);
        }
    }

    let toppingsCheck = document.querySelectorAll('input[name="toppings"]');
    let toppings = [];
    for(let i=0; i < toppingsCheck.length; i++) {
        if(toppingsCheck[i].checked) {
            toppings.push(toppingsCheck[i].value);
        }
    }

    let customSmoothie = new Smoothie(name, size, base, fruits, addins, toppings);

    let output = document.getElementById("output");
    if (!output) {
        output = document.createElement("p");
        output.id = "output";
        document.getElementsByClassName("container")[0].appendChild(output);
    }
    output.innerHTML = customSmoothie.getResult();

    let smoothieImg = document.createElement("img");
    smoothieImg.alt = "Smoothie Image";

    switch (customSmoothie.size) {
        case "Small":
            smoothieImg.setAttribute("height", "100");
            break;
        case "Medium":
            smoothieImg.setAttribute("height", "150");
            break;
        case "Large":
            smoothieImg.setAttribute("height", "200");
            break;
        default:
            smoothieImg.setAttribute("height", "150");
    }

    switch (customSmoothie.fruits) {
        case "Banana":
            smoothieImg.src = "../img/smoothie-banana.png";
            break;
        case "Strawberry":
            smoothieImg.src = "../img/smoothie-strawberry.png";
            break;
        case "Blueberry":
            smoothieImg.src = "../img/smoothie-blueberry.png";
            break;
        case "Orange":
            smoothieImg.src = "../img/smoothie-orange.png";
            break;
        case "Kiwi":
            smoothieImg.src = "../img/smoothie-kiwi.png";
            break;
        case "Apple":
            smoothieImg.src = "../img/smoothie-apple.png";
            break;
        default:
            smoothieImg.src = "../img/smoothie-banana.png";
    }

    output.appendChild(smoothieImg);
})