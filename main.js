(function () {
  var yearInput,
    monthInput,
    dayInput,
    yearResult,
    monthResult,
    dayResult,
    dayTxt,
    monthTxt,
    yearTxt,
    form;

  function calculateAge(birthYear, birthMonth, birthDay) {
    var currentDate = new Date();
    var birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    var years = currentDate.getFullYear() - birthDate.getFullYear();
    var months = currentDate.getMonth() - birthDate.getMonth();
    var days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return {
      years: years,
      months: months,
      days: days,
    };
  }

  function isValidField(field) {
    return (
      field !== null &&
      field !== undefined &&
      field !== "" &&
      !isNaN(Number(field))
    );
  }

  function validateAndCalculateAge() {
    var dayValue = dayInput.value;
    var monthValue = monthInput.value;
    var yearValue = yearInput.value;

    if (
      isValidField(dayValue) &&
      isValidField(monthValue) &&
      isValidField(yearValue)
    ) {
      return calculateAge(yearValue, monthValue, dayValue);
    } else {
      return null;
    }
  }

  function updateTextContent(txtElement, value) {
    txtElement.textContent = value;
  }

  function applyValue({ years, months, days }) {
    updateTextContent(yearResult, years);
    updateTextContent(monthResult, months);
    updateTextContent(dayResult, days);

    yearTxt.textContent = years === 1 ? " year" : " years";
    monthTxt.textContent = months === 1 ? " month" : " months";
    dayTxt.textContent = days === 1 ? " day" : " days";
  }

  function handleSumit(evt) {
    evt.preventDefault();
    var age = validateAndCalculateAge();
    if (age !== null) {
      applyValue(age);
    }
  }

  function Main() {
    yearInput = document.querySelector(".js-year-val");
    monthInput = document.querySelector(".js-month-val");
    dayInput = document.querySelector(".js-day-val");
    yearResult = document.querySelector(".js-year-result");
    monthResult = document.querySelector(".js-month-result");
    dayResult = document.querySelector(".js-day-result");
    dayTxt = document.querySelector(".js-day-txt");
    monthTxt = document.querySelector(".js-month-txt");
    yearTxt = document.querySelector(".js-year-txt");
    form = document.querySelector("form");

    form.addEventListener("submit", handleSumit);
  }

  document.addEventListener("DOMContentLoaded", Main);
})();
