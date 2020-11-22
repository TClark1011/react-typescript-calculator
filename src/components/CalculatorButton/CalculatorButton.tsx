import React, { useContext } from 'react';
import CalculatorContext from '../../containers/CalculatorContext';

interface Props {
	symbol: string;
}

const CalculatorButton: React.FC<Props> = ({ symbol }) => {
	const { enterInput } = useContext(CalculatorContext);
	return (
		<button
			className='calculator-button'
			onClick={() => {
				enterInput(symbol);
			}}
		>
			{symbol}
		</button>
	);
};

export default CalculatorButton;
