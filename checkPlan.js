function checkPlan() {
    var userWeight = document.getElementById("weightInput").value;  //calculate bmi, link to one of {four} plans (thin, normal, overweight, obese)
    var userHeightFeet = document.getElementById("heightInputFeet").value;
    var userHeightInches = document.getElementById("heightInputInches").value;
    var userHeightPre = userHeightFeet * 12;
    var userHeightFinal = +userHeightPre + +userHeightInches;
    var userHeightBMI = Math.pow(+userHeightFinal, 2);
    var BMIRight = +userWeight / +userHeightBMI;
    var BMI = 703 * +BMIRight; console.log(BMI);
    var ddl = document.getElementById("gender");
    var userGender = ddl.options[ddl.selectedIndex].value;
    if (BMI < 18.5) {
        window.open("underweight.html"); // underweight
        return false;
    }
    if (BMI >= 18.5 && BMI <= 24.9 && userGender == "male") {
        window.open("normal.html"); // normal
        return false;
    }
    if (BMI >= 25 && BMI <= 29.9) {
        window.open("overweight.html"); //overweight
        return false;
    }
    if (BMI >= 30) {
        window.open("obese.html"); //obese
        return false;
    }
}