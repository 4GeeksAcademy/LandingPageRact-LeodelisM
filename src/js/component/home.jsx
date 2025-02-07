import React from "react";
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron"
import Card from "./Card"
import Footer from "./Footer"


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div>
					<Jumbotron />
				</div>
				<div className="row ">
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
