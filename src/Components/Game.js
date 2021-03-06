import React, { useState } from 'react';
import { calculateWinner } from '../Patterns';
import Board from './board';

const Game = () => {
	//History is ausestate hook for use the state in game to move after or to move befor.
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNum, setStepNum] = useState(0);
	const [xisNext, setXIsNext] = useState(true);
	const winner = calculateWinner(history[stepNum]);
	const player = xisNext ? 'X' : 'O';

	//use slice and clone the Array to get befor and after each play
	const handleClick = (idx) => {
		const historyStep = history.slice(0, stepNum + 1);
		const currentHistory = historyStep[stepNum];
		const squares = [...currentHistory];

		//now we need to know if wine or its occupaid for no more click o to change the x for o.
		if (winner || squares[idx]) return;
		//then if the square is selecet??
		squares[idx] = player;
		setHistory([...historyStep, squares]);
		setStepNum([historyStep.length]);
		setXIsNext(!xisNext);
	};

	const jumpTo = (step) => {
		setStepNum(step);
		setXIsNext(step % 2 === 0);
	};

	//this button help the player to move in each move played
	const moves = () =>
		history.map((_step, move) => {
			const playGame = move ? `Ir al movieminto #${move}` : `Ir al inicio`;
			return (
				<ol key={move}>
					<button onClick={() => jumpTo(move)}>{playGame}</button>
				</ol>
			);
		});

	return (
		<>
			<h1>El Gato</h1>
			<Board squares={history[stepNum]} onClick={handleClick} />
			<div className="info-wrapper">
				<div>
					<h3>Jugadas realizadas:</h3>
					{moves()}
				</div>
				<h3>
					{winner ? 'Ganador: ' + winner : 'Siguiente Jugador: ' + player}
				</h3>
			</div>
		</>
	);
};

export default Game;
