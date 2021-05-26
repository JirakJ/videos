import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [input, setInput] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(input);
    }

    return <div className="search-bar ui segment">
        <form
            className="ui form"
            onSubmit={onFormSubmit}
        >
            <label>Video Search</label>
            <input
                type="text"
                onChange={(event) => setInput(event.target.value)}
                value={input}
            />
        </form>
    </div>;
}

export default SearchBar;
