// Smoothie Class Definition
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
    // Returns a formatted HTML string summarizing the order
    getResult() {
        return `Thank you, ${this.name}! You ordered a ${this.size} smoothie with:<br><br>
        - Base: ${this.base}<br>
        - Fruits: ${this.fruits}<br>
        - Add-ins: ${this.addins.join(", ")}<br>
        - Toppings: ${this.toppings.join(", ")}<br>`;
    }
}
// Form Submission Handler
document.getElementById("smoothieForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Get the user's name
    let name = document.getElementById("name").value;
    // Get selected size (radio input)
    let sizeRadios = document.querySelector('input[name="size"]:checked');
    if (!sizeRadios) {
        alert("Please select a smoothie size.");
    } else {
        size = sizeRadios.value;
    }
    // Get selected base
    let base = document.getElementById("base").value;
    // Get selected fruit
    let fruits = document.getElementById("fruits").value;
    // Collect all selected add-ins (checkbox inputs)
    let addinsCheck = document.querySelectorAll('input[name="addins"]');
    let addins = [];
    for(let i=0; i < addinsCheck.length; i++) {
        if(addinsCheck[i].checked) {
            addins.push(addinsCheck[i].value);
        }
    }
    // Collect all selected toppings (checkbox inputs)
    let toppingsCheck = document.querySelectorAll('input[name="toppings"]');
    let toppings = [];
    for(let i=0; i < toppingsCheck.length; i++) {
        if(toppingsCheck[i].checked) {
            toppings.push(toppingsCheck[i].value);
        }
    }

    // Create a new Smoothie object with user selections
    let customSmoothie = new Smoothie(name, size, base, fruits, addins, toppings);

    // Get or create the output area
    let output = document.getElementById("output");
    if (!output) {
        output = document.createElement("p");
        output.id = "output";
        document.getElementsByClassName("container")[0].appendChild(output);
    }
    // Display the order summary
    output.innerHTML = customSmoothie.getResult();

    // Create the smoothie image element
    let smoothieImg = document.createElement("img");
    smoothieImg.alt = "Smoothie Image";
    // Set the image height based on selected size
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
    // Set the image source based on selected fruit
    switch (customSmoothie.fruits) {
        case "Banana":
            smoothieImg.src = "img/smoothie-banana.png";
            break;
        case "Strawberry":
            smoothieImg.src = "img/smoothie-strawberry.png";
            break;
        case "Blueberry":
            smoothieImg.src = "img/smoothie-blueberry.png";
            break;
        case "Orange":
            smoothieImg.src = "img/smoothie-orange.png";
            break;
        case "Kiwi":
            smoothieImg.src = "img/smoothie-kiwi.png";
            break;
        case "Apple":
            smoothieImg.src = "img/smoothie-apple.png";
            break;
        default:
            smoothieImg.src = "img/smoothie-banana.png";
    }

    // Append the smoothie image to the output section
    output.appendChild(smoothieImg);
})