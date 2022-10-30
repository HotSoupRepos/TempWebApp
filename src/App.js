import "./global.css";
import Logo from "./assets/HotSoupLogo .png";
import PhonePreview from "./assets/PhonePreview.png";
import PhoneSearch from "./assets/PhoneSearch.png";
import Arrow from "./assets/Arrow.png";

import React from "react";

const App = () => {
	return (
		<div className="body">
			<nav className="navbar">
				<img src={Logo} alt="hotsouplogo" />
				<h2>HotSoup</h2>
			</nav>
			<div className="main">
				<div className="main-text">
					<h1>COMING SOON</h1>
					<p>
						HotSoup is an opensource mobile app project, which is coming soon to
						a mobile app platform near you! It was started to help those who
						suffer from food insecurity find their next meal. All technology and
						engineering is 100% volunteer based, helping seasoned engineering
						sharpen their skills, new devs get some real-world experience (to
						help land that first job that always seems to require experience),
						all while using their skills to give back to the communities. <br />{" "}
						<br />
						Our goal is to make an opensource API free for other organizations
						to use to allow others to utilize what we build to get information
						out to those who need it the most and get them fed! <br />
						<br />
						Please be patient while we build the mobile app. Also, keep an eye
						out for another iteration of the website, which will showcase more
						details, all of our INCREDIBLE volunteers and links to download the
						app!
					</p>
					<a href="https://discord.gg/9fjFWNSrmn">
						<button className="btn-volunteer">
							VOLUNTEER - JOIN THE DISCORD
						</button>
					</a>
					{/* <a href="">
						<button className="btn-kickstarter">BACK OUR PROJECT</button>
					</a> */}
				</div>
				<div className="main-photos">
					<h3>Here Is A Sneak Peak Of The App!</h3>
					<img className="arrow" src={Arrow} alt="arrow"></img>
					<img
						className="phone preview"
						src={PhonePreview}
						alt="phone preview of home screen of the app"
					></img>
					<img
						className="phone search"
						src={PhoneSearch}
						alt="phone preview of search feature of the app"
					></img>
				</div>
			</div>
		</div>
	);
};

export default App;
