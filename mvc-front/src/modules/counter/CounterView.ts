import { CounterModel } from './CounterModel';
import { CounterController } from './CounterController';

export class CounterView {
	controller : CounterController;
	model : CounterModel;
	root : HTMLElement;

	private readonly title : HTMLElement;
	private readonly incrementButton : HTMLElement;
	private readonly decrementButton : HTMLElement;
	private readonly multipleButton : HTMLElement;

	constructor(root : HTMLElement) {
		this.root = root;
		this.model = new CounterModel(this);
		this.controller = new CounterController(this.model);

		this.title = document.createElement('h1');
		this.title.innerText = 'Value = 0';

		this.incrementButton = document.createElement('button');
		this.incrementButton.innerText = 'increment';
		this.decrementButton = document.createElement('button');
		this.decrementButton.innerText = 'decrement';
		this.multipleButton = document.createElement('button');
		this.multipleButton.innerText = 'multiply';

		this.bindListeners();
	}

	public updateTitle() {
		this.title.innerText = `Value = ${ this.model.value }`;
	}

	public render() {
		this.root.appendChild(this.title);
		this.root.appendChild(this.incrementButton);
		this.root.appendChild(this.decrementButton);
		this.root.appendChild(this.multipleButton);
	}

	private bindListeners() {
		this.incrementButton.addEventListener('click', this.controller.handleIncrement.bind(this));
		this.decrementButton.addEventListener('click', this.controller.handleDecrement.bind(this));
		this.multipleButton.addEventListener('click', this.controller.handleMultiply.bind(this));
	}
}