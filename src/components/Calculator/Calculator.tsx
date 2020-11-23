import './Calculator.scss';

import React, { useState } from 'react';

import CalculatorContext from '../../containers/CalculatorContext';

import CalculatorButton from '../CalculatorButton';

const Calculator: React.FC = (props) => {
	const [calculatorInput, setCalculatorInput] = useState<string>('');

	const [stateQueue, setStateQueue] = useState<string[]>([]);

	const revertToPreviousState = (): void => {
		console.log('undoing!');
		console.log('stateQueue before pop', stateQueue);
		setCalculatorInput(stateQueue.pop() || '');
		console.log('stateQueue after pop', stateQueue);
	};

	const enterInput = (newInput: string): void => {
		setCalculatorInput(`${calculatorInput}${newInput}`);
	};

	const performCalculation = (): void => {
		setStateQueue([...stateQueue, calculatorInput]);
		console.log('stateQueue', stateQueue);

		// eslint-disable-next-line no-eval
		setCalculatorInput(eval(calculatorInput));
	};

	return (
		<CalculatorContext.Provider value={{ enterInput }}>
			<div id='calculator'>
				<input
					id='calculator-display'
					type='text'
					readOnly
					value={calculatorInput}
				></input>
				<div id='calculator-buttons-container'>
					<div id='digits-container'>
						<CalculatorButton symbol='0' />
						<CalculatorButton symbol='1' />
						<CalculatorButton symbol='2' />
						<CalculatorButton symbol='3' />
						<CalculatorButton symbol='4' />
						<CalculatorButton symbol='5' />
						<CalculatorButton symbol='6' />
						<CalculatorButton symbol='7' />
						<CalculatorButton symbol='8' />
						<CalculatorButton symbol='9' />
						<CalculatorButton symbol='.' />
					</div>
					<div id='operations-container'>
						<CalculatorButton symbol='+' />
						<CalculatorButton symbol='-' />
						<CalculatorButton symbol='*' />
						<CalculatorButton symbol='/' />
						<CalculatorButton
							symbol='='
							performs='action'
							action={performCalculation}
						/>
						<CalculatorButton
							symbol='U'
							performs='action'
							action={revertToPreviousState}
						/>
						<CalculatorButton
							symbol='C'
							performs='action'
							action={() => setCalculatorInput('')}
						/>
					</div>
				</div>
			</div>
		</CalculatorContext.Provider>
	);
	//TODO: Replace '*' with an 'x' multiplication symbol
	//TODO: back space button
};

export default Calculator;
