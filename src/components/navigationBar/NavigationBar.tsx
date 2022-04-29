import { useState } from "react";
import { Burger } from "./Burger";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import css from "./NavigationBar.module.css";

// react-router-dom // react-router
// git log, git add, git commit, git branch, git checkout

const NavigationBar = () => {
	const [active, setActive] = useState<boolean>(false);

	const onActive = () => {
		setActive(!active);
	};

	return (
		<header className={css["navigation-bar"]}>
			<Logo />
			<Nav active={active} />
			<Burger active={active} onActive={onActive} />
		</header>
	);
};

export { NavigationBar };
