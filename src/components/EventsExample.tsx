import React, { FC, useRef, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('');
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value);
	};

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log(e.dataTransfer.getData('text'));
	};

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};

	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};

	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true);
	};

	return (
		<Box p={3}>
			<TextField value={value} onChange={changeHandler} label='controlled' />
			<TextField inputRef={inputRef} label='uncontrolled' />
			<Button onClick={clickHandler}>Add</Button>
			<Box
				onDrag={dragHandler}
				draggable
				width={200}
				height={200}
				mt={3}
				sx={{ backgroundColor: 'red' }}
			></Box>
			<Box
				width={200}
				height={200}
				mt={3}
				sx={{ backgroundColor: isDrag ? 'blue' : 'red' }}
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
			></Box>
		</Box>
	);
};

export default EventsExample;
