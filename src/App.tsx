import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import Home from './components/Home';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {
	return (
		<>
			<div>
				<Link to={'/users'}>Users</Link>
				<Link to={'/todos'}>Todos</Link>
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/users' element={<UsersPage />} />
				<Route path='/users/:id' element={<UserItemPage />} />
				<Route path='/todos' element={<TodosPage />} />
				<Route path='/todos/:id' element={<TodoItemPage />} />
			</Routes>
		</>
	);
};

export default App;
