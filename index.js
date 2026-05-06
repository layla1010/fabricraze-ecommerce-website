// Event listener for hashchange event
window.addEventListener("hashchange", function (event) {
    event.preventDefault(); // Prevent the default behavior of scrolling

    // Clear login form fields
    document.getElementById("logName").value = "";
    document.getElementById("logPassword").value = "";

    // Clear signup form fields
    document.getElementById("signName").value = "";
    document.getElementById("signLName").value = "";
    document.getElementById("signUName").value = "";
    document.getElementById("signEmail").value = "";
    document.getElementById("signNumber").value = "";
    document.getElementById("signPassword").value = "";
	
	
	// Reset error message
    document.getElementById("errorMsg").innerHTML = "";

    // Check if the hash value in the URL is "signup"
    if (location.hash.slice(1) == "signup") {
        document.querySelector(".page").classList.add("extend"); // Add class "extend" to the page element
        document.getElementById("login").classList.remove("active"); // Remove class "active" from login link
        document.getElementById("signup").classList.add("active"); // Add class "active" to signup link
    } else {
        document.querySelector(".page").classList.remove("extend"); // Remove class "extend" from the page element
        document.getElementById("login").classList.add("active"); // Add class "active" to login link
        document.getElementById("signup").classList.remove("active"); // Remove class "active" from signup link
    }

    window.scrollTo(0, 0); // Scroll to the top of the page
});

window.dispatchEvent(new Event("hashchange")); // Trigger the hashchange event on page load

// Function to validate the login form
function validateLoginForm() {
    var name = document.getElementById("logName").value;
    var password = document.getElementById("logPassword").value;

    if (name == "" || password == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill the required fields";
        return false;
    } else if (password.length < 8) {
        document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters";
        return false;
    } else {
        alert("Successfully logged in");
        return true;
    }
}


// Function to validate the signup form
function validateSignupForm() {
    var mail = document.getElementById("signEmail").value;
    var firstName = document.getElementById("signName").value;
    var lastName = document.getElementById("signLName").value;
    var username = document.getElementById("signUName").value;
    var phoneNumber = document.getElementById("signNumber").value;
    var password = document.getElementById("signPassword").value;

    if (mail == "" || firstName == "" || lastName == "" || username == "" || phoneNumber == "" || password == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill all the required fields";
        return false;
    } else if (password.length < 8) {
        document.getElementById("errorMsg").innerHTML = "Your password must include at least 8 characters";
        return false;
    } else {
        alert("Successfully signed up");
        return true;
    }
}


////////////////////////////////////////////////////////
const canvas = document.getElementById('clothesCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let color = '#000000';
    let brushSize = 5;
    let drawHistory = [];
    let historyIndex = -1;

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function stopDrawing() {
        if (isDrawing) {
            drawHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            historyIndex++;
        }
        isDrawing = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!isDrawing) return;

        const x = e.clientX - canvas.offsetLeft;
        const y = e.clientY - canvas.offsetTop;

        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    const colorSelect = document.getElementById('colorSelect');
    colorSelect.addEventListener('change', function() {
        color = this.value;
    });

    const brushSizeSelect = document.getElementById('brushSizeSelect');
    brushSizeSelect.addEventListener('change', function() {
        brushSize = parseInt(this.value);
    });

    const clearCanvasBtn = document.getElementById('clearCanvasBtn');
    clearCanvasBtn.addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawHistory = [];
        historyIndex = -1;
    });

    const undoBtn = document.getElementById('undoBtn');
    undoBtn.addEventListener('click', function() {
        if (historyIndex > 0) {
            historyIndex--;
            ctx.putImageData(drawHistory[historyIndex], 0, 0);
        }
    });

    const redoBtn = document.getElementById('redoBtn');
    redoBtn.addEventListener('click', function() {
        if (historyIndex < drawHistory.length - 1) {
            historyIndex++;
            ctx.putImageData(drawHistory[historyIndex], 0, 0);
        }
    });
    /////////////////////////////////////////////////////////////////
    document.getElementById('measurementsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const gender = document.getElementById('gender').value;
    const head = document.getElementById('head').value;

    // Process and validate the measurements here

    console.log('Measurements Submitted:', { gender, head });
    alert('Measurements submitted successfully!');
});


document.getElementById('measurementsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    // Form processing logic
    // ...
});


// Get the form and button elements
const form = document.getElementById('measurements-form');
const submitBtn = document.getElementById('submitBtn');

// Add event listener to the button click event
submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values from the form inputs
    const head = document.getElementById('Head').value;
    const shoulder = document.getElementById('Shoulder').value;
    const chest = document.getElementById('Chest').value;
    const waist = document.getElementById('Waist').value;
    const hip = document.getElementById('Hip').value;
    const knee = document.getElementById('Knee').value;
    const ankle = document.getElementById('Ankle').value;
    const weight = document.getElementById('Weight').value;
    const height = document.getElementById('Height').value;

    // You can do whatever you want with the collected data here
    console.log("Head: ", head);
    console.log("Shoulder: ", shoulder);
    console.log("Chest: ", chest);
    console.log("Waist: ", waist);
    console.log("Hip: ", hip);
    console.log("Knee: ", knee);
    console.log("Ankle: ", ankle);
    console.log("Weight: ", weight);
    console.log("Height: ", height);

    // Reset the form after submission
    form.reset();
});


