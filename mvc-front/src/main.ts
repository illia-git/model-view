import { CounterTwoView } from './modules/counterTwo/CounterTwoView';

const counterView1 = new CounterTwoView(document.getElementById('counter1')!);
const counterView2 = new CounterTwoView(document.getElementById('counter2')!);
const counterView3 = new CounterTwoView(document.getElementById('counter3')!);

counterView1.mount();
counterView2.mount();
counterView3.mount();