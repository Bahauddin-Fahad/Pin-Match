// Generate Pin Section //
// Getting Random Number //
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
// Showing Number to Generation display Input //
function generatePin() {
  const pin = getPin();
  //   console.log(pin);
  const pinInput = document.getElementById("display-pin");
  pinInput.value = pin;
}

// Verification Section //
// Showing The Input Number //
document.getElementById("key-pad").addEventListener("click", function (event) {
  const numberInput = event.target.innerText;
  const inputField = document.getElementById("input-field");
  //   console.log(numberInput);
  if (isNaN(numberInput)) {
    if (numberInput == "C") {
      inputField.value = "";
    }
  } else {
    const previousInput = inputField.value;
    const newInput = previousInput + numberInput;
    inputField.value = newInput;
  }
});

// Pin Verification //
function verifyPin() {
  const generatedPinInputField = document.getElementById("display-pin");
  const generatedPin = generatedPinInputField.value;

  const typedPinInputField = document.getElementById("input-field");
  const typedPin = typedPinInputField.value;
  //   console.log(typedPin);
  const rightMessage = document.getElementById("right-pin");
  const wrongMessage = document.getElementById("wrong-pin");
  if (generatedPin == typedPin) {
    rightMessage.style.display = "block";
    wrongMessage.style.display = "none";
  } else {
    rightMessage.style.display = "none";
    wrongMessage.style.display = "block";
  }
  generatedPinInputField.value = "";
  typedPinInputField.value = "";
}
