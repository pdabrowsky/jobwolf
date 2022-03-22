import React, { useEffect } from "react";
import { NavigationBar } from "./components/navigationBar/NavigationBar";
import { OfferList } from "./components/offers/OfferList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// TODO: read
// https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react

// x.y.z html kotwica

// TODO: eslint https://github.com/yannickcr/eslint-plugin-react https://eslint.org/docs/rules/
// Formik, ReactForms

function App() {
	return (
		<Router>
			<NavigationBar />
			<Routes>
				<Route path="/" element={<OfferList />} />
			</Routes>
		</Router>
	);
}

export default App;
