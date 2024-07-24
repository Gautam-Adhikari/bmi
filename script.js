const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      // const h = document.createElement('h4');
      result.innerHTML += '<br> Under weight';
      // result.append(h);
    } else if (bmi < 24.6) {
      // const h = document.createElement('h4');
      result.innerHTML += '<br> Normal Range ';
      // result.append(h);
    } else {
      // const h = document.createElement('h4');
      result.innerHTML += '<br> Overweight';
      // result.append(h);
    }
  }
});
