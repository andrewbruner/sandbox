"use strict";
const todos = {
    _list: [],
    view() {
        return this._list;
    },
    add(text) {
        const todo = {
            text,
            isComplete: false,
        };
        this._list = [...this._list, todo];
        return todo;
    },
    delete(index) {
        const todo = this._list[index];
        this._list = [...this._list.slice(0, index), ...this._list.slice(index + 1)];
        return todo;
    },
};
