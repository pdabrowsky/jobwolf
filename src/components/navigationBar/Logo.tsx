import React from "react";
import { ReactComponent as Img } from "../../img/logo.svg";
import css from "./Logo.module.css";

const Logo = () => {
	return <Img className={css.logo} />;
};

export { Logo };
