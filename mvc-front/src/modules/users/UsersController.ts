import { TSortField, TSortOrder, UsersModel } from './UsersModel';

export class UsersController {
	model : UsersModel;

	constructor(model : UsersModel) {
		this.model = model;
	}

	public handleCreate(username : string, age : number) {
		console.log('handleCreate');
		if (!username || !age) {
			throw new Error('username and age are required');
		}
		return this.model.createUser(username, age);
	}

	public handleSort(field : TSortField, order : TSortOrder) {
		console.log('handleSort');
		if (!field) {
			throw new Error('field required');
		}
		return this.model.sortUsers(field, order);
	}
}