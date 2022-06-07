import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

const UsersPage: FC = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const navigate = useNavigate();

	const fetchUsers = async () => {
		try {
			const response = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setUsers(response.data);
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);
	return (
		<div>
			<List
				items={users}
				renderItem={(user: IUser) => (
					<UserItem
						onClick={(user) => navigate('/users/' + user.id)}
						user={user}
						key={user.id}
					/>
				)}
			/>
		</div>
	);
};

export default UsersPage;
