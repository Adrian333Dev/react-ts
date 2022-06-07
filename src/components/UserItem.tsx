import React, { FC } from 'react';
import { Box } from '@mui/material';
import { IUser } from '../types/types';

interface UserItemProps {
	user: IUser;
	onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
	return (
		<Box
			display='flex'
			px={2}
			border={'1px solid gray'}
			sx={{ gap: 3 }}
			onClick={() => onClick(user)}
		>
			<h5>Id: {user.id}</h5>
			<h5>Name: {user.name}</h5>
			<h5>Email: {user.email}</h5>
			<h5>
				Address: {user.address.city} {user.address.street}
			</h5>
		</Box>
	);
};

export default UserItem;
