const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className=" ma3 pa2 ba b--black"
        type="search"
        placeholder="Search Products"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
