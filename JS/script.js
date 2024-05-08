const digimonName = document.getElementById("digimon_name");
const digimonNumber = document.getElementById("digimon_number");
const digimonImage = document.getElementById("digimon_image");

const form = document.getElementById("form");
const input = document.getElementById("input_search");

const fetchDigimon = async (digimon) => {
  const url = await fetch(`https://digi-api.com/api/v1/digimon/${digimon}`);
  const returne = await url.json();
  return returne;
}

const renderDigimon = async (digimon) => {

  const data = await fetchDigimon(digimon);

    digimonName.innerHTML = data.name;
    digimonNumber.innerHTML = data.id;
    digimonImage.src = data.images[0].href;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  renderDigimon(input.value)
  input.value = '';
})





