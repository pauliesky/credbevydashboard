import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/mediaqueries.css';
import '../styles/mui.css';
import '../styles/nextui.css';
import '../styles/dashboard.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
