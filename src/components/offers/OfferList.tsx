import { Offer as OfferComponent } from "./Offer";
import css from "./OfferList.module.css";
import { useOffers } from "./useOffers";

// https://github.com/mateuszs/it-jobs-node
// https://github.com/ohmyzsh/ohmyzsh

const OfferList = () => {
	const { data } = useOffers();

	return (
		<div className={css.wrapper}>
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
		</div>
	);
};

export { OfferList };
