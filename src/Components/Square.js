import React from 'react';

const Sqaure = ({ val, onClick }) => {
	//with this know if the value is X or O or it's null;
	const style = val ? `squares ${val}` : `squares`;

	//painting o rendering the square
	return (
		<button className={style} onClick={onClick}>
			{val}
		</button>
	);
};

export default Sqaure;
