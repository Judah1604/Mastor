import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/base/base.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

function App() {
	return (
		<>
			<Navbar />
            <Hero />
		</>
	);
}

export default App;
