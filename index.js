"use strict";
const todos = {
    list: [],
    view() {
        return this.list;
    },
    add(text) {
        const todo = {
            text,
            isComplete: false,
        };
        this.list = [...this.list, todo];
        return todo;
    },
};
