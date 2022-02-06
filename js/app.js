/*-------------------------------- Constants --------------------------------*/

		const winningCombos = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]

	let boardSquares = []

	let T, nextTurn

	let playerX = 1
	let playerO = -1
/*------------------------ Cached Element References ------------------------*/

	const gameBoard = document.querySelector(".board")

	const message = document.querySelector("#message")
	
	const replayBtn = document.querySelector("#button")
		

	gameBoard.addEventListener("click", handleClick)

	replayBtn.addEventListener("click", init)
	

/*-------------------------------- Functions --------------------------------*/

		function init(){
			boardSquares = [null, null, null, null, null, null, null, null, null]
			winner = null;
			nextTurn = -1
			T = 'tie'
			render()
		}	
		init()
		
		function render() {	
			switchTurn()
			getWinner()
			renderWinningMessage()
			boardSquares.forEach(function(squ, idx) {
				if (squ === 1) {
					gameBoard.children[idx].textContent = 'X'									
				} else if(squ === -1) {
					gameBoard.children[idx].textContent = 'O'					
				} else if(squ === null) {
					gameBoard.children[idx].textContent = ''		
				}	
			})		
			
		}

		function switchTurn() {
			nextTurn *= -1
			renderTurn()
		}

		function renderTurn() {
				if(nextTurn === -1) {
				return message.textContent = "It's Player O's Turn!"
				} else if(nextTurn === 1){
				return message.textContent = "It's Player X's Turn!"
				}
				
		}

		function handleClick(evt) {
				const index = (evt.target.id.replace('sq', ''))
				if(boardSquares[index] === null) {
				boardSquares[index] = nextTurn
				render()
				} 
		}

		function getWinner() {
			
			winningCombos.forEach(combo => {
			let winCombo  = Math.abs(boardSquares[combo[0]] + boardSquares[combo[1]] +boardSquares[combo[2]])
			if (winCombo === 3) {
			return winner = nextTurn
			} else if(!boardSquares.includes(null)) {
			return winner = T
			}
			})
		}

		function renderWinningMessage() {
			if(winner === -1) {
			return message.textContent =  `Congrats to the winner, Player X!`
			} else if(winner === 1) {
			return message.textContent =  `Congrats to the winner, Player O!`
			} else if(winner === T){
			return message.textContent = `It's a tie!`
			}
		}

			