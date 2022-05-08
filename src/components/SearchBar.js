import { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { search: "" };
	}

	onInputChange = (event) => {
		this.setState({ search: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onFormSubmit(this.state.search);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="search">
							<h3>Youtube Videos Search</h3>
						</label>
						<input
							id="search"
							type="text"
							name="search-youtube"
							value={this.state.search}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
