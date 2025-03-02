let userChoice = document.getElementById('changeclr');
const colorDiv = document.getElementById('red');
const isValidColor = (color) => {
  let s = new Option().style;
  console.log(s);
  s.color = color;
  return s.color !== '';
};

const handleChange = () => {
  let mainChoice = userChoice.value.trim();
  mainChoice = mainChoice.toLowerCase();
  if (!isValidColor(mainChoice)) {
    alert('Invalid Color , Please Re-enter a colour');
  } else {
    colorDiv.style.backgroundColor = mainChoice;
    console.log(mainChoice);
  }
  userChoice.value = '';
};
