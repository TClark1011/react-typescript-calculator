import './Calculator.scss';

import React, { useState } from 'react';

import CalculatorContext from '../../containers/CalculatorContext';

import CalculatorButton from '../CalculatorButton';

const Calculator: React.FC = (props) => {
	const errorMsg: string = 'ERROR';
	const [calculatorInput, setCalculatorInput] = useState<string>('');

	const [stateQueue, setStateQueue] = useState<string[]>([]);

	const [clearNext, setClearNext] = useState<boolean>(false);

	/**
	 * Adds a provided state to the state queue as long as the current state is not displaying an error message
	 * @param {string} state - The state to save, if not provided, defaults to current contents of calculator display
	 */
	const addToQueue = (state: string = calculatorInput): void => {
		if (calculatorInput !== errorMsg) {
			setStateQueue([...stateQueue, state]);
		}
	};

	/**
	 * Returns the calculator display to the previous state in the state queue
	 */
	const revertToPreviousState = (): void => {
		setCalculatorInput(stateQueue.pop() || '');
	};

	/**
	 * Add a given string to the calculator display
	 * @param {string} newInput - The string to add to the calculator display
	 */
	const enterInput = (newInput: string): void => {
		if (clearNext) {
			addToQueue();
		}
		const prefix: string = clearNext ? '' : calculatorInput;
		setCalculatorInput(`${prefix}${newInput}`);
		setClearNext(false);
	};

	/**
	 * Solve the problem currently held in the calculator input
	 */
	const performCalculation = (): void => {
		addToQueue();

		try {
			// eslint-disable-next-line no-eval
			const solvedVal = eval(calculatorInput.replace(/×/g, '*'));
			setCalculatorInput(solvedVal);
		} catch (err) {
			setCalculatorInput(errorMsg);
		}

		setClearNext(true);
	};

	/**
	 * Clear the current calculator input
	 * @param {Boolean=true} saveState - Whether or not to save the current state to the state queue.
	 */
	const clearInput = (saveState: boolean = true): void => {
		if (saveState) {
			addToQueue();
		}
		setCalculatorInput('');
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
					<div id='digits-container' className='buttons-container'>
						<div className='row'>
							<CalculatorButton symbol='7' />
							<CalculatorButton symbol='8' />
							<CalculatorButton symbol='9' />
						</div>
						<div className='row'>
							<CalculatorButton symbol='4' />
							<CalculatorButton symbol='5' />
							<CalculatorButton symbol='6' />
						</div>
						<div className='row'>
							<CalculatorButton symbol='1' />
							<CalculatorButton symbol='2' />
							<CalculatorButton symbol='3' />
						</div>
						<div className='row'>
							<CalculatorButton symbol='0' spans={2} />
							<CalculatorButton symbol='.' />
						</div>
					</div>
					<div id='operations-container' className='buttons-container'>
						<div className='row'>
							<CalculatorButton symbol='+' />
							<CalculatorButton symbol='-' />
						</div>
						<div className='row'>
							<CalculatorButton symbol='×' />
							<CalculatorButton symbol='/' />
						</div>
						<div className='row'>
							<CalculatorButton
								symbol='U'
								performs='action'
								action={revertToPreviousState}
							/>
							<CalculatorButton
								symbol='C'
								performs='action'
								action={clearInput}
							/>
						</div>
						<div className='row'>
							<CalculatorButton
								symbol='='
								performs='action'
								action={performCalculation}
								spans={2}
							/>
						</div>
					</div>
				</div>
			</div>
		</CalculatorContext.Provider>
	);
	//TODO: Make decimal point bigger
};

export default Calculator;
