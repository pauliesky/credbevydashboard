import React from 'react';

export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
	const defaultRef = React.useRef();
	const resolvedRef = ref || defaultRef;

	React.useEffect(() => {
		resolvedRef.current.indeterminate = indeterminate;
	}, [resolvedRef, indeterminate]);

	return (
		<>
			<input
				type="checkbox"
				ref={resolvedRef}
				{...rest}
				style={{
					width: '16px',
					height: '16px',
					accentColor: '#8003cd',
					cursor: 'pointer',
				}}
			/>
		</>
	);
});
