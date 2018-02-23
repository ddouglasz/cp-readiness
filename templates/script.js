const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('search');

searchButton.addEventListener('click', () => {
  let searchedTerm = searchInput.value;
  if (searchedTerm === "") {
    return alert("please enter a valid input")
  }
  return alert(searchedTerm);
});