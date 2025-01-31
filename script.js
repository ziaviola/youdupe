function startSearching() {
  const searchInput = document.getElementById("search-input").value;
  const loadingMessage = document.getElementById("loading-message");
  if (searchInput) {
    loadingMessage.innerHTML = "searching for " + searchInput + "...";
  }
  else {
    loadingMessage.innerHTML = "please enter a search term";
  }
}