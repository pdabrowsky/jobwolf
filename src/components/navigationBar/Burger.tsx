import React from "react";
import cs from "classnames";
import css from "./Burger.module.css";

type Props = {
	onActive: () => void;
	active: boolean;
};

const Burger = ({ active, onActive }: Props) => {
	return (
		<div className={css.burger} onClick={onActive}>
			<div
				className={cs({
					[css.line1]: active,
				})}
			></div>
			<div
				className={cs({
					[css.line2]: active,
				})}
			></div>
			<div
				className={cs({
					[css.line3]: active,
				})}
			></div>
		</div>
	);
};
export { Burger };
