import React, { useContext } from 'react';
import CalculatorContext from '../../containers/CalculatorContext';

import ButtonPerformance from '../../types/ButtonPerformance';

interface Props {
	symbol: string;
	performs?: ButtonPerformance;
	action?: () => void;
}

const CalculatorButton: React.FC<Props> = ({
	symbol,
	performs = 'input',
	action = () => {},
}) => {
	const { enterInput } = useContext(CalculatorContext);

	const clickHandler = performs === 'input' ? () => enterInput(symbol) : action;
	return (
		<button className='calculator-button' onClick={clickHandler}>
			{symbol}
		</button>
	);
};

export default CalculatorButton;
