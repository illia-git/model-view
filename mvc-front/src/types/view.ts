import { IController } from './controller';

export interface IView {
	mount : () => void;
	controller : IController;
}