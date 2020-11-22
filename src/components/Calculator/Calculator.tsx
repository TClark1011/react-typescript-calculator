import './Calculator.scss';

import React, { useState } from 'react';

import CalculatorContext from '../../containers/CalculatorContext';

import CalculatorButton from '../CalculatorButton';

const Calculator: React.FC = (props) => {
	const [calculatorInput, setCalculatorInput] = useState<string>('');

	const enterInput = (newInput: string): void => {
		setCalculatorInput(`${calculatorInput}${newInput}`);
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
					<CalculatorButton symbol={`${0}`} />
					<CalculatorButton symbol={`${1}`} />
					<CalculatorButton symbol={`${2}`} />
					<CalculatorButton symbol={`${3}`} />
					<CalculatorButton symbol={`${4}`} />
					<CalculatorButton symbol={`${5}`} />
					<CalculatorButton symbol={`${6}`} />
					<CalculatorButton symbol={`${7}`} />
					<CalculatorButton symbol={`${8}`} />
					<CalculatorButton symbol={`${9}`} />
				</div>
			</div>
		</CalculatorContext.Provider>
	);
};

export default Calculator;
