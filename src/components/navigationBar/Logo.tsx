import { ReactComponent as Img } from "./logo.svg";
import css from "./Logo.module.css";

const Logo = () => {
	return <Img className={css.logo} />;
};

export { Logo };
