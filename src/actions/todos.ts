import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

//what model struction that action should have
//we return actions with appropriate properties and type
//note that in a normal js action file we don't have these interfaces
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
export interface FetchTodosAction {
    type: ActionTypes.fetchtodos;
    payload: Todo[];
}
export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);
        //using type annotation ensures you pass in the correct types and properties
        //this is optional
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchtodos,
            payload: response.data
        });
    };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    };
};
