const Button = ({ icon, label, bgcolor, borders, width }) => {
	return (
		<button
			type="button"
			className="flex justify-center items-center gap-1.5 py-1.5 px-2.5 font-bold text-xs"
			style={{
				backgroundColor: bgcolor,
				border: `${borders ? '0.5px solid #333333' : ''}`,
				color: `${borders ? '#333333' : '#ffffff'}`,
				borderRadius: '4px',
				width: `${width}`,
				height: '36px',
			}}
		>
			{icon} <span>{label}</span>
		</button>
	);
};

export default Button;

// font-weight: 700;
// font-size: 12px;
// line-height: 16px;
// letter-spacing: -0.5px;
