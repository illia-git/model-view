import { delay } from '../../helpers/index';

export interface IUser {
	id : string;
	username : string;
	age : number;
	createdAt : string;
}

export type TSortOrder = 'asc' | 'desc';
export type TSortField = 'username' | 'age';

export class UsersModel {
	users : IUser[];
	searchValue : string;
	sortOrder : TSortOrder;
	sortField : TSortField;

	constructor() {
		this.users = [];
		this.searchValue = '';
		this.sortOrder = 'asc';
		this.sortField = 'username';
	}

	// @ts-ignore
	async getUsers() : Promise<IUser[]> {
		try {
			return this.users;
		} catch (err) {
			this.users = [];
			return [];
		}
	}

	createUser(username : string, age : number) : IUser {
		// @ts-ignore
		if (this.users.find(user => user.username === username)) {
			throw new Error(`Username ${ username } already exists`);
		}

		const newUser : IUser = {
			id : String(Math.random()),
			username,
			age,
			createdAt : new Date().toString()
		};

		this.users.push(newUser);
		return newUser;
	}

	sortUsers(field : TSortField, order : TSortOrder) {
		const sortedUsers = [
			...this.users.sort((a, b) => {
				if (order === 'asc') {
					return a[field] > b[field] ? 1 : -1;
				}
				return a[field] < b[field] ? 1 : -1;
			})
		];

		this.users = sortedUsers;
		return sortedUsers;
	}
}