import { usePostForm } from "./usePostForm";
import { parseDate } from "./utils";
import Select from "react-select";
import css from "./PostForm.module.css";

const PostForm = () => {
	const {
		formData,
		handleChange,
		handleExtraChange,
		handleFileChange,
		handleDurationChange,
		handleSubmit,
		selectOptions,
		handleSalaryChange,
		handleSalaryAdd,
		handleValidate,
		benefits,
		errors,
		categories,
		seniorities,
		contractTypes,
	} = usePostForm();

	return (
		<form className={css.container}>
			<div className={css.title}>
				<label htmlFor="title">Title</label>
				<input
					id="title"
					type="text"
					placeholder="Enter title"
					value={formData.title}
					onChange={handleChange("title")}
					onBlur={handleValidate("title")}
					required
				/>
				{errors.title && (
					<div>
						{errors.title.map((el, id) => {
							return <p key={id}>{el}</p>;
						})}
					</div>
				)}
			</div>
			<div className={css.benefits}>
				<label>
					Benefits
					<Select
						options={selectOptions(benefits)}
						onChange={handleExtraChange("benefits")}
						isMulti
						isSearchable
					/>
				</label>
			</div>
			<div className={css.categories}>
				<label>
					Categories
					<Select
						options={selectOptions(categories)}
						onChange={handleExtraChange("categories")}
						isMulti
						isSearchable
					/>
				</label>
			</div>
			<div className={css.companyCity}>
				<label htmlFor="companyCity">Company city</label>
				<input
					id="companyCity"
					type="text"
					placeholder="Enter company_city"
					value={formData.companyCity}
					onChange={handleChange("companyCity")}
					required
				/>
			</div>
			<div className={css.companyName}>
				<label htmlFor="companyName">Company name</label>
				<input
					id="companyName"
					type="text"
					placeholder="Enter company name"
					value={formData.companyName}
					onChange={handleChange("companyName")}
					required
				/>
			</div>
			<div className={css.salary}>
				<label>
					Salary: from
					<input
						type="number"
						placeholder="salary from"
						value={formData.salaryFrom}
						onChange={(e) => handleSalaryChange(e, "salaryFrom")}
						required
					/>
				</label>
				<label>
					to
					<input
						type="number"
						placeholder="salary to"
						value={formData.salaryTo}
						onChange={(e) => handleSalaryChange(e, "salaryTo")}
						required
					/>
				</label>
				<label>
					<select
						value={formData.contractTypeId}
						onChange={handleChange("contractTypeId")}
					>
						contract type:
						{contractTypes.map(({ id, name }) => {
							return (
								<option key={id} value={id}>
									{name}
								</option>
							);
						})}
					</select>
				</label>
				<button type="button" onClick={handleSalaryAdd}>
					add
				</button>
			</div>
			<div className={css.duration}>
				<label htmlFor="duration">Duration</label>
				<input
					id="duration"
					type="date"
					value={parseDate(formData.duration)}
					onChange={handleDurationChange}
				/>
			</div>
			<div className={css.seniority}>
				<label htmlFor="seniority">Seniority</label>
				<select
					id="seniority"
					value={formData.seniority}
					onChange={handleChange("seniority")}
				>
					{seniorities.map(({ id, name }) => {
						return (
							<option key={id} value={id}>
								{name}
							</option>
						);
					})}
				</select>
			</div>
			<div className={css.description}>
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					rows={4}
					cols={50}
					value={formData.description}
					onChange={handleChange("description")}
				></textarea>
			</div>
			<div>
				<label>
					{formData.thumb && (
						<img
							src={formData.thumb}
							alt="logo"
							width="50"
							height="50"
						/>
					)}
					<input type="file" onChange={handleFileChange} />
				</label>
			</div>

			<div className={css.submit}>
				<button type="submit" onClick={handleSubmit}>
					Post
				</button>
			</div>
		</form>
	);
};

export { PostForm };
