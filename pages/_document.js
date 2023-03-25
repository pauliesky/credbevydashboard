import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en-US">
			<Head />
			<body className="font-custom">
				<Main />
				<NextScript />
				<div id="overlay"></div>
			</body>
		</Html>
	);
}
