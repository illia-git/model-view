import { IController } from '../../types/controller';
import { CounterTwoModel } from './CounterTwoModel';

export class CounterTwoController implements IController {
	model : CounterTwoModel;

	constructor() {
		this.model = new CounterTwoModel();
	}

	handleIncrement() {
		console.log('increment', this.model);
		return this.model.increment();
	}

	handleDecrement() {
		console.log('decrement', this.model);
		return this.model.decrement();
	}

	handleMultiply() {
		console.log('multiply', this.model);
		return this.model.multiplyAndDivide();
	}
}