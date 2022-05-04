import { OfferList } from "./OfferList";
import { SearchBar } from "./SearchBar";
import css from "./Offers.module.css";

const Offers = () => {
	return (
		<div className={css.offers}>
			<SearchBar />
			<OfferList />;
		</div>
	);
};
export { Offers };
