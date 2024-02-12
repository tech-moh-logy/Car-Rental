var header = document.getElementById('header');
var gx550 = document.getElementById('gx550');
var subarban = document.getElementById('subarban');
var escalade = document.getElementById('escalade');
var gls = document.getElementById('gls');
var x7 = document.getElementById('x7');
var model = document.getElementById('model');

var acceleration = document.getElementById('acceleration');
var optimalLevel = document.getElementById('optimalLevel');
var power = document.getElementById('power');
var topSpeed = document.getElementById('topSpeed');
var actualRange = document.getElementById('actualRange');
var maxRange = document.getElementById('maxRange');
var theRentalPrice = document.getElementById('theRentalPrice');
var perDay = document.getElementById('perDay');

gx550.onclick = function() {
  header.style.backgroundImage = "url(IMG_gx550.jpeg)";
  model.innerHTML = "Lexus GX 550";
  acceleration.innerHTML = "7.8 sec";
  optimalLevel.innerHTML = "60 mph";
  power.innerHTML = "110 mph";
  topSpeed.innerHTML = "Top Speed";
  actualRange.innerHTML = "600 mi";
  maxRange.innerHTML = "Max Range";
  theRentalPrice.innerHTML = "$75";
  perDay.innerHTML = "Per Day";
}

subarban.onclick = function() {
  header.style.backgroundImage = "url(IMG_subarban.jpeg)";
  model.innerHTML = "Chevy Suburban";
  acceleration.innerHTML = "7.1 sec";
  optimalLevel.innerHTML = "60 mph";
  power.innerHTML = "113 mph";
  topSpeed.innerHTML = "Top Speed";
  actualRange.innerHTML = "600 mi";
  maxRange.innerHTML = "Max Range";
  theRentalPrice.innerHTML = "$80";
  perDay.innerHTML = "Per Day";
}

escalade.onclick = function() {
  header.style.backgroundImage = "url(IMG_escalade.jpeg)";
  model.innerHTML = "Cadillac Escalade";
  acceleration.innerHTML = "6.0 sec";
  optimalLevel.innerHTML = "60 mph";
  power.innerHTML = "140 mph";
  topSpeed.innerHTML = "Top Speed";
  actualRange.innerHTML = "550 mi";
  maxRange.innerHTML = "Max Range";
  theRentalPrice.innerHTML = "$90";
  perDay.innerHTML = "Per Day";
}

gls.onclick = function() {
  header.style.backgroundImage = "url(IMG_gls.jpeg)";
  model.innerHTML = "Mercedes-Benz GLS";
  acceleration.innerHTML = "5.9 sec";
  optimalLevel.innerHTML = "60 mph";
  power.innerHTML = "155 mph";
  topSpeed.innerHTML = "Top Speed";
  actualRange.innerHTML = "600 mi";
  maxRange.innerHTML = "Max Range";
  theRentalPrice.innerHTML = "$95";
  perDay.innerHTML = "Per Day";
}

x7.onclick = function() {
  header.style.backgroundImage = "url(IMG_bmw-x7.JPG)";
  model.innerHTML = "BMW 7";
  acceleration.innerHTML = "5.9 sec";
  optimalLevel.innerHTML = "60 mph";
  power.innerHTML = "155 mph";
  topSpeed.innerHTML = "155 mph";
  actualRange.innerHTML = "600 mi";
  maxRange.innerHTML = "Max Range";
  theRentalPrice.innerHTML = "$95";
  perDay.innerHTML = "Per Day";
}

// document.getElementById("reserveBtn").onclick = function() {
//   alert("Your reservation has been successfully made!");
// };



document.getElementById("reserveBtn").onclick = function() {
    var name = prompt("May I have your name, please?");

    // Regular expression for validating the name
    var nameRegex = /^[a-zA-Z]{3,}$/;

    // Check if the name matches the regular expression
    if (!nameRegex.test(name)) {
        alert("Please enter a valid name without numbers and with at least three letters.");
        return; // Exit the function if the name is invalid
    }

    var email = prompt("Could you provide your email address?");

    // Validate the email format
    var validEmails = ["@gmail.com", "@yahoo.com", "@hotmail.com"];
    var validEmail = validEmails.some(function(valid) {
        return email.includes(valid);
    });

    if (!validEmail) {
        alert("Please enter a valid email address.");
        return; // Exit the function if the email is invalid
    }

    // Retrieve the name of the selected car
    var modelName = document.getElementById("model").innerText;

    // Display a personalized reservation confirmation
    alert("Congratulations, " + name + "! Your reservation for the " + modelName + " has been successfully made! An email confirmation will be sent to " + email + " shortly for further details.");
};






// JavaScript code for handling car information display

// Function to show car information
function showCarInformation(carId) {
  // Hide all car information sections
  var carInfoSections = document.querySelectorAll('.info');
  carInfoSections.forEach(function(section) {
    section.classList.remove('show');
  });

  // Show the information section for the clicked car
  var carInfoSection = document.getElementById(carId + 'Info');
  carInfoSection.classList.add('show');
}

// Add event listeners to car links
document.getElementById('gx550').addEventListener('click', function() {
  showCarInformation('gx550');
});

document.getElementById('suburban').addEventListener('click', function() {
  showCarInformation('suburban');
});

document.getElementById('escalade').addEventListener('click', function() {
  showCarInformation('escalade');
});

document.getElementById('gls').addEventListener('click', function() {
  showCarInformation('gls');
});

document.getElementById('x7').addEventListener('click', function() {
  showCarInformation('x7');
});

document.getElementById('x5').addEventListener('click', function() {
  showCarInformation('x5');
});
