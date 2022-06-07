import React from 'react';

interface ListProps {
	items: any[];
	renderItem: (item: any) => React.ReactNode;
}

export default function List<T>(props: ListProps) {
	return <div>{props.items.map(props.renderItem)}</div>;
}
