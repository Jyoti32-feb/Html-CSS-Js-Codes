const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const height = Number(document.querySelector("#height").value);

    const weight = Number(document.querySelector("#weight").value);

    const result = document.querySelector("#result");

    if (height === "" || height <= 0 || isNaN(height)) {

        result.innerText = "Please enter a valid height";

    }

    else if (weight === "" || weight <= 0 || isNaN(weight)) {

        result.innerText = "Please enter a valid weight";

    }

    else {

        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        if (bmi < 18.6) {

            result.innerText = `Your BMI is ${bmi} (Under Weight)`;

        }

        else if (bmi <= 24.9) {

            result.innerText = `Your BMI is ${bmi} (Normal Weight)`;

        }

        else {

            result.innerText = `Your BMI is ${bmi} (Over Weight)`;

        }

    }

});