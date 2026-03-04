import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
	return (
		<div className="content-wrapper hero-width">
			<span className="page-title">home page</span>
			<p className="page-body hero-width">
				this is the application home page
			</p>
		</div>
	);
}

function About() {
	return (
		<div className="content-wrapper hero-width">
			<span className="page-title">about page</span>
		</div>
	);
}

function Contact() {
	return (
		<div className="content-wrapper hero-width">
			<span className="page-title">contact page</span>
		</div>
	);
}

function App() {
	return (
		<BrowserRouter>
			{/* Navigation */}
			<div className="nav-wrapper">
				<nav className="hero-width">
					<Link to="/">sunrise</Link>
					<Link to="/products">products</Link>
					<Link to="/contact">contact</Link>
				</nav>
			</div>

			{/* Routes */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
