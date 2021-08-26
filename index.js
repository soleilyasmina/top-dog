// 1. SELECTING ELEMENTS

// select our dropdown (so we can populate breeds / and add an event listener)
const dropdown = document.querySelector("#dropdown");
// select our image container (section) (so we can append / clear out photos)
const imageContainer = document.querySelector("#image-container");

// 3. CREATE OUR EVENT HANDLERS / FUNCTIONS

// on page load, fetch breeds
const fetchBreeds = async () => {
  try {
    // make our request, and save the response into a variable (called response)
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");

    // use Object.keys on the breed object from our response and save the output in a variable called dogBreeds
    const dogBreeds = Object.keys(response.data.message);

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
const fetchAndAttachImage = async (event) => {
  try {
    const newDogBreed = event.target.value;

    // make our dog breed specific url
    const url = `https://dog.ceo/api/breed/${newDogBreed}/images/random`;
    // make a request to that url and save the output in a variable called response
    const response = await axios.get(url);

    // clear out our image container
    imageContainer.innerHTML = "";

    // create an image element
    const imgEl = document.createElement("img");
    // set that image element's src to be the message property of our response.data
    imgEl.src = response.data.message;
    // append our image element to our imageContainer
    imageContainer.append(imgEl);
  } catch (error) {
    console.error(error);
  }
}

// 4. ADD OUR EVENT LISTENERS

// event listener for our dropdown to get image of breed and attach it on the change event
dropdown.addEventListener("change", fetchAndAttachImage);