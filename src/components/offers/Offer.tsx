import React from "react";
import css from "./Offer.module.css";
import { Offer as OfferType } from "./types";

type Props = OfferType;

//https://github.com/facebook/create-react-app/pull/8177

const Offer = ({
	companyCity,
	companyName,
	salary,
	categories,
	title,
}: Props) => {
	return (
		<li className={css.wrapper}>
			<div className={css.logo}>
				<h1>logo</h1>
			</div>
			<div className={css.details}>
				<div className={css["details-top"]}>
					<div className={css.title}>
						<h1>{title}</h1>
					</div>
					<div>
						<p>
							{salary[0].salaryFrom} - {salary[0].salaryTo} PLN
						</p>
					</div>
				</div>
				<div className={css["details-bottom"]}>
					<div className={css["bottom-left"]}>
						<p className={css.company}>{companyName}</p>
						<p>{companyCity}</p>
					</div>
					<ul>
						<li className={css.tech}>
							{categories.map((el, i) => {
								return <p key={i}>{el.name}</p>;
							})}
						</li>
					</ul>
				</div>
			</div>
		</li>
	);
};

export { Offer };
