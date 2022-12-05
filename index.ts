interface Todo {
	text: string,
	isComplete: boolean,
}
interface Todos {
	list: Todo[],
	view(): Todo[],
	add(text: string): Todo,
	delete(index: number): Todo,
}

const todos: Todos = {
	list: [],
	view() {
		return this.list;
	},
	add(text) {
		const todo = {
			text,
			isComplete: false,
		}
		this.list = [...this.list, todo];
		return todo;
	},
	delete(index) {
		const todo = this.list[index];
		this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
		return todo;
	},
}
