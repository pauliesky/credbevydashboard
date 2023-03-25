import Link from 'next/link';

import { Container } from '@mui/material';
import EyeSlashIcon from '../components/icons/EyeSlashIcon';
import Logo from '../components/Logo';

export default function Home() {
	return (
		<header className="h-screen w-full bg-white py-12">
			<nav>
				<Container maxWidth="lg">
					<Logo />
				</Container>
			</nav>

			<Container maxWidth="lg" className="w-full h-full">
				<div className="flex justify-center items-center w-full h-full bg-white">
					<div className="login p-3 lg:px-8 ">
						<div className="flex flex-col gap-5 justify-start items-center">
							<p className="text-lg font-semibold login-text">Login</p>
							<div className="flex justify-start items-center w-full h-12 mb-2 px-3 rounded-sm border border-zinc-400 bg-transparent relative">
								<input
									id="email"
									type="text"
									placeholder=" "
									className="outline-0 pt-1 w-full bg-transparent input-email"
								/>
								<label
									htmlFor="email"
									className="absolute pl-3 left-0 self-center"
								>
									Email/Phone Number
								</label>
							</div>
							<div className="flex justify-start items-center gap-2 w-full h-12 px-3 mb-5 rounded-sm border border-zinc-400 relative">
								<input
									id="password"
									type="password"
									placeholder=" "
									className="outline-0 focus:outline-0 w-full bg-transparent input-password"
								/>
								<label
									htmlFor="password"
									className="absolute pl-3 left-0 self-center"
								>
									Password
								</label>
								<div className="ml-auto cursor-pointer">
									<EyeSlashIcon />
								</div>
							</div>

							<Link href="/dashboard">
								<button
									type="button"
									className="login-btn outline-none ease-in duration-300 hover:scale-105"
								>
									Login
								</button>
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</header>
	);
}
