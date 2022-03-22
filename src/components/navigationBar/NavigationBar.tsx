import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Burger } from "./Burger";
import { Logo } from "./Logo";
import cs from "classnames";
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
			<nav className={css["menu-list-wrapper"]}>
				<ul
					className={cs(css["menu-list"], {
						[css["nav-active"]]: active,
					})}
				>
					<li>
						<Link className={css.link} to="/">
							Offers
						</Link>
					</li>
					<li>
						<Link className={css.link} to="/favorite">
							Favorite
						</Link>
					</li>
					<li>
						<Link className={css.link} to="/post">
							Post a Job
						</Link>
					</li>
					<li>
						<Link className={css.link} to="/sing-in">
							Sing in
						</Link>
					</li>
				</ul>
			</nav>
			<Burger active={active} onActive={onActive} />
		</header>
	);
};

export { NavigationBar };
