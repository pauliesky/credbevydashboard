import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>CREDBEVY </title>
				<meta name="description" content="Digital Loan Aggregator" />
				<meta
					name="viewport"
					content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=no"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main>{children}</main>

			<footer></footer>
		</div>
	);
};

export default Layout;
