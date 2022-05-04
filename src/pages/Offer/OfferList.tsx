import { Offer as OfferComponent } from "./Offer";
import css from "./OfferList.module.css";
import { useOffers } from "./useOffers";

const OfferList = () => {
	const { data } = useOffers();

	return (
		<ul className={css.list}>
			{data.map((offer) => {
				return (
					<OfferComponent
						key={offer.id}
						title={offer.title}
						salary={offer.salary}
						companyName={offer.companyName}
						companyCity={offer.companyCity}
						categories={offer.categories}
					/>
				);
			})}
		</ul>
	);
};

export { OfferList };
