interface Todo {
	text: string,
	isComplete: boolean,
}
interface Todos {
	list: Todo[],
	view(): Todo[],
	add(text: string): Todo,
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
}