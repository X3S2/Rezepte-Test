let ingredientCount = 0, stepCount = 0, tipCount = 0;// Globale Variablen für die Zählerlet ingredientCount = 0, stepCount = 0, tipCount = 0;let ingredientCount = 0, stepCount = 0, tipCount = 0;// Recipe storage and management functions



// Funktion für ein neues Rezeptlet ingredientCount = 0;

function newRecipe() {

    if (document.getElementById("recipeName").value !== "") {let stepCount = 0;

        if (!confirm("Möchten Sie wirklich ein neues Rezept erstellen? Nicht gespeicherte Änderungen gehen verloren.")) {

            return;let tipCount = 0;

        }

    }// Rezeptverwaltungsfunktionenfunction saveRecipe() {

    

    // Formular zurücksetzen// Funktion für ein neues Rezept

    document.getElementById("recipeName").value = "";

    document.getElementById("difficulty").value = "3";function newRecipe() {function newRecipe() {

    document.getElementById("prepTime").value = "";

    document.getElementById("cookTime").value = "";    if (document.getElementById("recipeName").value !== "") {

    document.getElementById("previewImage").src = "assets/placeholder.png";

            if (!confirm("Möchten Sie wirklich ein neues Rezept erstellen? Nicht gespeicherte Änderungen gehen verloren.")) {  if (document.getElementById("recipeName").value !== "") {// Rezeptverwaltungsfunktionen  const recipeName = document.getElementById("recipeName").value;

    // Zutaten, Schritte und Tipps löschen

    document.getElementById("ingredients").innerHTML = "";            return;

    document.getElementById("steps").innerHTML = "";

    document.getElementById("tips").innerHTML = "";        }    if (!confirm("Möchten Sie wirklich ein neues Rezept erstellen? Nicht gespeicherte Änderungen gehen verloren.")) {

    

    // Zähler zurücksetzen    }

    ingredientCount = 0;

    stepCount = 0;          return;function saveRecipe() {  if (!recipeName) {

    tipCount = 0;

        // Formular zurücksetzen

    // Standardelemente hinzufügen

    addIngredient();    document.getElementById("recipeName").value = "";    }

    addStep();

        document.getElementById("difficulty").value = "3";

    // Vorschau aktualisieren

    updatePreview();    document.getElementById("prepTime").value = "";  }  const recipeName = document.getElementById("recipeName").value;    alert("Bitte geben Sie einen Namen für das Rezept ein.");

}

    document.getElementById("cookTime").value = "";

function addIngredient() {

    ingredientCount++;    document.getElementById("previewImage").src = "assets/placeholder.png";  

    const div = document.getElementById("ingredients");

    const row = document.createElement("div");    

    row.className = "flex gap-2 mb-2";

    // Mengenangabe    // Zutaten, Schritte und Tipps löschen  // Formular zurücksetzen  if (!recipeName) {    return;

    const menge = document.createElement("input");

    menge.type = "number";    document.getElementById("ingredients").innerHTML = "";

    menge.placeholder = "Menge";

    menge.className = "p-2 border rounded-lg";    document.getElementById("steps").innerHTML = "";  document.getElementById("recipeName").value = "";

    menge.style.width = "95px";

    menge.oninput = updatePreview;    document.getElementById("tips").innerHTML = "";

    // Mengeneinheit

    const einheit = document.createElement("select");      document.getElementById("difficulty").value = "3";    alert("Bitte geben Sie einen Namen für das Rezept ein.");  }

    einheit.className = "p-2 border rounded-lg w-24";

    ["EL","TL","Stück","L","ml","g","kg","Prise","Päckchen","Dose","Bund","Scheibe","Tasse"].forEach(e => {    // Zähler zurücksetzen

        const opt = document.createElement("option");

        opt.value = e;    ingredientCount = 0;  document.getElementById("prepTime").value = "";

        opt.text = e;

        einheit.appendChild(opt);    stepCount = 0;

    });

    einheit.onchange = updatePreview;    tipCount = 0;  document.getElementById("cookTime").value = "";    return;

    // Zutat

    const zutat = document.createElement("input");    

    zutat.type = "text";

    zutat.placeholder = `Zutat ${ingredientCount}`;    // Standardelemente hinzufügen  document.getElementById("previewImage").src = "assets/placeholder.png";

    zutat.className = "p-2 border rounded-lg flex-1";

    zutat.oninput = updatePreview;    addIngredient();

    row.appendChild(menge);

    row.appendChild(einheit);    addStep();    }  const recipeId = Date.now().toString(); // Eindeutige ID für das Rezept

    row.appendChild(zutat);

    div.appendChild(row);    

}

    // Vorschau aktualisieren  // Zutaten, Schritte und Tipps löschen

function addStep() {

    stepCount++;    updatePreview();

    const div = document.getElementById("steps");

    const textarea = document.createElement("textarea");}  document.getElementById("ingredients").innerHTML = "";  const recipeData = {

    textarea.placeholder = `Schritt ${stepCount}`;

    textarea.className = "w-full p-2 border rounded-lg mb-2";

    textarea.oninput = updatePreview;

    div.appendChild(textarea);// Funktion zum Hinzufügen einer Zutat  document.getElementById("steps").innerHTML = "";

}

function addIngredient() {

function addTip() {

    tipCount++;    ingredientCount++;  document.getElementById("tips").innerHTML = "";  const recipeId = Date.now().toString(); // Eindeutige ID für das Rezept    id: recipeId,

    const div = document.getElementById("tips");

    const input = document.createElement("input");    const div = document.getElementById("ingredients");

    input.type = "text";

    input.placeholder = `Tipp ${tipCount}`;    const row = document.createElement("div");  

    input.className = "w-full p-2 border rounded-lg mb-2";

    input.oninput = updatePreview;    row.className = "flex gap-2 mb-2";

    div.appendChild(input);

}      // Zähler zurücksetzen  const recipeData = {    name: recipeName,



function saveRecipe() {    // Mengenangabe

    const recipeName = document.getElementById("recipeName").value;

    if (!recipeName) {    const menge = document.createElement("input");  ingredientCount = 0;

        alert("Bitte geben Sie einen Namen für das Rezept ein.");

        return;    menge.type = "number";

    }

    menge.placeholder = "Menge";  stepCount = 0;    id: recipeId,    difficulty: document.getElementById("difficulty").value,

    const recipeData = {

        id: Date.now().toString(),    menge.className = "p-2 border rounded-lg";

        name: recipeName,

        difficulty: document.getElementById("difficulty").value,    menge.style.width = "95px";  tipCount = 0;

        prepTime: document.getElementById("prepTime").value,

        cookTime: document.getElementById("cookTime").value,    menge.oninput = updatePreview;

        ingredients: [],

        steps: [],          name: recipeName,    prepTime: document.getElementById("prepTime").value,

        tips: [],

        imageData: document.getElementById("previewImage").src,    // Mengeneinheit

        lastModified: new Date().toISOString()

    };    const einheit = document.createElement("select");  // Vorschau aktualisieren



    // Zutaten sammeln    einheit.className = "p-2 border rounded-lg w-24";

    document.querySelectorAll("#ingredients .flex").forEach(row => {

        const menge = row.querySelector("input[type='number']").value;    ["EL","TL","Stück","L","ml","g","kg","Prise","Päckchen","Dose","Bund","Scheibe","Tasse"].forEach(e => {  updatePreview();    difficulty: document.getElementById("difficulty").value,    cookTime: document.getElementById("cookTime").value,

        const einheit = row.querySelector("select").value;

        const zutat = row.querySelector("input[type='text']").value;        const opt = document.createElement("option");

        if (menge && zutat) {

            recipeData.ingredients.push({ menge, einheit, zutat });        opt.value = e;}

        }

    });        opt.text = e;



    // Schritte sammeln        einheit.appendChild(opt);    prepTime: document.getElementById("prepTime").value,    ingredients: [],

    document.querySelectorAll("#steps textarea").forEach(step => {

        if (step.value.trim()) {    });

            recipeData.steps.push(step.value.trim());

        }    einheit.onchange = updatePreview;function saveRecipe() {

    });

    

    // Tipps sammeln

    document.querySelectorAll("#tips input").forEach(tip => {    // Zutat  const recipeName = document.getElementById("recipeName").value;    cookTime: document.getElementById("cookTime").value,    steps: [],

        if (tip.value.trim()) {

            recipeData.tips.push(tip.value.trim());    const zutat = document.createElement("input");

        }

    });    zutat.type = "text";  if (!recipeName) {



    try {    zutat.placeholder = `Zutat ${ingredientCount}`;

        // Hole existierende Rezepte oder erstelle neue Liste

        let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');    zutat.className = "p-2 border rounded-lg flex-1";    alert("Bitte geben Sie einen Namen für das Rezept ein.");    ingredients: [],    tips: [],

        

        // Prüfe ob das Rezept bereits existiert    zutat.oninput = updatePreview;

        const existingIndex = recipes.findIndex(r => r.name === recipeName);

        if (existingIndex >= 0) {        return;

            if (!confirm(`Ein Rezept mit dem Namen "${recipeName}" existiert bereits. Möchten Sie es überschreiben?`)) {

                return;    row.appendChild(menge);

            }

            recipes[existingIndex] = recipeData;    row.appendChild(einheit);  }    steps: [],    imageData: document.getElementById("previewImage").src,

        } else {

            recipes.push(recipeData);    row.appendChild(zutat);

        }

            div.appendChild(row);

        // Speichere aktualisierte Rezeptliste

        localStorage.setItem('recipes', JSON.stringify(recipes));    updatePreview();

        alert("Rezept erfolgreich gespeichert!");

        loadRecipeList();}  const recipeId = Date.now().toString();    tips: [],    lastModified: new Date().toISOString()

    } catch (error) {

        console.error('Fehler beim Speichern:', error);

        alert("Fehler beim Speichern des Rezepts: " + error.message);

    }// Funktion zum Hinzufügen eines Schritts  const recipeData = {

}

function addStep() {

function loadRecipeList() {

    try {    stepCount++;    id: recipeId,    imageData: document.getElementById("previewImage").src,  };

        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

        const recipeList = document.getElementById("recipeList");    const div = document.getElementById("steps");

        recipeList.innerHTML = "";

            const textarea = document.createElement("textarea");    name: recipeName,

        if (recipes.length === 0) {

            const emptyMessage = document.createElement("div");    textarea.placeholder = `Schritt ${stepCount}`;

            emptyMessage.className = "text-gray-500 text-center p-4";

            emptyMessage.textContent = "Keine Rezepte gespeichert";    textarea.className = "w-full p-2 border rounded-lg mb-2";    difficulty: document.getElementById("difficulty").value,    lastModified: new Date().toISOString()

            recipeList.appendChild(emptyMessage);

            return;    textarea.oninput = updatePreview;

        }

            div.appendChild(textarea);    prepTime: document.getElementById("prepTime").value,

        recipes.sort((a, b) => a.name.localeCompare(b.name)).forEach(recipe => {

            const recipeDiv = document.createElement("div");    updatePreview();

            recipeDiv.className = "flex justify-between items-center p-2 bg-gray-50 rounded mb-2 hover:bg-gray-100";

            }    cookTime: document.getElementById("cookTime").value,  };  // Collect ingredients

            const nameSpan = document.createElement("span");

            nameSpan.textContent = recipe.name;

            nameSpan.className = "cursor-pointer hover:text-blue-600 flex-1";

            nameSpan.onclick = () => loadRecipe(recipe.id);// Funktion zum Hinzufügen eines Tipps    ingredients: [],

            

            const deleteButton = document.createElement("button");function addTip() {

            deleteButton.innerHTML = "🗑️";

            deleteButton.className = "text-red-500 hover:text-red-700 ml-2";    tipCount++;    steps: [],  document.querySelectorAll("#ingredients .flex").forEach(row => {

            deleteButton.onclick = (e) => {

                e.stopPropagation();    const div = document.getElementById("tips");

                deleteRecipe(recipe.id);

            };    const input = document.createElement("input");    tips: [],

            

            recipeDiv.appendChild(nameSpan);    input.type = "text";

            recipeDiv.appendChild(deleteButton);

            recipeList.appendChild(recipeDiv);    input.placeholder = `Tipp ${tipCount}`;    imageData: document.getElementById("previewImage").src,  // Zutaten sammeln    const menge = row.querySelector("input[type='number']").value;

        });

    } catch (error) {    input.className = "w-full p-2 border rounded-lg mb-2";

        console.error('Fehler beim Laden der Rezeptliste:', error);

    }    input.oninput = updatePreview;    lastModified: new Date().toISOString()

}

    div.appendChild(input);

function loadRecipe(recipeId) {

    try {    updatePreview();  };  document.querySelectorAll("#ingredients .flex").forEach(row => {    const einheit = row.querySelector("select").value;

        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

        const recipeData = recipes.find(r => r.id === recipeId);}

        

        if (!recipeData) {

            throw new Error('Rezept nicht gefunden');

        }// Funktion zum Speichern eines Rezepts

        

        // Grunddaten einfügenfunction saveRecipe() {  // Zutaten sammeln    const menge = row.querySelector("input[type='number']").value;    const zutat = row.querySelector("input[type='text']").value;

        document.getElementById("recipeName").value = recipeData.name;

        document.getElementById("difficulty").value = recipeData.difficulty;    const recipeName = document.getElementById("recipeName").value;

        document.getElementById("prepTime").value = recipeData.prepTime;

        document.getElementById("cookTime").value = recipeData.cookTime;    if (!recipeName) {  document.querySelectorAll("#ingredients .flex").forEach(row => {

        document.getElementById("previewImage").src = recipeData.imageData;

        alert("Bitte geben Sie einen Namen für das Rezept ein.");

        // Zutaten, Schritte und Tipps löschen

        document.getElementById("ingredients").innerHTML = "";        return;    const menge = row.querySelector("input[type='number']").value;    const einheit = row.querySelector("select").value;    if (menge && zutat) {

        document.getElementById("steps").innerHTML = "";

        document.getElementById("tips").innerHTML = "";    }

        

        // Zähler zurücksetzen    const einheit = row.querySelector("select").value;

        ingredientCount = 0;

        stepCount = 0;    const recipeData = {

        tipCount = 0;

                id: Date.now().toString(),    const zutat = row.querySelector("input[type='text']").value;    const zutat = row.querySelector("input[type='text']").value;      recipeData.ingredients.push({ menge, einheit, zutat });

        // Zutaten hinzufügen

        recipeData.ingredients.forEach(ing => {        name: recipeName,

            addIngredient();

            const lastRow = document.querySelector("#ingredients .flex:last-child");        difficulty: document.getElementById("difficulty").value,    if (menge && zutat) {

            lastRow.querySelector("input[type='number']").value = ing.menge;

            lastRow.querySelector("select").value = ing.einheit;        prepTime: document.getElementById("prepTime").value,

            lastRow.querySelector("input[type='text']").value = ing.zutat;

        });        cookTime: document.getElementById("cookTime").value,      recipeData.ingredients.push({ menge, einheit, zutat });    if (menge && zutat) {    }



        // Schritte hinzufügen        ingredients: [],

        recipeData.steps.forEach(step => {

            addStep();        steps: [],    }

            const lastStep = document.querySelector("#steps textarea:last-child");

            lastStep.value = step;        tips: [],

        });

        imageData: document.getElementById("previewImage").src,  });      recipeData.ingredients.push({ menge, einheit, zutat });  });

        // Tipps hinzufügen

        recipeData.tips.forEach(tip => {        lastModified: new Date().toISOString()

            addTip();

            const lastTip = document.querySelector("#tips input:last-child");    };

            lastTip.value = tip;

        });



        updatePreview();    // Zutaten sammeln  // Schritte sammeln    }

    } catch (error) {

        console.error('Fehler beim Laden des Rezepts:', error);    document.querySelectorAll("#ingredients .flex").forEach(row => {

        alert("Fehler beim Laden des Rezepts: " + error.message);

    }        const menge = row.querySelector("input[type='number']").value;  document.querySelectorAll("#steps textarea").forEach(step => {

}

        const einheit = row.querySelector("select").value;

function deleteRecipe(recipeId) {

    try {        const zutat = row.querySelector("input[type='text']").value;    if (step.value.trim()) {  });  // Collect steps

        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

        const recipe = recipes.find(r => r.id === recipeId);        if (menge && zutat) {

        

        if (!recipe) {            recipeData.ingredients.push({ menge, einheit, zutat });      recipeData.steps.push(step.value.trim());

            throw new Error('Rezept nicht gefunden');

        }        }



        if (!confirm(`Möchten Sie das Rezept "${recipe.name}" wirklich löschen?`)) {    });    }  document.querySelectorAll("#steps textarea").forEach(step => {

            return;

        }



        const updatedRecipes = recipes.filter(r => r.id !== recipeId);    // Schritte sammeln  });

        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

        loadRecipeList();    document.querySelectorAll("#steps textarea").forEach(step => {

    } catch (error) {

        console.error('Fehler beim Löschen:', error);        if (step.value.trim()) {  // Schritte sammeln    if (step.value.trim()) {

        alert("Fehler beim Löschen des Rezepts: " + error.message);

    }            recipeData.steps.push(step.value.trim());

}

        }  // Tipps sammeln

// Funktion zum Aktualisieren der Vorschau

function updatePreview() {    });

    document.getElementById("previewName").innerText = document.getElementById("recipeName").value || "Rezeptname";

  document.querySelectorAll("#tips input").forEach(tip => {  document.querySelectorAll("#steps textarea").forEach(step => {      recipeData.steps.push(step.value.trim());

    const difficulty = document.getElementById("difficulty").value;

    const stars = "★★★★★☆☆☆☆☆".slice(5 - difficulty, 10 - difficulty);    // Tipps sammeln

    const prep = parseInt(document.getElementById("prepTime").value) || 0;

    const cook = parseInt(document.getElementById("cookTime").value) || 0;    document.querySelectorAll("#tips input").forEach(tip => {    if (tip.value.trim()) {

    const total = prep + cook;

    document.getElementById("previewMeta").innerText =        if (tip.value.trim()) {

        `Schwierigkeit: ${stars} | Gesamtzeit: ${total} Min. (${prep} Min. Vorbereitung, ${cook} Min. Kochen)`;

            recipeData.tips.push(tip.value.trim());      recipeData.tips.push(tip.value.trim());    if (step.value.trim()) {    }

    const ingList = document.getElementById("previewIngredients");

    ingList.innerHTML = "";        }

    // Zutaten als Tabelle darstellen

    const rows = document.getElementById("ingredients").getElementsByClassName("flex");    });    }

    if (rows.length > 0) {

        const table = document.createElement("table");

        table.style.width = "100%";

        table.style.borderCollapse = "collapse";    try {  });      recipeData.steps.push(step.value.trim());  });

        table.innerHTML = `<colgroup>

            <col style='width:15%'>        // Hole existierende Rezepte oder erstelle neue Liste

            <col style='width:20%'>

            <col style='width:65%'>        let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

        </colgroup>

        <thead><tr>        

            <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Menge</th>

            <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Einheit</th>        // Prüfe ob das Rezept bereits existiert  try {    }

            <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Zutat</th>

        </tr></thead><tbody></tbody>`;        const existingIndex = recipes.findIndex(r => r.name === recipeName);

        const tbody = table.querySelector("tbody");

        for (let row of rows) {        if (existingIndex >= 0) {    // Hole existierende Rezepte oder erstelle neue Liste

            const menge = row.querySelector("input[type='number']")?.value;

            const einheit = row.querySelector("select")?.value;            if (!confirm(`Ein Rezept mit dem Namen "${recipeName}" existiert bereits. Möchten Sie es überschreiben?`)) {

            const zutat = row.querySelector("input[type='text']")?.value;

            if (menge && zutat) {                return;    let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');  });  // Collect tips

                const tr = document.createElement("tr");

                tr.innerHTML = `<td style='padding:4px;'>${menge}</td><td style='padding:4px;'>${einheit}</td><td style='padding:4px;'>${zutat}</td>`;            }

                tbody.appendChild(tr);

            }            recipes[existingIndex] = recipeData;    

        }

        ingList.appendChild(table);        } else {

    }

            recipes.push(recipeData);    // Prüfe ob das Rezept bereits existiert  document.querySelectorAll("#tips input").forEach(tip => {

    const stepList = document.getElementById("previewSteps");

    stepList.innerHTML = "";        }

    document.querySelectorAll("#steps textarea").forEach(input => {

        if (input.value.trim()) {            const existingIndex = recipes.findIndex(r => r.name === recipeName);

            const li = document.createElement("li");

            li.innerText = input.value;        // Speichere aktualisierte Rezeptliste

            stepList.appendChild(li);

        }        localStorage.setItem('recipes', JSON.stringify(recipes));    if (existingIndex >= 0) {  // Tipps sammeln    if (tip.value.trim()) {

    });

        alert("Rezept erfolgreich gespeichert!");

    const tipList = document.getElementById("previewTips");

    tipList.innerHTML = "";        loadRecipeList();      if (!confirm(`Ein Rezept mit dem Namen "${recipeName}" existiert bereits. Möchten Sie es überschreiben?`)) {

    document.querySelectorAll("#tips input").forEach(input => {

        if (input.value.trim()) {    } catch (error) {

            const li = document.createElement("li");

            li.innerText = input.value;        console.error('Fehler beim Speichern:', error);        return;  document.querySelectorAll("#tips input").forEach(tip => {      recipeData.tips.push(tip.value.trim());

            tipList.appendChild(li);

        }        alert("Fehler beim Speichern des Rezepts: " + error.message);

    });

}    }      }



// Bildupload-Handler}

document.getElementById("imageUpload").addEventListener("change", function(evt) {

    const file = evt.target.files[0];      recipes[existingIndex] = recipeData;    if (tip.value.trim()) {    }

    if (file) {

        const reader = new FileReader();// Funktion zum Laden der Rezeptliste

        reader.onload = e => {

            document.getElementById("previewImage").src = e.target.result;function loadRecipeList() {    } else {

            updatePreview();

        };    try {

        reader.readAsDataURL(file);

    }        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');      recipes.push(recipeData);      recipeData.tips.push(tip.value.trim());  });

});

        const recipeList = document.getElementById("recipeList");

// Export als Bild

function exportImage() {        recipeList.innerHTML = "";    }

    const element = document.getElementById("preview");

    if (window.domtoimage && typeof window.domtoimage.toPng === 'function') {        

        window.domtoimage.toPng(element, { bgcolor: '#fff' })

            .then(function (dataUrl) {        if (recipes.length === 0) {        }

                const link = document.createElement('a');

                link.download = `${document.getElementById("recipeName").value || "Rezept"}.png`;            const emptyMessage = document.createElement("div");

                link.href = dataUrl;

                link.click();            emptyMessage.className = "text-gray-500 text-center p-4";    // Speichere aktualisierte Rezeptliste

            })

            .catch(function (error) {            emptyMessage.textContent = "Keine Rezepte gespeichert";

                alert('Bild-Export fehlgeschlagen: ' + (error && error.message ? error.message : error));

                console.error('Bild-Export Fehler:', error);            recipeList.appendChild(emptyMessage);    localStorage.setItem('recipes', JSON.stringify(recipes));  });  try {

            });

    } else {            return;

        alert('Bild-Export nicht möglich: dom-to-image Bibliothek wurde nicht geladen.');

    }        }    alert("Rezept erfolgreich gespeichert!");

}

        

// Initialisierung beim Laden der Seite

document.addEventListener('DOMContentLoaded', () => {        recipes.sort((a, b) => a.name.localeCompare(b.name)).forEach(recipe => {    loadRecipeList();    // Hole existierende Rezepte oder erstelle neue Liste

    loadRecipeList();

    // Füge einen ersten Zutateneintrag hinzu            const recipeDiv = document.createElement("div");

    addIngredient();

    // Füge einen ersten Schritt hinzu            recipeDiv.className = "flex justify-between items-center p-2 bg-gray-50 rounded mb-2 hover:bg-gray-100";  } catch (error) {

    addStep();

});            

            const nameSpan = document.createElement("span");    console.error('Fehler beim Speichern:', error);  try {    let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

            nameSpan.textContent = recipe.name;

            nameSpan.className = "cursor-pointer hover:text-blue-600 flex-1";    alert("Fehler beim Speichern des Rezepts: " + error.message);

            nameSpan.onclick = () => loadRecipe(recipe.id);

              }    // Hole existierende Rezepte oder erstelle neue Liste    

            const deleteButton = document.createElement("button");

            deleteButton.innerHTML = "🗑️";}

            deleteButton.className = "text-red-500 hover:text-red-700 ml-2";

            deleteButton.onclick = (e) => {    let recipes = JSON.parse(localStorage.getItem('recipes') || '[]');    // Prüfe ob das Rezept bereits existiert

                e.stopPropagation();

                deleteRecipe(recipe.id);function loadRecipeList() {

            };

              try {        const existingIndex = recipes.findIndex(r => r.name === recipeName);

            recipeDiv.appendChild(nameSpan);

            recipeDiv.appendChild(deleteButton);    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

            recipeList.appendChild(recipeDiv);

        });    const recipeList = document.getElementById("recipeList");    // Prüfe ob das Rezept bereits existiert    if (existingIndex >= 0) {

    } catch (error) {

        console.error('Fehler beim Laden der Rezeptliste:', error);    recipeList.innerHTML = "";

    }

}        const existingIndex = recipes.findIndex(r => r.name === recipeName);      if (!confirm(`Ein Rezept mit dem Namen "${recipeName}" existiert bereits. Möchten Sie es überschreiben?`)) {



// Funktion zum Laden eines Rezepts    if (recipes.length === 0) {

function loadRecipe(recipeId) {

    try {      const emptyMessage = document.createElement("div");    if (existingIndex >= 0) {        return;

        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

        const recipeData = recipes.find(r => r.id === recipeId);      emptyMessage.className = "text-gray-500 text-center p-4";

        

        if (!recipeData) {      emptyMessage.textContent = "Keine Rezepte gespeichert";      if (!confirm(`Ein Rezept mit dem Namen "${recipeName}" existiert bereits. Möchten Sie es überschreiben?`)) {      }

            throw new Error('Rezept nicht gefunden');

        }      recipeList.appendChild(emptyMessage);

        

        // Grunddaten einfügen      return;        return;      recipes[existingIndex] = recipeData;

        document.getElementById("recipeName").value = recipeData.name;

        document.getElementById("difficulty").value = recipeData.difficulty;    }

        document.getElementById("prepTime").value = recipeData.prepTime;

        document.getElementById("cookTime").value = recipeData.cookTime;          }    } else {

        document.getElementById("previewImage").src = recipeData.imageData;

    recipes.sort((a, b) => a.name.localeCompare(b.name)).forEach(recipe => {

        // Zutaten, Schritte und Tipps löschen

        document.getElementById("ingredients").innerHTML = "";      const recipeDiv = document.createElement("div");      recipes[existingIndex] = recipeData;      recipes.push(recipeData);

        document.getElementById("steps").innerHTML = "";

        document.getElementById("tips").innerHTML = "";      recipeDiv.className = "flex justify-between items-center p-2 bg-gray-50 rounded mb-2 hover:bg-gray-100";

        

        // Zähler zurücksetzen          } else {    }

        ingredientCount = 0;

        stepCount = 0;      const nameSpan = document.createElement("span");

        tipCount = 0;

              nameSpan.textContent = recipe.name;      recipes.push(recipeData);    

        // Zutaten hinzufügen

        recipeData.ingredients.forEach(ing => {      nameSpan.className = "cursor-pointer hover:text-blue-600 flex-1";

            addIngredient();

            const lastRow = document.querySelector("#ingredients .flex:last-child");      nameSpan.onclick = () => loadRecipe(recipe.id);    }    // Speichere aktualisierte Rezeptliste

            lastRow.querySelector("input[type='number']").value = ing.menge;

            lastRow.querySelector("select").value = ing.einheit;      

            lastRow.querySelector("input[type='text']").value = ing.zutat;

        });      const deleteButton = document.createElement("button");        localStorage.setItem('recipes', JSON.stringify(recipes));



        // Schritte hinzufügen      deleteButton.innerHTML = "🗑️";

        recipeData.steps.forEach(step => {

            addStep();      deleteButton.className = "text-red-500 hover:text-red-700 ml-2";    // Speichere aktualisierte Rezeptliste    alert("Rezept erfolgreich gespeichert!");

            const lastStep = document.querySelector("#steps textarea:last-child");

            lastStep.value = step;      deleteButton.onclick = (e) => {

        });

        e.stopPropagation();    localStorage.setItem('recipes', JSON.stringify(recipes));    loadRecipeList();

        // Tipps hinzufügen

        recipeData.tips.forEach(tip => {        deleteRecipe(recipe.id);

            addTip();

            const lastTip = document.querySelector("#tips input:last-child");      };    alert("Rezept erfolgreich gespeichert!");  } catch (error) {

            lastTip.value = tip;

        });      



        updatePreview();      recipeDiv.appendChild(nameSpan);    loadRecipeList();    console.error('Fehler beim Speichern:', error);

    } catch (error) {

        console.error('Fehler beim Laden des Rezepts:', error);      recipeDiv.appendChild(deleteButton);

        alert("Fehler beim Laden des Rezepts: " + error.message);

    }      recipeList.appendChild(recipeDiv);  } catch (error) {    alert("Fehler beim Speichern des Rezepts: " + error.message);

}

    });

// Funktion zum Löschen eines Rezepts

function deleteRecipe(recipeId) {  } catch (error) {    console.error('Fehler beim Speichern:', error);  }

    try {

        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');    console.error('Fehler beim Laden der Rezeptliste:', error);

        const recipe = recipes.find(r => r.id === recipeId);

          }    alert("Fehler beim Speichern des Rezepts: " + error.message);}

        if (!recipe) {

            throw new Error('Rezept nicht gefunden');}

        }

  }

        if (!confirm(`Möchten Sie das Rezept "${recipe.name}" wirklich löschen?`)) {

            return;function loadRecipe(recipeId) {

        }

  try {}// Exportiere die Vorschau als Bild (PNG)

        const updatedRecipes = recipes.filter(r => r.id !== recipeId);

        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

        loadRecipeList();

    } catch (error) {    const recipeData = recipes.find(r => r.id === recipeId);function exportImage() {

        console.error('Fehler beim Löschen:', error);

        alert("Fehler beim Löschen des Rezepts: " + error.message);    

    }

}    if (!recipeData) {function loadRecipeList() {  const element = document.getElementById("preview");



// Funktion zum Aktualisieren der Vorschau      throw new Error('Rezept nicht gefunden');

function updatePreview() {

    document.getElementById("previewName").innerText = document.getElementById("recipeName").value || "Rezeptname";    }  try {  if (window.domtoimage && typeof window.domtoimage.toPng === 'function') {



    const difficulty = document.getElementById("difficulty").value;    

    const stars = "★★★★★☆☆☆☆☆".slice(5 - difficulty, 10 - difficulty);

    const prep = parseInt(document.getElementById("prepTime").value) || 0;    // Grunddaten einfügen    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');    window.domtoimage.toPng(element, { bgcolor: '#fff' })

    const cook = parseInt(document.getElementById("cookTime").value) || 0;

    const total = prep + cook;    document.getElementById("recipeName").value = recipeData.name;

    document.getElementById("previewMeta").innerText =

        `Schwierigkeit: ${stars} | Gesamtzeit: ${total} Min. (${prep} Min. Vorbereitung, ${cook} Min. Kochen)`;    document.getElementById("difficulty").value = recipeData.difficulty;    const recipeList = document.getElementById("recipeList");      .then(function (dataUrl) {



    const ingList = document.getElementById("previewIngredients");    document.getElementById("prepTime").value = recipeData.prepTime;

    ingList.innerHTML = "";

    // Zutaten als Tabelle darstellen    document.getElementById("cookTime").value = recipeData.cookTime;    recipeList.innerHTML = "";        const link = document.createElement('a');

    const rows = document.getElementById("ingredients").getElementsByClassName("flex");

    if (rows.length > 0) {    document.getElementById("previewImage").src = recipeData.imageData;

        const table = document.createElement("table");

        table.style.width = "100%";            link.download = `${document.getElementById("recipeName").value || "Rezept"}.png`;

        table.style.borderCollapse = "collapse";

        table.innerHTML = `<colgroup>    // Zutaten, Schritte und Tipps löschen

            <col style='width:15%'>

            <col style='width:20%'>    document.getElementById("ingredients").innerHTML = "";    recipes.sort((a, b) => a.name.localeCompare(b.name)).forEach(recipe => {        link.href = dataUrl;

            <col style='width:65%'>

        </colgroup>    document.getElementById("steps").innerHTML = "";

        <thead><tr>

            <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Menge</th>    document.getElementById("tips").innerHTML = "";      const recipeDiv = document.createElement("div");        link.click();

            <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Einheit</th>

            <th style='text-align:left; padding:4px; border-bottom:1px solid #ccc;'>Zutat</th>    

        </tr></thead><tbody></tbody>`;

        const tbody = table.querySelector("tbody");    // Zutaten hinzufügen      recipeDiv.className = "flex justify-between items-center p-2 bg-gray-50 rounded mb-2";      })

        for (let row of rows) {

            const menge = row.querySelector("input[type='number']")?.value;    recipeData.ingredients.forEach(ing => {

            const einheit = row.querySelector("select")?.value;

            const zutat = row.querySelector("input[type='text']")?.value;      addIngredient();            .catch(function (error) {

            if (menge && zutat) {

                const tr = document.createElement("tr");      const lastRow = document.querySelector("#ingredients .flex:last-child");

                tr.innerHTML = `<td style='padding:4px;'>${menge}</td><td style='padding:4px;'>${einheit}</td><td style='padding:4px;'>${zutat}</td>`;

                tbody.appendChild(tr);      lastRow.querySelector("input[type='number']").value = ing.menge;      const nameSpan = document.createElement("span");        alert('Bild-Export fehlgeschlagen: ' + (error && error.message ? error.message : error));

            }

        }      lastRow.querySelector("select").value = ing.einheit;

        ingList.appendChild(table);

    }      lastRow.querySelector("input[type='text']").value = ing.zutat;      nameSpan.textContent = recipe.name;        console.error('Bild-Export Fehler:', error);



    const stepList = document.getElementById("previewSteps");    });

    stepList.innerHTML = "";

    document.querySelectorAll("#steps textarea").forEach(input => {      nameSpan.className = "cursor-pointer hover:text-blue-600";      });

        if (input.value.trim()) {

            const li = document.createElement("li");    // Schritte hinzufügen

            li.innerText = input.value;

            stepList.appendChild(li);    recipeData.steps.forEach(step => {      nameSpan.onclick = () => loadRecipe(recipe.id);  } else {

        }

    });      addStep();



    const tipList = document.getElementById("previewTips");      const lastStep = document.querySelector("#steps textarea:last-child");          alert('Bild-Export nicht möglich: dom-to-image Bibliothek wurde nicht geladen.');

    tipList.innerHTML = "";

    document.querySelectorAll("#tips input").forEach(input => {      lastStep.value = step;

        if (input.value.trim()) {

            const li = document.createElement("li");    });      const deleteButton = document.createElement("button");  }

            li.innerText = input.value;

            tipList.appendChild(li);

        }

    });    // Tipps hinzufügen      deleteButton.innerHTML = "🗑️";}

}

    recipeData.tips.forEach(tip => {

// Bildupload-Handler

document.getElementById("imageUpload").addEventListener("change", function(evt) {      addTip();      deleteButton.className = "text-red-500 hover:text-red-700";let ingredientCount = 0, stepCount = 0, tipCount = 0;

    const file = evt.target.files[0];

    if (file) {      const lastTip = document.querySelector("#tips input:last-child");

        const reader = new FileReader();

        reader.onload = e => {      lastTip.value = tip;      deleteButton.onclick = () => deleteRecipe(recipe.id);

            document.getElementById("previewImage").src = e.target.result;

            updatePreview();    });

        };

        reader.readAsDataURL(file);      function addIngredient() {

    }

});    updatePreview();



// Export als Bild  } catch (error) {      recipeDiv.appendChild(nameSpan);  ingredientCount++;

function exportImage() {

    const element = document.getElementById("preview");    console.error('Fehler beim Laden des Rezepts:', error);

    if (window.domtoimage && typeof window.domtoimage.toPng === 'function') {

        window.domtoimage.toPng(element, { bgcolor: '#fff' })    alert("Fehler beim Laden des Rezepts: " + error.message);      recipeDiv.appendChild(deleteButton);  const div = document.getElementById("ingredients");

            .then(function (dataUrl) {

                const link = document.createElement('a');  }

                link.download = `${document.getElementById("recipeName").value || "Rezept"}.png`;

                link.href = dataUrl;}      recipeList.appendChild(recipeDiv);  const row = document.createElement("div");

                link.click();

            })

            .catch(function (error) {

                alert('Bild-Export fehlgeschlagen: ' + (error && error.message ? error.message : error));function deleteRecipe(recipeId) {    });  row.className = "flex gap-2 mb-2";

                console.error('Bild-Export Fehler:', error);

            });  try {

    } else {

        alert('Bild-Export nicht möglich: dom-to-image Bibliothek wurde nicht geladen.');    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');  } catch (error) {  // Mengenangabe

    }

}    const recipe = recipes.find(r => r.id === recipeId);



// Initialisierung beim Laden der Seite        console.error('Fehler beim Laden der Rezeptliste:', error);  const menge = document.createElement("input");

document.addEventListener('DOMContentLoaded', () => {

    loadRecipeList();    if (!recipe) {

    // Füge einen ersten Zutateneintrag hinzu

    addIngredient();      throw new Error('Rezept nicht gefunden');  }  menge.type = "number";

    // Füge einen ersten Schritt hinzu

    addStep();    }

});
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