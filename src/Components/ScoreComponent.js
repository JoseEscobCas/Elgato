import React from 'react';

const ScoreBoard = ({ scores }) => {
	const { xScore, oScore } = scores;
	return (
		<div className="winerTable">
			<h2>Juegos Ganados</h2>
			<h5>Jugador X: {xScore} </h5>
			<h5>Jugador O: {oScore}</h5>
		</div>
	);
};

export default ScoreBoard;
