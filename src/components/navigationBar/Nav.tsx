import React from "react";
import { Link } from "react-router-dom";
import cs from "classnames";
import css from "./Nav.module.css";

type Props = {
	active: boolean;
};

const Nav = ({ active }: Props) => {
	return (
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
					<Link className={css.link} to="/sign-in">
						Sign in
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { Nav };
