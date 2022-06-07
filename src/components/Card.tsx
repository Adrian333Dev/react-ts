import React, { FC } from 'react';
import { Card as MuiCart } from '@mui/material';

export enum CardVarinat {
	outlined = 'outlined',
	primary = 'primary',
}

interface CardProps {
	width?: string;
	height?: string;
	variant?: CardVarinat;
	children?: React.ReactNode;
	onClick?: () => void;
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
	return (
		<MuiCart
			style={{ width, height }}
			variant={variant === CardVarinat.outlined ? 'outlined' : 'elevation'}
			onClick={onClick}
		>
			{children}
		</MuiCart>
	);
};

export default Card;
