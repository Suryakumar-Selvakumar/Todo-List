function populateStorage(projectsArray) {
  localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

function retrieveStorage() {
  return JSON.parse(localStorage.getItem("projectsArray"));
}

export { populateStorage, retrieveStorage };