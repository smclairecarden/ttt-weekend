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

	let T, gameStatus, nextTurn

	let player = {
		'1' : 'player  X',
		'-1': 'player O'
	}

/*------------------------ Cached Element References ------------------------*/

		const gameBoard = document.querySelector(".board")

		const message = document.querySelector("#message")

		const replayBtn = document.querySelector("#button")
		
		const squares = document.querySelectorAll(".game-square")

	// replayBtn.addEventListener("click", function(clear){
	// gameBoard.children.textContent = ''
	// })
	
		gameBoard.addEventListener("click", handleClick)

		replayBtn.addEventListener("click", init)
	

/*-------------------------------- Functions --------------------------------*/

		function init(){
			
			//gameBoard.setAttribute("reset", render)
			boardSquares = [null, null, null, null, null, null, null, null, null]
			message.textContent = `It's ${player ? 'Player X' : 'Player O'}'s turn!`
			render()
			winner = null;
			nextTurn = 1
			T = 'tie'
			gameBoard.children.textContent = ''
			//squares.textContent = ''
			
		}	
		init()
		

		function render() {
			switchTurn()
			renderTurn()
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
		}

		function renderTurn() {
				if(nextTurn === -1) {
				return message.textContent = "It's Player O's Turn"
				} else if(nextTurn === 1){
				return message.textContent = "It's Player X's Turn"
				}
		}

			function handleClick(evt) {
				const index = (evt.target.id.replace('sq', ''))
				if(boardSquares[index] === null) {
				boardSquares[index] = nextTurn
				console.log(boardSquares)
				render()
				} 
			}

			function getWinner() {
				winningCombos.forEach(combo => {
				if(Math.abs(boardSquares[combo[0]] + boardSquares[combo[1]] + boardSquares[combo[2]] === 3)) {
				return winner = nextTurn
				} else if(!boardSquares.includes(null)) {
				return winner = T
				}
				}) 
			}

			// function renderWinningMessage() {
			// 	if(isWinner === -1) {
			// 	return message.textContent =  `Congrats to the winner, player X!`
			// 	} else if(isWinner === 1) {
			// 	return message.textContent =  `Congrats to the winner, player O!`
			// 	} else if(isWinner === T) {
			// 	return message.textContent = `It's a tie!`
			// 	}
			// }


			function renderWinningMessage() {
				if(winner === 1 || winner === -1) {
				return message.textContent =  `Congrats to the winner, ${player ? player[1] : player[-1]}!`
				} else if(winner === T) {
				return message.textContent = `It's a tie!`
				}
			}

			