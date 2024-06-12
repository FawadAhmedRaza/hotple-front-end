import { useState } from 'react';

const AutocompleteSearch = ({ value, onChange, placeholder, suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const addTag = (tag) => {
    if (!value.includes(tag)) {
      onChange([...value, tag]);
    }
    setInputValue('');
    setFilteredSuggestions([]);
  };

  const removeTag = (tagToRemove) => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <div className="flex flex-wrap mb-2">
        {value.map((tag) => (
          <div key={tag} className="flex items-center bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-2">
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="ml-2 text-xs font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded focus:outline-none"
          placeholder={placeholder}
        />
        {filteredSuggestions.length > 0 && (
          <ul className="absolute left-0 right-0 mt-1 bg-white border rounded shadow-lg">
            {filteredSuggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => addTag(suggestion)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutocompleteSearch;
