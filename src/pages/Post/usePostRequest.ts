import { useCallback } from "react";
import { FormData, OfferRequest } from "./types";

const mapRequest = (data: FormData): OfferRequest => ({
	title: data.title,
	benefit_ids: data.benefits,
	category_ids: data.categories,
	company_city: data.companyCity,
	company_name: data.companyName,
	contracts: [
		{
			salary_from: 10000,
			salary_to: 20000,
			contract_type_id: 1,
		},
	],
	duration: data.duration.getTime() - new Date().getTime(),
	thumb: "",
	description: data.description,
	seniority_id: data.seniority,
});

const usePostRequest = (formData: FormData) => {
	const requestPost = useCallback(async () => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(mapRequest(formData)),
		};
		try {
			const res = await fetch(
				"http://localhost:4000/offers",
				requestOptions
			);
			const json = await res.json();

			console.log(json);
		} catch (error) {
			console.error(error);
		}
	}, [formData]);
	return { requestPost };
};

export { usePostRequest };
