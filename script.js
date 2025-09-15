let ingredientCount = 0, stepCount = 0, tipCount = 0;// Recipe storage and management functions

function saveRecipe() {

// Rezeptverwaltungsfunktionen  const recipeName = document.getElementById("recipeName").value;

function saveRecipe() {  if (!recipeName) {

  const recipeName = document.getElementById("recipeName").value;    alert("Bitte geben Sie einen Namen für das Rezept ein.");

  if (!recipeName) {    return;

    alert("Bitte geben Sie einen Namen für das Rezept ein.");  }

    return;

  }  const recipeId = Date.now().toString(); // Eindeutige ID für das Rezept

  const recipeData = {

  const recipeId = Date.now().toString(); // Eindeutige ID für das Rezept    id: recipeId,

  const recipeData = {    name: recipeName,

    id: recipeId,    difficulty: document.getElementById("difficulty").value,

    name: recipeName,    prepTime: document.getElementById("prepTime").value,

    difficulty: document.getElementById("difficulty").value,    cookTime: document.getElementById("cookTime").value,

    prepTime: document.getElementById("prepTime").value,    ingredients: [],

    cookTime: document.getElementById("cookTime").value,    steps: [],

    ingredients: [],    tips: [],

    steps: [],    imageData: document.getElementById("previewImage").src,

    tips: [],    lastModified: new Date().toISOString()

    imageData: document.getElementById("previewImage").src,  };

    lastModified: new Date().toISOString()

  };  // Collect ingredients

  document.querySelectorAll("#ingredients .flex").forEach(row => {

  // Zutaten sammeln    const menge = row.querySelector("input[type='number']").value;

  document.querySelectorAll("#ingredients .flex").forEach(row => {    const einheit = row.querySelector("select").value;

    const menge = row.querySelector("input[type='number']").value;    const zutat = row.querySelector("input[type='text']").value;

    const einheit = row.querySelector("select").value;    if (menge && zutat) {

    const zutat = row.querySelector("input[type='text']").value;      recipeData.ingredients.push({ menge, einheit, zutat });

    if (menge && zutat) {    }

      recipeData.ingredients.push({ menge, einheit, zutat });  });

    }

  });  // Collect steps

  document.querySelectorAll("#steps textarea").forEach(step => {

  // Schritte sammeln    if (step.value.trim()) {

  document.querySelectorAll("#steps textarea").forEach(step => {      recipeData.steps.push(step.value.trim());

    if (step.value.trim()) {    }

      recipeData.steps.push(step.value.trim());  });

    }

  });  // Collect tips

  document.querySelectorAll("#tips input").forEach(tip => {

  // Tipps sammeln    if (tip.value.trim()) {

  document.querySelectorAll("#tips input").forEach(tip => {      recipeData.tips.push(tip.value.trim());

    if (tip.value.trim()) {    }

      recipeData.tips.push(tip.value.trim());  });

    }

  });  try {

    // Hole existierende Rezepte oder erstelle neue Liste

  try {    let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

    // Hole existierende Rezepte oder erstelle neue Liste    

    let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');    // Prüfe ob das Rezept bereits existiert

        const existingIndex = recipes.findIndex(r => r.name === recipeName);

    // Prüfe ob das Rezept bereits existiert    if (existingIndex >= 0) {

    const existingIndex = recipes.findIndex(r => r.name === recipeName);      if (!confirm(`Ein Rezept mit dem Namen "${recipeName}" existiert bereits. Möchten Sie es überschreiben?`)) {

    if (existingIndex >= 0) {        return;

      if (!confirm(`Ein Rezept mit dem Namen "${recipeName}" existiert bereits. Möchten Sie es überschreiben?`)) {      }

        return;      recipes[existingIndex] = recipeData;

      }    } else {

      recipes[existingIndex] = recipeData;      recipes.push(recipeData);

    } else {    }

      recipes.push(recipeData);    

    }    // Speichere aktualisierte Rezeptliste

        localStorage.setItem('recipes', JSON.stringify(recipes));

    // Speichere aktualisierte Rezeptliste    alert("Rezept erfolgreich gespeichert!");

    localStorage.setItem('recipes', JSON.stringify(recipes));    loadRecipeList();

    alert("Rezept erfolgreich gespeichert!");  } catch (error) {

    loadRecipeList();    console.error('Fehler beim Speichern:', error);

  } catch (error) {    alert("Fehler beim Speichern des Rezepts: " + error.message);

    console.error('Fehler beim Speichern:', error);  }

    alert("Fehler beim Speichern des Rezepts: " + error.message);}

  }

}// Exportiere die Vorschau als Bild (PNG)

function exportImage() {

function loadRecipeList() {  const element = document.getElementById("preview");

  try {  if (window.domtoimage && typeof window.domtoimage.toPng === 'function') {

    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');    window.domtoimage.toPng(element, { bgcolor: '#fff' })

    const recipeList = document.getElementById("recipeList");      .then(function (dataUrl) {

    recipeList.innerHTML = "";        const link = document.createElement('a');

            link.download = `${document.getElementById("recipeName").value || "Rezept"}.png`;

    recipes.sort((a, b) => a.name.localeCompare(b.name)).forEach(recipe => {        link.href = dataUrl;

      const recipeDiv = document.createElement("div");        link.click();

      recipeDiv.className = "flex justify-between items-center p-2 bg-gray-50 rounded mb-2";      })

            .catch(function (error) {

      const nameSpan = document.createElement("span");        alert('Bild-Export fehlgeschlagen: ' + (error && error.message ? error.message : error));

      nameSpan.textContent = recipe.name;        console.error('Bild-Export Fehler:', error);

      nameSpan.className = "cursor-pointer hover:text-blue-600";      });

      nameSpan.onclick = () => loadRecipe(recipe.id);  } else {

          alert('Bild-Export nicht möglich: dom-to-image Bibliothek wurde nicht geladen.');

      const deleteButton = document.createElement("button");  }

      deleteButton.innerHTML = "🗑️";}

      deleteButton.className = "text-red-500 hover:text-red-700";let ingredientCount = 0, stepCount = 0, tipCount = 0;

      deleteButton.onclick = () => deleteRecipe(recipe.id);

      function addIngredient() {

      recipeDiv.appendChild(nameSpan);  ingredientCount++;

      recipeDiv.appendChild(deleteButton);  const div = document.getElementById("ingredients");

      recipeList.appendChild(recipeDiv);  const row = document.createElement("div");

    });  row.className = "flex gap-2 mb-2";

  } catch (error) {  // Mengenangabe

    console.error('Fehler beim Laden der Rezeptliste:', error);  const menge = document.createElement("input");

  }  menge.type = "number";

}  menge.placeholder = "Menge";

  menge.className = "p-2 border rounded-lg";

function loadRecipe(recipeId) {  menge.style.width = "95px";

  try {  menge.oninput = updatePreview;

    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');  // Mengeneinheit

    const recipeData = recipes.find(r => r.id === recipeId);  const einheit = document.createElement("select");

      einheit.className = "p-2 border rounded-lg w-24";

    if (!recipeData) {  ["EL","TL","Stück","L","ml","g","kg","Prise","Päckchen","Dose","Bund","Scheibe","Tasse"].forEach(e => {

      throw new Error('Rezept nicht gefunden');    const opt = document.createElement("option");

    }    opt.value = e;

        opt.text = e;

    // Grunddaten einfügen    einheit.appendChild(opt);

    document.getElementById("recipeName").value = recipeData.name;  });

    document.getElementById("difficulty").value = recipeData.difficulty;  einheit.onchange = updatePreview;

    document.getElementById("prepTime").value = recipeData.prepTime;  // Zutat

    document.getElementById("cookTime").value = recipeData.cookTime;  const zutat = document.createElement("input");

    document.getElementById("previewImage").src = recipeData.imageData;  zutat.type = "text";

  zutat.placeholder = `Zutat ${ingredientCount}`;

    // Zutaten, Schritte und Tipps löschen  zutat.className = "p-2 border rounded-lg flex-1";

    document.getElementById("ingredients").innerHTML = "";  zutat.oninput = updatePreview;

    document.getElementById("steps").innerHTML = "";  row.appendChild(menge);

    document.getElementById("tips").innerHTML = "";  row.appendChild(einheit);

      row.appendChild(zutat);

    // Zutaten hinzufügen  div.appendChild(row);

    recipeData.ingredients.forEach(ing => {}

      addIngredient();

      const lastRow = document.querySelector("#ingredients .flex:last-child");function addStep() {

      lastRow.querySelector("input[type='number']").value = ing.menge;  stepCount++;

      lastRow.querySelector("select").value = ing.einheit;  const div = document.getElementById("steps");

      lastRow.querySelector("input[type='text']").value = ing.zutat;  const textarea = document.createElement("textarea");

    });  textarea.placeholder = `Schritt ${stepCount}`;

  textarea.className = "w-full p-2 border rounded-lg mb-2";

    // Schritte hinzufügen  textarea.oninput = updatePreview;

    recipeData.steps.forEach(step => {  div.appendChild(textarea);

      addStep();}

      const lastStep = document.querySelector("#steps textarea:last-child");

      lastStep.value = step;function addTip() {

    });  tipCount++;

  const div = document.getElementById("tips");

    // Tipps hinzufügen  const input = document.createElement("input");

    recipeData.tips.forEach(tip => {  input.type = "text";

      addTip();  input.placeholder = `Tipp ${tipCount}`;

      const lastTip = document.querySelector("#tips input:last-child");  input.className = "w-full p-2 border rounded-lg mb-2";

      lastTip.value = tip;  input.oninput = updatePreview;

    });  div.appendChild(input);

}

    updatePreview();

  } catch (error) {document.getElementById("imageUpload").addEventListener("change", function(evt) {

    console.error('Fehler beim Laden des Rezepts:', error);  const file = evt.target.files[0];

    alert("Fehler beim Laden des Rezepts: " + error.message);  if (file) {

  }    const reader = new FileReader();

}    reader.onload = e => document.getElementById("previewImage").src = e.target.result;

    reader.readAsDataURL(file);

function deleteRecipe(recipeId) {  }

  try {});

    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

    const recipe = recipes.find(r => r.id === recipeId);function updatePreview() {

      document.getElementById("previewName").innerText = document.getElementById("recipeName").value || "Rezeptname";

    if (!recipe) {

      throw new Error('Rezept nicht gefunden');  const difficulty = document.getElementById("difficulty").value;

    }  const stars = "★★★★★☆☆☆☆☆".slice(5 - difficulty, 10 - difficulty);

  const prep = parseInt(document.getElementById("prepTime").value) || 0;

    if (!confirm(`Möchten Sie das Rezept "${recipe.name}" wirklich löschen?`)) {  const cook = parseInt(document.getElementById("cookTime").value) || 0;

      return;  const total = prep + cook;

    }  document.getElementById("previewMeta").innerText =

    `Schwierigkeit: ${stars} | Gesamtzeit: ${total} Min. (${prep} Min. Vorbereitung, ${cook} Min. Kochen)`;

    const updatedRecipes = recipes.filter(r => r.id !== recipeId);

    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));  const ingList = document.getElementById("previewIngredients");

    loadRecipeList();  ingList.innerHTML = "";

  } catch (error) {  // Zutaten als Tabelle darstellen

    console.error('Fehler beim Löschen:', error);  const rows = document.getElementById("ingredients").getElementsByClassName("flex");

    alert("Fehler beim Löschen des Rezepts: " + error.message);  if (rows.length > 0) {

  }    const table = document.createElement("table");

}    table.style.width = "100%";

    table.style.borderCollapse = "collapse";

function addIngredient() {    table.innerHTML = `<colgroup>

  ingredientCount++;      <col style='width:15%'>

  const div = document.getElementById("ingredients");      <col style='width:20%'>

  const row = document.createElement("div");      <col style='width:65%'>

  row.className = "flex gap-2 mb-2";    </colgroup>

  // Mengenangabe    <thead><tr>

  const menge = document.createElement("input");      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Menge</th>

  menge.type = "number";      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Einheit</th>

  menge.placeholder = "Menge";      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Zutat</th>

  menge.className = "p-2 border rounded-lg";    </tr></thead><tbody></tbody>`;

  menge.style.width = "95px";    const tbody = table.querySelector("tbody");

  menge.oninput = updatePreview;    for (let row of rows) {

  // Mengeneinheit      const menge = row.querySelector("input[type='number']")?.value;

  const einheit = document.createElement("select");      const einheit = row.querySelector("select")?.value;

  einheit.className = "p-2 border rounded-lg w-24";      const zutat = row.querySelector("input[type='text']")?.value;

  ["EL","TL","Stück","L","ml","g","kg","Prise","Päckchen","Dose","Bund","Scheibe","Tasse"].forEach(e => {      if (menge && zutat) {

    const opt = document.createElement("option");        const tr = document.createElement("tr");

    opt.value = e;        tr.innerHTML = `<td style='padding:4px;'>${menge}</td><td style='padding:4px;'>${einheit}</td><td style='padding:4px;'>${zutat}</td>`;

    opt.text = e;        tbody.appendChild(tr);

    einheit.appendChild(opt);      }

  });    }

  einheit.onchange = updatePreview;    ingList.appendChild(table);

  // Zutat  }

  const zutat = document.createElement("input");

  zutat.type = "text";  const stepList = document.getElementById("previewSteps");

  zutat.placeholder = `Zutat ${ingredientCount}`;  stepList.innerHTML = "";

  zutat.className = "p-2 border rounded-lg flex-1";  document.querySelectorAll("#steps textarea").forEach(input => {

  zutat.oninput = updatePreview;    if (input.value.trim()) {

  row.appendChild(menge);      const li = document.createElement("li");

  row.appendChild(einheit);      li.innerText = input.value;

  row.appendChild(zutat);      stepList.appendChild(li);

  div.appendChild(row);    }

}  });



function addStep() {  const tipList = document.getElementById("previewTips");

  stepCount++;  tipList.innerHTML = "";

  const div = document.getElementById("steps");  document.querySelectorAll("#tips input").forEach(input => {

  const textarea = document.createElement("textarea");    if (input.value.trim()) {

  textarea.placeholder = `Schritt ${stepCount}`;      const li = document.createElement("li");

  textarea.className = "w-full p-2 border rounded-lg mb-2";      li.innerText = input.value;

  textarea.oninput = updatePreview;      tipList.appendChild(li);

  div.appendChild(textarea);    }

}  });

}

function addTip() {

  tipCount++;function generatePDF() {

  const div = document.getElementById("tips");  const element = document.getElementById("preview");

  const input = document.createElement("input");  const opt = {

  input.type = "text";    margin:       0.5,

  input.placeholder = `Tipp ${tipCount}`;    filename:     `${document.getElementById("recipeName").value || "Rezept"}.pdf`,

  input.className = "w-full p-2 border rounded-lg mb-2";    image:        { type: 'jpeg', quality: 0.95 },

  input.oninput = updatePreview;    html2canvas:  { scale: 2 },

  div.appendChild(input);    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }

}  };

  html2pdf().set(opt).from(element).save();

document.getElementById("imageUpload").addEventListener("change", function(evt) {}

  const file = evt.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => document.getElementById("previewImage").src = e.target.result;
    reader.readAsDataURL(file);
  }
});

function updatePreview() {
  document.getElementById("previewName").innerText = document.getElementById("recipeName").value || "Rezeptname";

  const difficulty = document.getElementById("difficulty").value;
  const stars = "★★★★★☆☆☆☆☆".slice(5 - difficulty, 10 - difficulty);
  const prep = parseInt(document.getElementById("prepTime").value) || 0;
  const cook = parseInt(document.getElementById("cookTime").value) || 0;
  const total = prep + cook;
  document.getElementById("previewMeta").innerText =
    `Schwierigkeit: ${stars} | Gesamtzeit: ${total} Min. (${prep} Min. Vorbereitung, ${cook} Min. Kochen)`;

  const ingList = document.getElementById("previewIngredients");
  ingList.innerHTML = "";
  // Zutaten als Tabelle darstellen
  const rows = document.getElementById("ingredients").getElementsByClassName("flex");
  if (rows.length > 0) {
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.innerHTML = `<colgroup>
      <col style='width:15%'>
      <col style='width:20%'>
      <col style='width:65%'>
    </colgroup>
    <thead><tr>
      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Menge</th>
      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Einheit</th>
      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Zutat</th>
    </tr></thead><tbody></tbody>`;
    const tbody = table.querySelector("tbody");
    for (let row of rows) {
      const menge = row.querySelector("input[type='number']")?.value;
      const einheit = row.querySelector("select")?.value;
      const zutat = row.querySelector("input[type='text']")?.value;
      if (menge && zutat) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td style='padding:4px;'>${menge}</td><td style='padding:4px;'>${einheit}</td><td style='padding:4px;'>${zutat}</td>`;
        tbody.appendChild(tr);
      }
    }
    ingList.appendChild(table);
  }

  const stepList = document.getElementById("previewSteps");
  stepList.innerHTML = "";
  document.querySelectorAll("#steps textarea").forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.innerText = input.value;
      stepList.appendChild(li);
    }
  });

  const tipList = document.getElementById("previewTips");
  tipList.innerHTML = "";
  document.querySelectorAll("#tips input").forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.innerText = input.value;
      tipList.appendChild(li);
    }
  });
}

// Exportiere die Vorschau als Bild (PNG)
function exportImage() {
  const element = document.getElementById("preview");
  if (window.domtoimage && typeof window.domtoimage.toPng === 'function') {
    window.domtoimage.toPng(element, { bgcolor: '#fff' })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = `${document.getElementById("recipeName").value || "Rezept"}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        alert('Bild-Export fehlgeschlagen: ' + (error && error.message ? error.message : error));
        console.error('Bild-Export Fehler:', error);
      });
  } else {
    alert('Bild-Export nicht möglich: dom-to-image Bibliothek wurde nicht geladen.');
  }
}

// Lade die Rezeptliste beim Start
document.addEventListener('DOMContentLoaded', loadRecipeList);