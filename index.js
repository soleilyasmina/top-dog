// 1. SELECTING ELEMENTS

// select our dropdown (so we can populate breeds / and add an event listener)
const dropdown = document.querySelector("#dropdown");
// select our image container (section) (so we can append / clear out photos)

// 3. CREATE OUR EVENT HANDLERS / FUNCTIONS

// on page load, fetch breeds
const fetchBreeds = async () => {
  try {
    // make our request, and save the response into a variable (called response)
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    // log our data to the console to figure out what to do next
    console.log(response.data.message);

    // use Object.keys on the breed object from our response and save the output in a variable called dogBreeds
    const dogBreeds = Object.keys(response.data.message);
    console.log(dogBreeds);

    // for each of our dog breeds we'd like to...
    dogBreeds.forEach((dogBreed) => {
      // create an option element called dogBreedEl
      const dogBreedEl = document.createElement("option");
      // assign dogBreedEl's inner text to be the current dog breed
      dogBreedEl.innerText = dogBreed;
      // append the dogBreedEl to our dropdown (we selected it before)
      dropdown.append(dogBreedEl);
    })
  } catch (error) {
    console.error(error);
  }
}
fetchBreeds();
// when we select a breed, attach a image of that breed from the API to the DOM

// 4. ADD OUR EVENT LISTENERS

// event listener for our dropdown to get image of breed and attach it