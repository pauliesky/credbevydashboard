import Image from 'next/image';

export default function User({ username, width, height }) {
	return (
		<div className="flex justify-start items-center gap-4">
			<div className="rounded-full">
				<Image
					src="/img/user.png"
					width={width}
					height={height}
					alt="user photo"
				/>
			</div>
			<p className="table--user__name">{username}</p>
		</div>
	);
}
