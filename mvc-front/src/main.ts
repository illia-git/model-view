import { CounterTwoView } from './modules/counterTwo/CounterTwoView';
import { UsersModel } from './modules/users/UsersModel';
import { UsersView } from './modules/users/UsersView';
import { UsersController } from './modules/users/UsersController';

const counterView1 = new CounterTwoView(document.getElementById('counter1')!);
const counterView2 = new CounterTwoView(document.getElementById('counter2')!);
const counterView3 = new CounterTwoView(document.getElementById('counter3')!);

const usersModel = new UsersModel();
const usersController = new UsersController(usersModel);
const usersView = new UsersView(document.getElementById('users')!, usersController);

counterView1.mount();
counterView2.mount();
counterView3.mount();

usersView.mount();