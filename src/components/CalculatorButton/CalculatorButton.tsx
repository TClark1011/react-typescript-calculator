import './CalculatorButton.scss';

import React, { useContext } from 'react';

import CalculatorContext from '../../containers/CalculatorContext';

import ButtonPerformance from '../../types/ButtonPerformance';

type ButtonSpan = 1 | 2 | 3;

interface Props {
	symbol?: string;
	performs?: ButtonPerformance;
	action?: () => void;
	spans?: ButtonSpan;
}

const CalculatorButton: React.FC<Props> = ({
	symbol = ' ',
	performs = 'input',
	action = () => {},
	spans = 1,
	...props
}) => {
	const { enterInput } = useContext(CalculatorContext);

	const clickHandler = performs === 'input' ? () => enterInput(symbol) : action;
	return (
		<div className={`button-wrapper spans-${spans}`}>
			{performs !== 'spacer' && (
				<button className={`calculator-button`} onClick={clickHandler}>
					{props.children || symbol}
				</button>
			)}
		</div>
	);
};

export default CalculatorButton;
