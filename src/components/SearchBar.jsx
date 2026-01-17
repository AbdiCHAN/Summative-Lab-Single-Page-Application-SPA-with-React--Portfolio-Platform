import "../styles/ProjectList.css";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search Projects"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchBar;
