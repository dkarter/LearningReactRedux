import React, { Component } from 'react';

// functional component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search for a video..."
          onChange={ this.onInputChange.bind(this) }
          value={this.state.term}
        />
      </div>
    );
  }

  onInputChange(event) {
    const term = event.target.value;
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
};

// class component
// for the component to have internal record keeping
export default SearchBar;
