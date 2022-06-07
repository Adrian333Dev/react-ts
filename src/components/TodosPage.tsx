import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { ITodo } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';

const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	const fetchTodos = async () => {
		try {
			const response = await axios.get<ITodo[]>(
				'https://jsonplaceholder.typicode.com/todos?_limit=10'
			);
			setTodos(response.data);
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div>
			<List
				items={todos}
				renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
			/>
		</div>
	);
};

export default TodosPage;
