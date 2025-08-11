
const programmesDiv = document.getElementById("programmes");
const form = document.getElementById("formProgramme");
const API_URL = "http://localhost:4000/programmes"; // JSON Server

// Charger les programmes existants
axios.get(API_URL)
  .then(res => {
    res.data.forEach(prog => afficherProgramme(prog));
  });

// Fonction pour afficher un programme dans le div
function afficherProgramme(prog) {
  const div = document.createElement("div");
  div.classList.add("programme");
  div.innerHTML = `
    <h3>${prog.titre}</h3>
    <p>${prog.description}</p>
    <p><strong>Durée:</strong> ${prog.duree}</p>
    <p><strong>Compétences:</strong> ${prog.competences}</p>
  `;
  programmesDiv.append(div);
}

// Ajouter un programme
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nouveauProgramme = {
    titre: document.getElementById("titre").value,
    description: document.getElementById("description").value,
    duree: document.getElementById("duree").value,
    competences: document.getElementById("competences").value
  };

  axios.post(API_URL, nouveauProgramme)
    .then(res => {
      afficherProgramme(res.data); 
      form.reset();
    });
});


