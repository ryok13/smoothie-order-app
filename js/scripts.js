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
        return `Thank you ${this.name}! You ordered a ${this.size} smoothie with:<br>
        - Base: ${this.base}<br>
        - Fruits: ${this.fruits.join(", ")}<br>
        - Add-ins: ${this.addins.join(", ")}<br>
        - Toppings: ${this.toppings.join(", ")}<br>`;
    }
}

document.getElementById("smoothieForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    let sizeRadios = document.querySelectorAll('input[name="size"]');
    let size = [];
    for(let i=0; i < sizeRadios.length; i++) {
        if(sizeRadios[i].checked) {
            size = sizeRadios[i].value;
            break;
        }
    }

    let base = document.getElementById("base").value;

    let fruitsCheck = document.querySelectorAll('input[name="fruits"]');
    let fruits = [];
    for(let i=0; i < fruitsCheck.length; i++) {
        if(fruitsCheck[i].checked) {
            fruits.push(fruitsCheck[i].value);
        }
    }

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

    let output = document.createElement("p");
    // document.body.appendChild(output);
    // output.textContent = customSmoothie.getResult();
    output.innerHTML = customSmoothie.getResult();
    document.body.appendChild(output);
})