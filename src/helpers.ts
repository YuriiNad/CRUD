export function idGenerator(): string {
	let id = new Date().toString().split(' ').slice(0, 5).join('')
	return id;
}