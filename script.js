//VALIDATION
function validation() {
  let inputValue = document.getElementById("input").value;
  if (isNaN(inputValue)) {
    alert("please enter number only");
    document.getElementById("input").value = "";
  } else if (inputValue == "") {
    document.getElementById("pOutput").innerHTML = "Result Here";
  } else if (inputValue < 0) {
    alert("Please enter positive number only");
    document.getElementById("input").value = "";
    document.getElementById("pOutput").innerHTML = "Result Here";
  }
}

//Count the lenght of input
function countOfDigits() {
  let inputValue = Number(document.getElementById("input").value);
  if (isNaN(inputValue)) {
    alert("Please enter number only");
    document.getElementById("input").value = "";
    document.getElementById("pOutput").innerHTML = "Result Here";
  } else if (inputValue < 0) {
    alert("Please enter positive number only");
    document.getElementById("input").value = "";
    document.getElementById("pOutput").innerHTML = "Result Here";
  } else {
    let temp,
      count = 0;
    temp = inputValue;

    while (temp != 0) {
      count++;
      temp = parseInt(temp / 10);
    }
    document.getElementById("pOutput").innerHTML = "Digit count: " + count;
  }
}

//Count all even numbers
function evenNumbers() {
  let inputValue = document.getElementById("input").value;
  let evenCount = 0;

  validation();

  while (inputValue > 0) {
    let rem = inputValue % 10;

    if (rem % 2 == 0) {
      evenCount++;
    }
    inputValue = parseInt(inputValue / 10);
  }
  document.getElementById("pOutput").innerHTML = "Even count is: " + evenCount;
}

//Count all odd numbers
function oddNumbers() {
  let inputValue = document.getElementById("input").value;
  let oddCount = 0;

  validation();

  while (inputValue > 0) {
    let rem = inputValue % 10;

    if (rem % 2 != 0) {
      oddCount++;
    }
    inputValue = parseInt(inputValue / 10);
  }
  document.getElementById("pOutput").innerHTML = "Odd count is: " + oddCount;
}

//Find the occurring digit
function occurringDigit() {
  let string = document.getElementById("input").value;
  let arrayDigit = [...string];
  let count = 0,
    digit = 1,
    item;
  let isFalse = false;

  validation();

  for (let i = 0; i < arrayDigit.length; i++) {
    for (let j = i; j < arrayDigit.length; j++) {
      if (arrayDigit[i] == arrayDigit[j]) {
        count++;
        if (digit < count) {
          digit = count;
          item = arrayDigit[i];
          isFalse = true;
        }
      }
    }
    count = 0;
  }

  if (isFalse == true) {
    document.getElementById("pOutput").innerHTML =
      "The occurring digit are " + item + " ( " + digit + " times ) ";
  } else {
    document.getElementById("pOutput").innerHTML = "No Occuring Digit";
  }
}

//Find a certain digit in a group of numbers
function findDigit() {
  let inputValue = document.getElementById("input").value;
  if (isNaN(inputValue)) {
    alert("Please enter number only");
    document.getElementById("input").value = "";
  } else if (inputValue == "") {
    alert("Enter number first");
  } else {
    let findDigit = Number(prompt("Enter number to find"));

    if (findDigit > 9) {
      alert("Please enter 1 digit only");
      document.getElementById("pOutput").innerHTML = "Result Here";
    } else if (isNaN(findDigit)) {
      alert("Please enter number only");
      document.getElementById("pOutput").innerHTML = "Result Here";
    } else if (findDigit == "") {
      document.getElementById("pOutput").innerHTML = "Result Here";
    } else if ((inputValue + "").indexOf(findDigit) > -1) {
      document.getElementById("pOutput").innerHTML =
        "The digit is in the group of numbers";
    } else {
      document.getElementById("pOutput").innerHTML =
        "The digit is not in the group of numbers";
    }
  }
}

//clear text field and the pOutput result
function clearField() {
  document.getElementById("input").value = "";
  document.getElementById("pOutput").innerHTML = "Result Here";
}
