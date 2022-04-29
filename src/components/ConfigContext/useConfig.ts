import React, { useState, useCallback, useEffect } from "react";

export type ConfigOption = {
	id: number;
	name: string;
};

export type Config = {
	benefits: ConfigOption[];
	categories: ConfigOption[];
	contractTypes: ConfigOption[];
	seniorities: ConfigOption[];
};

type ConfigResponse = {
	benefits: {
		id: number;
		name: string;
	}[];
	categories: {
		id: number;
		name: string;
	}[];
	contract_types: {
		id: number;
		name: string;
	}[];
	seniorities: {
		id: number;
		name: string;
	}[];
};

const mapResponse = (data: ConfigResponse): Config => ({
	benefits: data.benefits ?? [],
	categories: data.categories ?? [],
	contractTypes: data.contract_types ?? [],
	seniorities: data.seniorities ?? [],
});

const useConfig = () => {
	const [data, setData] = useState<Config>({
		benefits: [],
		categories: [],
		contractTypes: [],
		seniorities: [],
	});

	const fetchConfig = useCallback(async () => {
		try {
			const res = await fetch("http://localhost:4000/config");
			const json = await res.json();

			setData(mapResponse(json.data));
		} catch (error) {
			console.error(error);
		}
	}, []);

	useEffect(() => {
		fetchConfig();
	}, [fetchConfig]);
	return { data };
};

export { useConfig };
