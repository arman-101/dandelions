import { useState } from "react";
import locations from "../data/locations.json";

export default function Input({ onSelect }) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleInput = (e) => {
    const val = e.target.value;
    setQuery(val);

    if (val.length > 0) {
      const matches = locations.filter((loc) =>
        loc.name.toLowerCase().includes(val.toLowerCase())
      );
      setFiltered(matches);
    } else {
      setFiltered([]);
    }
  };

  const handleSelect = (loc) => {
    onSelect(loc);
    setQuery("");
    setFiltered([]);
  };

  return (
    <div className="flex flex-col items-center mt-5 relative">
      <input
        className="bg-myPink py-2 px-4 w-80 rounded border-2 border-myDarkGreen"
        type="text"
        placeholder="Search for a place..."
        value={query}
        onChange={handleInput}
      />
      {filtered.length > 0 && (
        <ul className="absolute mt-12 bg-white w-80 border border-gray-300 rounded shadow z-10 max-h-60 overflow-y-auto">
          {filtered.map((loc, index) => (
            <li
              key={index}
              onClick={() => handleSelect(loc)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointe "
            >
              <div className="flex justify-between">
                <div className="text-pink-900">{loc.name}</div> <div className="text-myDarkGreen">{loc.type}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
