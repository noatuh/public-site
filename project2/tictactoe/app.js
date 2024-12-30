const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';
const turnDisplay = document.createElement('div');
turnDisplay.style.textAlign = 'center';
turnDisplay.style.marginTop = '10px';
turnDisplay.innerHTML = `Turn: ${currentPlayer}`;
document.body.appendChild(turnDisplay);

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(event) {
    if (this.innerHTML === '') {
      this.innerHTML = currentPlayer;
      if (currentPlayer === 'X') {
        currentPlayer = 'O';
      } else {
        currentPlayer = 'X';
      }
      turnDisplay.innerHTML = `Turn: ${currentPlayer}`;
    }
  });
}
