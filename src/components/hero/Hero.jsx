import "./hero.css";

function Hero() {
	return (
		<div className="container hero">
			<h1 className="text-center">
				The Future of Manufacturing <br /> with{" "}
				<span>Latest Technology</span>
			</h1>
			<p className="text-center">
				Expert tech to elevate your marketing. Let's take your business
				further.
			</p>
			<div className="btns">
				<button className="btn btn-green">Get Started</button>
				<button className="btn btn-outline">Try Demo</button>
			</div>

			<div className="achiv row">
				<div className="projects col-md-3">
					<h1>1951+</h1>
					<p>total projects</p>
				</div>
				<div className="projects col-md-3">
					<h1>100+</h1>
					<p>esteemed clients and partners</p>
				</div>
				<div className="projects col-md-3">
					<h1>6+</h1>
					<p>years of dedicated service</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
