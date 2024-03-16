const Category = ({ category, handleCategoryChange }) => {
  return (
    <div>
      <label htmlFor="category">Hangman of: </label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="animes">Animes</option>
        <option value="movies">Movies</option>
        <option value="tvseries">TV Series</option>
      </select>
    </div>
  );
};

export default Category;
