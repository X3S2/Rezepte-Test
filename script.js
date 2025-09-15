let ingredientCount = 0, stepCount = 0, tipCount = 0;let ingredientCount = 0, stepCount = 0, tipCount = 0;// Recipe storage and management functions



// Rezeptverwaltungsfunktionenfunction saveRecipe() {

function newRecipe() {

  if (document.getElementById("recipeName").value !== "") {// Rezeptverwaltungsfunktionen  const recipeName = document.getElementById("recipeName").value;

    if (!confirm("Möchten Sie wirklich ein neues Rezept erstellen? Nicht gespeicherte Änderungen gehen verloren.")) {

      return;function saveRecipe() {  if (!recipeName) {

    }

  }  const recipeName = document.getElementById("recipeName").value;    alert("Bitte geben Sie einen Namen für das Rezept ein.");

  

  // Formular zurücksetzen  if (!recipeName) {    return;

  document.getElementById("recipeName").value = "";

  document.getElementById("difficulty").value = "3";    alert("Bitte geben Sie einen Namen für das Rezept ein.");  }

  document.getElementById("prepTime").value = "";

  document.getElementById("cookTime").value = "";    return;

  document.getElementById("previewImage").src = "assets/placeholder.png";

    }  const recipeId = Date.now().toString(); // Eindeutige ID für das Rezept

  // Zutaten, Schritte und Tipps löschen

  document.getElementById("ingredients").innerHTML = "";  const recipeData = {

  document.getElementById("steps").innerHTML = "";

  document.getElementById("tips").innerHTML = "";  const recipeId = Date.now().toString(); // Eindeutige ID für das Rezept    id: recipeId,

  

  // Zähler zurücksetzen  const recipeData = {    name: recipeName,

  ingredientCount = 0;

  stepCount = 0;    id: recipeId,    difficulty: document.getElementById("difficulty").value,

  tipCount = 0;

      name: recipeName,    prepTime: document.getElementById("prepTime").value,

  // Vorschau aktualisieren

  updatePreview();    difficulty: document.getElementById("difficulty").value,    cookTime: document.getElementById("cookTime").value,

}

    prepTime: document.getElementById("prepTime").value,    ingredients: [],

function saveRecipe() {

  const recipeName = document.getElementById("recipeName").value;    cookTime: document.getElementById("cookTime").value,    steps: [],

  if (!recipeName) {

    alert("Bitte geben Sie einen Namen für das Rezept ein.");    ingredients: [],    tips: [],

    return;

  }    steps: [],    imageData: document.getElementById("previewImage").src,



  const recipeId = Date.now().toString();    tips: [],    lastModified: new Date().toISOString()

  const recipeData = {

    id: recipeId,    imageData: document.getElementById("previewImage").src,  };

    name: recipeName,

    difficulty: document.getElementById("difficulty").value,    lastModified: new Date().toISOString()

    prepTime: document.getElementById("prepTime").value,

    cookTime: document.getElementById("cookTime").value,  };  // Collect ingredients

    ingredients: [],

    steps: [],  document.querySelectorAll("#ingredients .flex").forEach(row => {

    tips: [],

    imageData: document.getElementById("previewImage").src,  // Zutaten sammeln    const menge = row.querySelector("input[type='number']").value;

    lastModified: new Date().toISOString()

  };  document.querySelectorAll("#ingredients .flex").forEach(row => {    const einheit = row.querySelector("select").value;



  // Zutaten sammeln    const menge = row.querySelector("input[type='number']").value;    const zutat = row.querySelector("input[type='text']").value;

  document.querySelectorAll("#ingredients .flex").forEach(row => {

    const menge = row.querySelector("input[type='number']").value;    const einheit = row.querySelector("select").value;    if (menge && zutat) {

    const einheit = row.querySelector("select").value;

    const zutat = row.querySelector("input[type='text']").value;    const zutat = row.querySelector("input[type='text']").value;      recipeData.ingredients.push({ menge, einheit, zutat });

    if (menge && zutat) {

      recipeData.ingredients.push({ menge, einheit, zutat });    if (menge && zutat) {    }

    }

  });      recipeData.ingredients.push({ menge, einheit, zutat });  });



  // Schritte sammeln    }

  document.querySelectorAll("#steps textarea").forEach(step => {

    if (step.value.trim()) {  });  // Collect steps

      recipeData.steps.push(step.value.trim());

    }  document.querySelectorAll("#steps textarea").forEach(step => {

  });

  // Schritte sammeln    if (step.value.trim()) {

  // Tipps sammeln

  document.querySelectorAll("#tips input").forEach(tip => {  document.querySelectorAll("#steps textarea").forEach(step => {      recipeData.steps.push(step.value.trim());

    if (tip.value.trim()) {

      recipeData.tips.push(tip.value.trim());    if (step.value.trim()) {    }

    }

  });      recipeData.steps.push(step.value.trim());  });



  try {    }

    // Hole existierende Rezepte oder erstelle neue Liste

    let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');  });  // Collect tips

    

    // Prüfe ob das Rezept bereits existiert  document.querySelectorAll("#tips input").forEach(tip => {

    const existingIndex = recipes.findIndex(r => r.name === recipeName);

    if (existingIndex >= 0) {  // Tipps sammeln    if (tip.value.trim()) {

      if (!confirm(`Ein Rezept mit dem Namen "${recipeName}" existiert bereits. Möchten Sie es überschreiben?`)) {

        return;  document.querySelectorAll("#tips input").forEach(tip => {      recipeData.tips.push(tip.value.trim());

      }

      recipes[existingIndex] = recipeData;    if (tip.value.trim()) {    }

    } else {

      recipes.push(recipeData);      recipeData.tips.push(tip.value.trim());  });

    }

        }

    // Speichere aktualisierte Rezeptliste

    localStorage.setItem('recipes', JSON.stringify(recipes));  });  try {

    alert("Rezept erfolgreich gespeichert!");

    loadRecipeList();    // Hole existierende Rezepte oder erstelle neue Liste

  } catch (error) {

    console.error('Fehler beim Speichern:', error);  try {    let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

    alert("Fehler beim Speichern des Rezepts: " + error.message);

  }    // Hole existierende Rezepte oder erstelle neue Liste    

}

    let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');    // Prüfe ob das Rezept bereits existiert

function loadRecipeList() {

  try {        const existingIndex = recipes.findIndex(r => r.name === recipeName);

    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

    const recipeList = document.getElementById("recipeList");    // Prüfe ob das Rezept bereits existiert    if (existingIndex >= 0) {

    recipeList.innerHTML = "";

        const existingIndex = recipes.findIndex(r => r.name === recipeName);      if (!confirm(`Ein Rezept mit dem Namen "${recipeName}" existiert bereits. Möchten Sie es überschreiben?`)) {

    if (recipes.length === 0) {

      const emptyMessage = document.createElement("div");    if (existingIndex >= 0) {        return;

      emptyMessage.className = "text-gray-500 text-center p-4";

      emptyMessage.textContent = "Keine Rezepte gespeichert";      if (!confirm(`Ein Rezept mit dem Namen "${recipeName}" existiert bereits. Möchten Sie es überschreiben?`)) {      }

      recipeList.appendChild(emptyMessage);

      return;        return;      recipes[existingIndex] = recipeData;

    }

          }    } else {

    recipes.sort((a, b) => a.name.localeCompare(b.name)).forEach(recipe => {

      const recipeDiv = document.createElement("div");      recipes[existingIndex] = recipeData;      recipes.push(recipeData);

      recipeDiv.className = "flex justify-between items-center p-2 bg-gray-50 rounded mb-2 hover:bg-gray-100";

          } else {    }

      const nameSpan = document.createElement("span");

      nameSpan.textContent = recipe.name;      recipes.push(recipeData);    

      nameSpan.className = "cursor-pointer hover:text-blue-600 flex-1";

      nameSpan.onclick = () => loadRecipe(recipe.id);    }    // Speichere aktualisierte Rezeptliste

      

      const deleteButton = document.createElement("button");        localStorage.setItem('recipes', JSON.stringify(recipes));

      deleteButton.innerHTML = "🗑️";

      deleteButton.className = "text-red-500 hover:text-red-700 ml-2";    // Speichere aktualisierte Rezeptliste    alert("Rezept erfolgreich gespeichert!");

      deleteButton.onclick = (e) => {

        e.stopPropagation();    localStorage.setItem('recipes', JSON.stringify(recipes));    loadRecipeList();

        deleteRecipe(recipe.id);

      };    alert("Rezept erfolgreich gespeichert!");  } catch (error) {

      

      recipeDiv.appendChild(nameSpan);    loadRecipeList();    console.error('Fehler beim Speichern:', error);

      recipeDiv.appendChild(deleteButton);

      recipeList.appendChild(recipeDiv);  } catch (error) {    alert("Fehler beim Speichern des Rezepts: " + error.message);

    });

  } catch (error) {    console.error('Fehler beim Speichern:', error);  }

    console.error('Fehler beim Laden der Rezeptliste:', error);

  }    alert("Fehler beim Speichern des Rezepts: " + error.message);}

}

  }

function loadRecipe(recipeId) {

  try {}// Exportiere die Vorschau als Bild (PNG)

    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

    const recipeData = recipes.find(r => r.id === recipeId);function exportImage() {

    

    if (!recipeData) {function loadRecipeList() {  const element = document.getElementById("preview");

      throw new Error('Rezept nicht gefunden');

    }  try {  if (window.domtoimage && typeof window.domtoimage.toPng === 'function') {

    

    // Grunddaten einfügen    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');    window.domtoimage.toPng(element, { bgcolor: '#fff' })

    document.getElementById("recipeName").value = recipeData.name;

    document.getElementById("difficulty").value = recipeData.difficulty;    const recipeList = document.getElementById("recipeList");      .then(function (dataUrl) {

    document.getElementById("prepTime").value = recipeData.prepTime;

    document.getElementById("cookTime").value = recipeData.cookTime;    recipeList.innerHTML = "";        const link = document.createElement('a');

    document.getElementById("previewImage").src = recipeData.imageData;

            link.download = `${document.getElementById("recipeName").value || "Rezept"}.png`;

    // Zutaten, Schritte und Tipps löschen

    document.getElementById("ingredients").innerHTML = "";    recipes.sort((a, b) => a.name.localeCompare(b.name)).forEach(recipe => {        link.href = dataUrl;

    document.getElementById("steps").innerHTML = "";

    document.getElementById("tips").innerHTML = "";      const recipeDiv = document.createElement("div");        link.click();

    

    // Zutaten hinzufügen      recipeDiv.className = "flex justify-between items-center p-2 bg-gray-50 rounded mb-2";      })

    recipeData.ingredients.forEach(ing => {

      addIngredient();            .catch(function (error) {

      const lastRow = document.querySelector("#ingredients .flex:last-child");

      lastRow.querySelector("input[type='number']").value = ing.menge;      const nameSpan = document.createElement("span");        alert('Bild-Export fehlgeschlagen: ' + (error && error.message ? error.message : error));

      lastRow.querySelector("select").value = ing.einheit;

      lastRow.querySelector("input[type='text']").value = ing.zutat;      nameSpan.textContent = recipe.name;        console.error('Bild-Export Fehler:', error);

    });

      nameSpan.className = "cursor-pointer hover:text-blue-600";      });

    // Schritte hinzufügen

    recipeData.steps.forEach(step => {      nameSpan.onclick = () => loadRecipe(recipe.id);  } else {

      addStep();

      const lastStep = document.querySelector("#steps textarea:last-child");          alert('Bild-Export nicht möglich: dom-to-image Bibliothek wurde nicht geladen.');

      lastStep.value = step;

    });      const deleteButton = document.createElement("button");  }



    // Tipps hinzufügen      deleteButton.innerHTML = "🗑️";}

    recipeData.tips.forEach(tip => {

      addTip();      deleteButton.className = "text-red-500 hover:text-red-700";let ingredientCount = 0, stepCount = 0, tipCount = 0;

      const lastTip = document.querySelector("#tips input:last-child");

      lastTip.value = tip;      deleteButton.onclick = () => deleteRecipe(recipe.id);

    });

      function addIngredient() {

    updatePreview();

  } catch (error) {      recipeDiv.appendChild(nameSpan);  ingredientCount++;

    console.error('Fehler beim Laden des Rezepts:', error);

    alert("Fehler beim Laden des Rezepts: " + error.message);      recipeDiv.appendChild(deleteButton);  const div = document.getElementById("ingredients");

  }

}      recipeList.appendChild(recipeDiv);  const row = document.createElement("div");



function deleteRecipe(recipeId) {    });  row.className = "flex gap-2 mb-2";

  try {

    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');  } catch (error) {  // Mengenangabe

    const recipe = recipes.find(r => r.id === recipeId);

        console.error('Fehler beim Laden der Rezeptliste:', error);  const menge = document.createElement("input");

    if (!recipe) {

      throw new Error('Rezept nicht gefunden');  }  menge.type = "number";

    }

}  menge.placeholder = "Menge";

    if (!confirm(`Möchten Sie das Rezept "${recipe.name}" wirklich löschen?`)) {

      return;  menge.className = "p-2 border rounded-lg";

    }

function loadRecipe(recipeId) {  menge.style.width = "95px";

    const updatedRecipes = recipes.filter(r => r.id !== recipeId);

    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));  try {  menge.oninput = updatePreview;

    loadRecipeList();

  } catch (error) {    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');  // Mengeneinheit

    console.error('Fehler beim Löschen:', error);

    alert("Fehler beim Löschen des Rezepts: " + error.message);    const recipeData = recipes.find(r => r.id === recipeId);  const einheit = document.createElement("select");

  }

}      einheit.className = "p-2 border rounded-lg w-24";



function addIngredient() {    if (!recipeData) {  ["EL","TL","Stück","L","ml","g","kg","Prise","Päckchen","Dose","Bund","Scheibe","Tasse"].forEach(e => {

  ingredientCount++;

  const div = document.getElementById("ingredients");      throw new Error('Rezept nicht gefunden');    const opt = document.createElement("option");

  const row = document.createElement("div");

  row.className = "flex gap-2 mb-2";    }    opt.value = e;

  // Mengenangabe

  const menge = document.createElement("input");        opt.text = e;

  menge.type = "number";

  menge.placeholder = "Menge";    // Grunddaten einfügen    einheit.appendChild(opt);

  menge.className = "p-2 border rounded-lg";

  menge.style.width = "95px";    document.getElementById("recipeName").value = recipeData.name;  });

  menge.oninput = updatePreview;

  // Mengeneinheit    document.getElementById("difficulty").value = recipeData.difficulty;  einheit.onchange = updatePreview;

  const einheit = document.createElement("select");

  einheit.className = "p-2 border rounded-lg w-24";    document.getElementById("prepTime").value = recipeData.prepTime;  // Zutat

  ["EL","TL","Stück","L","ml","g","kg","Prise","Päckchen","Dose","Bund","Scheibe","Tasse"].forEach(e => {

    const opt = document.createElement("option");    document.getElementById("cookTime").value = recipeData.cookTime;  const zutat = document.createElement("input");

    opt.value = e;

    opt.text = e;    document.getElementById("previewImage").src = recipeData.imageData;  zutat.type = "text";

    einheit.appendChild(opt);

  });  zutat.placeholder = `Zutat ${ingredientCount}`;

  einheit.onchange = updatePreview;

  // Zutat    // Zutaten, Schritte und Tipps löschen  zutat.className = "p-2 border rounded-lg flex-1";

  const zutat = document.createElement("input");

  zutat.type = "text";    document.getElementById("ingredients").innerHTML = "";  zutat.oninput = updatePreview;

  zutat.placeholder = `Zutat ${ingredientCount}`;

  zutat.className = "p-2 border rounded-lg flex-1";    document.getElementById("steps").innerHTML = "";  row.appendChild(menge);

  zutat.oninput = updatePreview;

  row.appendChild(menge);    document.getElementById("tips").innerHTML = "";  row.appendChild(einheit);

  row.appendChild(einheit);

  row.appendChild(zutat);      row.appendChild(zutat);

  div.appendChild(row);

}    // Zutaten hinzufügen  div.appendChild(row);



function addStep() {    recipeData.ingredients.forEach(ing => {}

  stepCount++;

  const div = document.getElementById("steps");      addIngredient();

  const textarea = document.createElement("textarea");

  textarea.placeholder = `Schritt ${stepCount}`;      const lastRow = document.querySelector("#ingredients .flex:last-child");function addStep() {

  textarea.className = "w-full p-2 border rounded-lg mb-2";

  textarea.oninput = updatePreview;      lastRow.querySelector("input[type='number']").value = ing.menge;  stepCount++;

  div.appendChild(textarea);

}      lastRow.querySelector("select").value = ing.einheit;  const div = document.getElementById("steps");



function addTip() {      lastRow.querySelector("input[type='text']").value = ing.zutat;  const textarea = document.createElement("textarea");

  tipCount++;

  const div = document.getElementById("tips");    });  textarea.placeholder = `Schritt ${stepCount}`;

  const input = document.createElement("input");

  input.type = "text";  textarea.className = "w-full p-2 border rounded-lg mb-2";

  input.placeholder = `Tipp ${tipCount}`;

  input.className = "w-full p-2 border rounded-lg mb-2";    // Schritte hinzufügen  textarea.oninput = updatePreview;

  input.oninput = updatePreview;

  div.appendChild(input);    recipeData.steps.forEach(step => {  div.appendChild(textarea);

}

      addStep();}

document.getElementById("imageUpload").addEventListener("change", function(evt) {

  const file = evt.target.files[0];      const lastStep = document.querySelector("#steps textarea:last-child");

  if (file) {

    const reader = new FileReader();      lastStep.value = step;function addTip() {

    reader.onload = e => document.getElementById("previewImage").src = e.target.result;

    reader.readAsDataURL(file);    });  tipCount++;

  }

});  const div = document.getElementById("tips");



function updatePreview() {    // Tipps hinzufügen  const input = document.createElement("input");

  document.getElementById("previewName").innerText = document.getElementById("recipeName").value || "Rezeptname";

    recipeData.tips.forEach(tip => {  input.type = "text";

  const difficulty = document.getElementById("difficulty").value;

  const stars = "★★★★★☆☆☆☆☆".slice(5 - difficulty, 10 - difficulty);      addTip();  input.placeholder = `Tipp ${tipCount}`;

  const prep = parseInt(document.getElementById("prepTime").value) || 0;

  const cook = parseInt(document.getElementById("cookTime").value) || 0;      const lastTip = document.querySelector("#tips input:last-child");  input.className = "w-full p-2 border rounded-lg mb-2";

  const total = prep + cook;

  document.getElementById("previewMeta").innerText =      lastTip.value = tip;  input.oninput = updatePreview;

    `Schwierigkeit: ${stars} | Gesamtzeit: ${total} Min. (${prep} Min. Vorbereitung, ${cook} Min. Kochen)`;

    });  div.appendChild(input);

  const ingList = document.getElementById("previewIngredients");

  ingList.innerHTML = "";}

  // Zutaten als Tabelle darstellen

  const rows = document.getElementById("ingredients").getElementsByClassName("flex");    updatePreview();

  if (rows.length > 0) {

    const table = document.createElement("table");  } catch (error) {document.getElementById("imageUpload").addEventListener("change", function(evt) {

    table.style.width = "100%";

    table.style.borderCollapse = "collapse";    console.error('Fehler beim Laden des Rezepts:', error);  const file = evt.target.files[0];

    table.innerHTML = `<colgroup>

      <col style='width:15%'>    alert("Fehler beim Laden des Rezepts: " + error.message);  if (file) {

      <col style='width:20%'>

      <col style='width:65%'>  }    const reader = new FileReader();

    </colgroup>

    <thead><tr>}    reader.onload = e => document.getElementById("previewImage").src = e.target.result;

      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Menge</th>

      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Einheit</th>    reader.readAsDataURL(file);

      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Zutat</th>

    </tr></thead><tbody></tbody>`;function deleteRecipe(recipeId) {  }

    const tbody = table.querySelector("tbody");

    for (let row of rows) {  try {});

      const menge = row.querySelector("input[type='number']")?.value;

      const einheit = row.querySelector("select")?.value;    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

      const zutat = row.querySelector("input[type='text']")?.value;

      if (menge && zutat) {    const recipe = recipes.find(r => r.id === recipeId);function updatePreview() {

        const tr = document.createElement("tr");

        tr.innerHTML = `<td style='padding:4px;'>${menge}</td><td style='padding:4px;'>${einheit}</td><td style='padding:4px;'>${zutat}</td>`;      document.getElementById("previewName").innerText = document.getElementById("recipeName").value || "Rezeptname";

        tbody.appendChild(tr);

      }    if (!recipe) {

    }

    ingList.appendChild(table);      throw new Error('Rezept nicht gefunden');  const difficulty = document.getElementById("difficulty").value;

  }

    }  const stars = "★★★★★☆☆☆☆☆".slice(5 - difficulty, 10 - difficulty);

  const stepList = document.getElementById("previewSteps");

  stepList.innerHTML = "";  const prep = parseInt(document.getElementById("prepTime").value) || 0;

  document.querySelectorAll("#steps textarea").forEach(input => {

    if (input.value.trim()) {    if (!confirm(`Möchten Sie das Rezept "${recipe.name}" wirklich löschen?`)) {  const cook = parseInt(document.getElementById("cookTime").value) || 0;

      const li = document.createElement("li");

      li.innerText = input.value;      return;  const total = prep + cook;

      stepList.appendChild(li);

    }    }  document.getElementById("previewMeta").innerText =

  });

    `Schwierigkeit: ${stars} | Gesamtzeit: ${total} Min. (${prep} Min. Vorbereitung, ${cook} Min. Kochen)`;

  const tipList = document.getElementById("previewTips");

  tipList.innerHTML = "";    const updatedRecipes = recipes.filter(r => r.id !== recipeId);

  document.querySelectorAll("#tips input").forEach(input => {

    if (input.value.trim()) {    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));  const ingList = document.getElementById("previewIngredients");

      const li = document.createElement("li");

      li.innerText = input.value;    loadRecipeList();  ingList.innerHTML = "";

      tipList.appendChild(li);

    }  } catch (error) {  // Zutaten als Tabelle darstellen

  });

}    console.error('Fehler beim Löschen:', error);  const rows = document.getElementById("ingredients").getElementsByClassName("flex");



// Exportiere die Vorschau als Bild (PNG)    alert("Fehler beim Löschen des Rezepts: " + error.message);  if (rows.length > 0) {

function exportImage() {

  const element = document.getElementById("preview");  }    const table = document.createElement("table");

  if (window.domtoimage && typeof window.domtoimage.toPng === 'function') {

    window.domtoimage.toPng(element, { bgcolor: '#fff' })}    table.style.width = "100%";

      .then(function (dataUrl) {

        const link = document.createElement('a');    table.style.borderCollapse = "collapse";

        link.download = `${document.getElementById("recipeName").value || "Rezept"}.png`;

        link.href = dataUrl;function addIngredient() {    table.innerHTML = `<colgroup>

        link.click();

      })  ingredientCount++;      <col style='width:15%'>

      .catch(function (error) {

        alert('Bild-Export fehlgeschlagen: ' + (error && error.message ? error.message : error));  const div = document.getElementById("ingredients");      <col style='width:20%'>

        console.error('Bild-Export Fehler:', error);

      });  const row = document.createElement("div");      <col style='width:65%'>

  } else {

    alert('Bild-Export nicht möglich: dom-to-image Bibliothek wurde nicht geladen.');  row.className = "flex gap-2 mb-2";    </colgroup>

  }

}  // Mengenangabe    <thead><tr>



// Lade die Rezeptliste beim Start  const menge = document.createElement("input");      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Menge</th>

document.addEventListener('DOMContentLoaded', () => {

  loadRecipeList();  menge.type = "number";      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Einheit</th>

  // Füge einen ersten Zutateneintrag hinzu

  addIngredient();  menge.placeholder = "Menge";      <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Zutat</th>

  // Füge einen ersten Schritt hinzu

  addStep();  menge.className = "p-2 border rounded-lg";    </tr></thead><tbody></tbody>`;

});
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