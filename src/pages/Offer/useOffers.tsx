import { useState, useCallback, useEffect } from "react";
import { Offer } from "./types";

type OfferResponse = {
	id: number;
	benefits: { name: string; id: number }[];
	categories: { name: string; id: number }[];
	company_city: string;
	company_name: string;
	date: string;
	description: string;
	duration: number;
	id_seniority: number;
	salary: { name: string; salary_from: number; salary_to: number }[];
	seniority_name: string;
	thumb: string;
	title: string;
};

const mapResponse = (data: OfferResponse): Offer => ({
	id: data.id ?? 0,
	companyName: data.company_name ?? "",
	categories: data.categories ?? [],
	salary: (data.salary ?? []).map((salary) => ({
		name: salary.name ?? "",
		salaryFrom: salary.salary_from ?? 0,
		salaryTo: salary.salary_to ?? 0,
	})),
	title: data.title ?? "",
	companyCity: data.company_city ?? "",
});

const useOffers = () => {
	const [data, setData] = useState<Offer[]>([]);

	const fetchOffers = useCallback(async () => {
		try {
			// URLSearchParams   &category=2

			const res = await fetch(
				"http://localhost:4000/offers?page=1&limit=10&order_by=id&sort_direction=desc"
			);
			const data = await res.json();

			setData(data.data.records.map(mapResponse));
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		fetchOffers();
	}, [fetchOffers]);

	return { fetchOffers, data };
};
export { useOffers };
