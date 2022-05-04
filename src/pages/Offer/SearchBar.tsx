import { useState, useContext } from "react";
import Select from "react-select";
import { Options } from "react-select";
import css from "./SearchBar.module.css";
import { ConfigContext } from "./../../components/ConfigContext";

const SearchBar = () => {
	const { categories } = useContext(ConfigContext);
	const [selectedCategories, setSelectedCategories] = useState<
		typeof categories
	>([]);

	const selectOptions = categories.map((el) => ({
		value: el.id,
		label: el.name,
	}));

	const handleChange = (event: Options<{ label: string; value: number }>) => {
		setSelectedCategories(() => {
			const values = event.map((el) => {
				return {
					id: el.value,
					name: el.label,
				};
			});
			return values;
		});
	};

	return (
		<Select
			placeholder="Search"
			className={css.input}
			options={selectOptions}
			onChange={handleChange}
			isMulti
		/>
	);
};
export { SearchBar };
