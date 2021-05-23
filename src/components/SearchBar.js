import React, { useState } from 'react';

const SearchBar = (props) => {
    const [input, setInput] = useState("");

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(input);
    }

    return <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onSubmit}>
            <label>Video Search</label>
            <input type="text" onChange={onInputChange}/>
        </form>
    </div>;
}

export default SearchBar;
