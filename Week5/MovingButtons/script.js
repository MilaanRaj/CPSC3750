var startbtn = document.getElementById("makeBtn");
startbtn.addEventListener("click", generateBtn);
var numBtn = 0;
var totalSum = 0; // Variable to keep track of total sum
var selectedColor = "red"; // Default selected color

function generateBtn() {
    var color = selectedColor; // Get the selected color
    var btn = document.createElement("button");

    btn.innerHTML = Math.floor(Math.random() * 99) + 1; // Random number between 1 and 99
    btn.style.position = "absolute";
    var x_pos = Math.floor(Math.random() * 899) + 100;
    var y_pos = Math.floor(Math.random() * 899) + 250;
    btn.style.left = x_pos + 'px';
    btn.style.top = y_pos + 'px';
    btn.style.backgroundColor = color; // Set background color
    btn.style.color = "white";
    btn.className = "btn btn-secondary";
    btn.id = numBtn++;

    document.body.appendChild(btn);
    btn.onclick = function () {
        var randomNum = Math.floor(Math.random() * 99) + 1; // Random number between 1 and 99
        totalSum += randomNum; // Update total sum
        document.getElementById("totalSumLabel").textContent = "Total Sum: " + totalSum; // Update total sum label
        this.innerHTML = randomNum;
        this.style.backgroundColor = selectedColor; // Change button color to selected color
    }
}

// Update selected color when color is changed in the color list
document.getElementById("colors").addEventListener("change", function() {
    selectedColor = this.value;
});
