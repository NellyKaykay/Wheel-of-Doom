const codersList = document.getElementById("coders-list");
const startBtn = document.getElementById("start-btn");
const deleteBtn = document.getElementById("delete-btn");
const resultContainer = document.getElementById("result-container");
const usedCoders = [];

startBtn.addEventListener("click", chooseRandomCoder);
deleteBtn.addEventListener("click", deleteResult);

function chooseRandomCoder() {
  // Elegir un coder aleatorio que no haya sido utilizado antes
  let availableCoders = Array.from(codersList.children).filter(
    (coder) => !usedCoders.includes(coder.innerText)
  );
  if (availableCoders.length === 0) {
    // Si se han utilizado todos los coders, reiniciar la lista
    usedCoders.splice(0, usedCoders.length);
    availableCoders = Array.from(codersList.children);
  }
  const randomIndex = Math.floor(Math.random() * availableCoders.length);
  const chosenCoder = availableCoders[randomIndex];

  // Mostrar el nombre del coder elegido y añadirlo a la lista de usados
  const resultDiv = document.createElement("div");
  resultDiv.innerText = ` ${chosenCoder.innerText}`;
  resultDiv.classList.add("animate__animated", "animate__wobble"); // Agregar la clase de animación
  resultContainer.appendChild(resultDiv);
  usedCoders.push(chosenCoder.innerText);
}

function deleteResult() {
  resultContainer.innerHTML = ""; // Borrar el contenido del contenedor del resultado
}

//Animation

