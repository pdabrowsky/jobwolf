import { createContext } from "react";
import { Config } from "./useConfig";

const ConfigContext = createContext<Config>({
	benefits: [],
	categories: [],
	contractTypes: [],
	seniorities: [],
});

export { ConfigContext };
