//Global Variables

let playerTurn = 0; //Player 1 is 0, Player 2 is 1
const numToString = ["one","two"]
const numColumns = 7;
const numRows = 6;
let winner;
const numericBoard = blankBoard();
let boardDOM;

function main() {
  loadBoard();
}

//

function loadBoard() {
  const game = document.createElement("div");
  game.setAttribute('class', 'game');
  document.body.appendChild(game);
  let board = document.createElement("div");
  board.setAttribute('id', 'board');
  game.appendChild(board);
  createBoardInterior(board, numColumns, numRows);
  boardDOM = document.querySelector('#board');
}


//

function createBoardInterior(board, numColumns, numRows) {
  for(i = 0; i < numColumns; i++) {
    const column = document.createElement("div");
    column.setAttribute('class', 'column');
    column.style.width = (100 / parseFloat(numColumns + 0.75)).toString() + "%";
    column.addEventListener('click', columnClick);
    board.appendChild(column);
    for (j = 0; j < numRows; j++) {
      const slot = document.createElement("div");
      slot.setAttribute('class', 'slot blank');
      slot.style.height = (100 / parseFloat(numRows + 0.51)).toString() + "%";
      column.appendChild(slot);
    }
  }
}
//
function blankBoard(){
	const board = [];
	for(i = 0; i<numColumns; i++){
    const column = [];
		for(j = 0; j<numRows; j++){
			column.push('');
		}
		board.push(column);
	}
	return board;
}

function columnClick(event) {
	const column = event.target.parentElement;
  console.log(column)
	const columnIndex = column.getElementsByClassName('slot one');
  console.log(columnIndex);
	const slotsInColumn = column.getElementsByClassName('slot');
	const slotIndex = getAvailableSlot(slotsInColumn);
	if(slotIndex != -1){
		const slot = slotsInColumn[slotIndex]
		slot.setAttribute('class', 'slot ' + numToString[playerTurn]);
		playerTurn = (playerTurn + 1) % 2;
		// numericBoard[columnIndex][slotsInColumn] = playerTurn + 1;
	}
	checkWinner();
}

function getAvailableSlot(slots){
	for(i = numRows-1; i >= 0; i--){
		if(slots[i].classList.contains("blank")){
			return i;
		}
	}
	return -1;
}

function verticalWin(verticalMatch) {
  let colorCount = 0;
  let currentPlayer;
  verticalMatch.forEach( spot =>{
    if("slot blank" !== spot.className) {
        if(currentPlayer === spot.className){
            colorCount += 1;
        } else {
            currentPlayer = spot.className;
            colorCount = 1;
        }
    }
    if(colorCount === 4){
      alert('You win!');
      winner =  currentPlayer;
      return;
    }
  })
}

function checkWinner(){
  let winningPlayer;
  boardDOM.childNodes.forEach( checkColumn => {
    winningPlayer = verticalWin(checkColumn.childNodes);
    if(winner){
      gameOver(winner.slice(-3));
      clearBoard();
    }
  })
}

function gameOver(playerNum){
  console.log('winner');
	const winnerMessage = "Player " + playerNum + " wins!"
	const winDiv = document.createElement("div");
	winDiv.innerHtml = winnerMessage;
	winDiv.setAttribute("class","message");
	document.body.appendChild(winDiv);
}

function clearBoard(){
	const slots = document.getElementsByClassName("slot");
	console.log({slots});
}

main();
