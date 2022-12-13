export function delay(ms : number = 1000) {
	// @ts-ignore
	return new Promise<void>(resolve => {
		setTimeout(resolve, ms);
	});
}