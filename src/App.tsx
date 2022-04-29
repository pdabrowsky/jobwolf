import React from "react";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Offers } from "./pages/Offer/Offers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigContext, useConfig } from "./components/ConfigContext";
import { Post } from "./pages/Post/Post";

// x.y.z html kotwica
// Formik, ReactForms

function App() {
	const { data } = useConfig();
	return (
		<Router>
			<NavigationBar />
			<ConfigContext.Provider value={data}>
				<Routes>
					<Route path="/" element={<Offers />} />
					<Route path="post" element={<Post />} />
				</Routes>
			</ConfigContext.Provider>
		</Router>
	);
}

export default App;
