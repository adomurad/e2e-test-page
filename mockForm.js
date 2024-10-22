console.log("mockForm.js");

document.querySelector("#mockForm").addEventListener("submit", (evt) => {
  let formIsValid = true;

  const testCountInput = document.querySelector("#testCount");
  const testCountError = document.querySelector("#testCountError");
  if (testCountInput.value < 5) {
    formIsValid = false;
    testCountError.textContent = "At least 5 tests are required";
    testCountError.classList.remove("hidden");
  } else {
    formIsValid = true;
    testCountError.classList.add("hidden");
  }

  if (!formIsValid) {
    evt.preventDefault();
  }
});
