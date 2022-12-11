import { IView } from '../../types/view';
import { CounterTwoController } from './CounterTwoController';

export class CounterTwoView implements IView {
	controller : CounterTwoController;
	root : HTMLElement;

	private readonly title : HTMLElement;
	private readonly incrementButton : HTMLElement;
	private readonly decrementButton : HTMLElement;
	private readonly multiplyButton : HTMLElement;

	constructor(root : HTMLElement) {
		this.root = root;
		this.controller = new CounterTwoController();

		this.title = document.createElement('h1');
		this.title.innerText = 'Value = 0';

		this.incrementButton = document.createElement('button');
		this.incrementButton.innerText = 'increment';
		this.decrementButton = document.createElement('button');
		this.decrementButton.innerText = 'decrement';
		this.multiplyButton = document.createElement('button');
		this.multiplyButton.innerText = 'multiply';

		this.bindListeners();
	}

	public mount() {
		this.root.appendChild(this.title);
		this.root.appendChild(this.incrementButton);
		this.root.appendChild(this.decrementButton);
		this.root.appendChild(this.multiplyButton);
	}

	private onIncrementClick = () => {
		this.updateTitle(this.controller.handleIncrement());
	};

	private onDecrementClick = () => {
		this.updateTitle(this.controller.handleDecrement());
	};

	private onMultiplyClick = () => {
		this.updateTitle(this.controller.handleMultiply());
	};

	private bindListeners() {
		this.incrementButton.addEventListener('click', this.onIncrementClick);
		this.decrementButton.addEventListener('click', this.onDecrementClick);
		this.multiplyButton.addEventListener('click', this.onMultiplyClick);
	}

	private updateTitle(value : number) {
		this.title.innerText = `Value = ${ value }`;
	}
}