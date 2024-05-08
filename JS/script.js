const digimonName = document.getElementById("digimon_name");
const digimonNumber = document.getElementById("digimon_number");
const digimonImage = document.getElementById("digimon_image");

const form = document.getElementById("form");
const input = document.getElementById("input_search");
const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");

let digimonInitial = 1;

const fetchDigimon = async (digimon) => {
  const url = await fetch(`https://digi-api.com/api/v1/digimon/${digimon}`);
  
  if (url.status === 200) {
    const returne = await url.json();
    return returne;
  }
}

const renderDigimon = async (digimon) => {

  digimonName.innerHTML = 'Carregando...';
  digimonNumber.innerHTML = '';

  const data = await fetchDigimon(digimon);

  if(data) {
    digimonName.innerHTML = data.name;
    digimonNumber.innerHTML = data.id;
    digimonImage.src = data.images[0].href;
    input.value = '';
    digimonInitial = data.id;
  } else {
    digimonImage.src = './images/digimon-not-found.png';
    digimonName.innerHTML = 'Não encontrado';
    digimonNumber.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderDigimon(input.value)
})

 button1.addEventListener('click', () => {
  if (input.value === '') {
    digimonInitial = 9999
    renderDigimon(digimonInitial);
  } else {
    renderDigimon(input.value)
  }
 })

button2.addEventListener('click', () => {
  digimonInitial += 1;
  renderDigimon(digimonInitial);
})

button3.addEventListener('click', () => {
  if (digimonInitial > 1){
    digimonInitial -= 1;
    renderDigimon(digimonInitial);
  }
})

renderDigimon(digimonInitial);


