import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { IUser } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const UserItemPage = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const { id } = useParams<{ id?: string }>();
	const navigate = useNavigate();

	const fetchUser = async () => {
		try {
			const response = await axios.get<IUser>(
				'https://jsonplaceholder.typicode.com/users' + '/' + id
			);
			setUser(response.data);
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);
	return (
		<div>
			<Button onClick={() => navigate(-1)}>Back</Button>
			<div>{user?.name}</div>
			<div>
				{user?.address.street} {user?.address.city} {user?.address.zip}
			</div>
		</div>
	);
};

export default UserItemPage;
