import React, { FC } from 'react';
import { Checkbox } from '@mui/material';
import { ITodo } from '../types/types';

interface TodoItemProps {
	todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
	return (
		<div>
			<Checkbox checked={todo.completed} />
			{todo.id}. {todo.title}
		</div>
	);
};

export default TodoItem;
