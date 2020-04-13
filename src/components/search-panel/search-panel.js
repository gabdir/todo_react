import React, {Component} from 'react';

import './search-panel.css';

class SearchPanel extends Component{

    state = {
        term: ''
    };

    onChange = (e) => {
        this.setState({
            term: e.target.value
        });
        this.props.onSearchChange(e.target.value);
    };

    render(){

        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   value={this.state.term}
                   onChange={this.onChange}
            />
        );
    };
}

export default SearchPanel;
