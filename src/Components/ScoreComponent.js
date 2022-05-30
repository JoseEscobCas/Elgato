import React from 'react';

const ScoreBoard = ({ scores, onClick }) => {
	const { xScore, oScore } = scores;
	return (
		<div className="winerTable">
			<h2>Juegos Ganados</h2>
			<h5>Jugador X: {xScore} </h5>
			<h5>Jugador O: {oScore}</h5>
			<button className="btn-retart" onClick={onClick}>
				Reiniciar Jeugo
			</button>
		</div>
	);
};

export default ScoreBoard;
