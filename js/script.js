let selectedColor = '';
const $availableColors = document.querySelectorAll('.color');
const $playerPick = document.getElementById('playerPick');
const $playBtn = document.getElementById('play');

const colorsAvailable = ['blue', 'red', 'pink', 'green', 'yellow', 'white'];
const winningColors = {};

// Handle Player color selection, assign the selectedColor to the player choose
const onPickColor = function(item) {
  selectedColor = item.target.dataset.value;
  $playerPick.innerText = selectedColor;
  $playBtn.style.display = 'block';
}

// On Select By Player
$availableColors.forEach(function (colorPicker) {
  colorPicker.addEventListener('click', onPickColor);
});

// OnClick Play Button
$playBtn.addEventListener('click', function(event){
  winningColors.first = Math.floor(Math.random() * colorsAvailable.length);
  winningColors.second = Math.floor(Math.random() * colorsAvailable.length);
  winningColors.third = Math.floor(Math.random() * colorsAvailable.length);
  console.log('winningColors-first', colorsAvailable[winningColors.first]);
  console.log('winningColors-second', colorsAvailable[winningColors.second]);
  console.log('winningColors-third', colorsAvailable[winningColors.third]);
})

