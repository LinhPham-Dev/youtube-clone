import React, { useState } from "react";

export const SearchBar = ({ onFormSubmit }) => {
	const [search, setSearch] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();

		onFormSubmit(search);
	};

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label htmlFor="search">
						<h3>PNL - Clone Youtube - React Hook</h3>
					</label>
					<input
						id="search"
						type="text"
						name="search-youtube"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
