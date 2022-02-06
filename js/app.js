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
	
	


	

	console.log(player)


/*------------------------ Cached Element References ------------------------*/



		const gameBoard = document.querySelector(".board")

		const message = document.querySelector("#message")

		const replayBtn = document.querySelector("#button")
		



	// replayBtn.addEventListener("click", function(clear){
	// gameBoard.children.textContent = ''
	// })
	
gameBoard.addEventListener("click", handleClick)

gameBoard.addEventListener("reset", init)
	

/*-------------------------------- Functions --------------------------------*/



		function init(){
			replayBtn.setAttribute("reset", "replay")
			boardSquares = [null, null, null, null, null, null, null, null, null]
			message.textContent = `It's ${player ? 'player X' : 'player O'}'s turn!`
			nextTurn = 1
			isWinner = null;
			T = 'tie'
			
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
				return isWinner = nextTurn
				} else if(!boardSquares.includes(null)) {
					return isWinner = T
				}
				}) 
			}

			function renderWinningMessage() {
				if(isWinner === -1) {
				return message.textContent =  `Congrats to the winner, player X!`
				} else if(isWinner === 1) {
				return message.textContent =  `Congrats to the winner, player O!`
				} else if(isWinner === T) {
				return message.textContent = `It's a tie!`
				}
			}

		let renderTieMessage = function(){
			if(isWinner === T) {
			
			}
		}

	



			
