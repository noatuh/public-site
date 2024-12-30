const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';
const turnDisplay = document.createElement('div');
turnDisplay.style.textAlign = 'center';
turnDisplay.style.marginTop = '10px';
turnDisplay.innerHTML = `Turn: ${currentPlayer}`;
document.body.appendChild(turnDisplay);

function checkForWin() {
  const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < combinations.length; i++) {
    const [a, b, c] = combinations[i];
    if (
      squares[a].innerHTML === currentPlayer &&
      squares[b].innerHTML === currentPlayer &&
      squares[c].innerHTML === currentPlayer
    ) {
      alert(`Player ${currentPlayer} has won!`);
      return;
    }
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(event) {
    if (this.innerHTML === '') {
      this.innerHTML = currentPlayer;
      checkForWin();
      if (currentPlayer === 'X') {
        currentPlayer = 'O';
      } else {
        currentPlayer = 'X';
      }
      turnDisplay.innerHTML = `Turn: ${currentPlayer}`;
    }
  });
}
