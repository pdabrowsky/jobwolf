import { useState } from "react";
import { Burger } from "./Burger";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import css from "./NavigationBar.module.css";

const NavigationBar = () => {
	const [active, setActive] = useState<boolean>(false);

	const handleChange = () => {
		setActive(!active);
	};

	return (
		<header className={css["navigation-bar"]}>
			<Logo />
			<Nav active={active} />
			<Burger active={active} onActive={handleChange} />
		</header>
	);
};

export { NavigationBar };
