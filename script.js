function calculateAge() {
  const dobInput = document.getElementById('dob');
  const Years = document.getElementById('years');
  const Months = document.getElementById('months');
  const Days = document.getElementById('days');
  const result = document.getElementById('result');

  const dob = new Date(dobInput.value);
  const today = new Date();

  if (!dobInput.value) {
    result.innerHTML = "Please enter your date of birth!";
    return;
  }

  if (dob > today) {
    result.innerHTML = "Date of birth cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  Years.innerHTML = `<strong>${years}</strong>`;
  Months.innerHTML = `<strong>${months}</strong>`;
  Days.innerHTML = `<strong>${days}</strong>`;

  result.innerHTML =
    `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old!`;
}
