import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import Table from '../components/Table';
// import Card from '../components/UI/Card';
import SettingsInfoTabs from '../components/Settings/SettingsTabs';

const Settings = () => {
	return (
		<div className="flex justify-start items-start">
			<div className="sidebar hidden xl:flex">
				<Sidebar />
			</div>
			<div className="main-page">
				<div className="flex flex-col items-start justify-start">
					<Navbar />

					<main className="px-5 py-5 w-full">
						{/* <main className="px-4 md:px-5 py-10 md:py-12 w-full"> */}
						<h3 className="heading-title mb-4 ml-4">Settings</h3>

						<div className="settings__info hidden sm:block">
							<SettingsInfoTabs />
						</div>
					</main>
				
				</div>
			</div>
		</div>
	);
};

export default Settings;
