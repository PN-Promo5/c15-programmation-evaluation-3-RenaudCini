/*Exercice1 .2*/
/*Créez un tableau à deux dimensions contenant des informations */

let cinema_film = [

  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", 2019, "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", 2018, "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", 2018, "2h30", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", 2018, "1h06", "vostfr"]
]


/*Exercice1*/
function poster() {

  let br = document.createElement("br")
  /*displays the title*/
  let h1 = document.createElement("h1")
  let div_poster = document.createElement("div")
  document.body.appendChild(div_poster)
  h1.textContent = "Cinéma le Dauphin"
  div_poster.appendChild(h1)

  /*displays the paragraph*/
  br = document.createElement("br")
  div_poster.appendChild(br)
  let p = document.createElement("p")
  p.textContent = "Une salle de cinéma grand confort, un restaurant et une  sélection de vins de qualité. Des avant premières, des des ciné-goûters, de 11h30 à 23h du mardi audimanche (jusqu’à minuit le vendredi et le samedi)."
  div_poster.appendChild(p)

  /*displays the button*/
  br = document.createElement("br")
  div_poster.appendChild(br)

  let button = document.createElement("button")
  button.type = "button"
  button.textContent = "Voir les films à l’affiche cette semaine"
  div_poster.appendChild(button)

  button.addEventListener("click", function() {
    div_poster.hidden = "true"
    generate_table_html(cinema_film)
  }, false);



}


/*Exercice1 .3*/
/*1.3/ Créez une fonction prenant en paramètre un tableau à deux dimensions. Cette fonction doit
créer et retourner une table HTML construite à partir des données contenues dans le tableau
passé en paramètre. Notez que le 1er tableau contenu dans le tableau à deux dimensions passé en
paramètre doit correspondre à l’en-tête de la table HTML retournée.*/


function generate_table_html(array) {

/*creation table*/
  let table = document.createElement("table")

  document.body.appendChild(table);
  let tr = document.createElement("tr");
  let i = 0;


/*creation header*/
  let on_your_mind = ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"]
  let thead = document.createElement("thead")
  table.appendChild(thead)
  thead.appendChild(tr)
  let th = document.createElement("th")
  i = 0;
  while (i < on_your_mind.length) {
    th = document.createElement("th")
    th.textContent = on_your_mind[i]
    tr.appendChild(th)
    i++;
  }

/*creation tbody*/
  let tbody = document.createElement("tbody")
  table.appendChild(tbody)
  tr = document.createElement("tr");
  tbody.appendChild(tr)
  let td = document.createElement("td")
  tr.appendChild(td)

  i = 0
  let current_element = []
  let td_textContent = []
  while (i < array.length) {
    current_element = array[i]
    let j = 0
    tr = document.createElement("tr");
    tbody.appendChild(tr)

/*data entry*/
    while (j < current_element.length) {
      td_textContent = current_element[j]
      td = document.createElement("td")
      td.textContent = td_textContent
      tr.appendChild(td)
      j++;
    }
    i++;
  }
  return table
}

/*Exercice1 .4*/
/*1.3/ Créez une fonction prenant en paramètre un tableau à deux dimensions. Cette fonction doit
créer et retourner une table HTML construite à partir des données contenues dans le tableau
passé en paramètre. Notez que le 1er tableau contenu dans le tableau à deux dimensions passé en
paramètre doit correspondre à l’en-tête de la table HTML retournée.*/


/*EXERCICE 2 */

/*EXERCICE 2 .1 */

let substance = [
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
  ["acide acétique",17,118],
  ["acide nitrique",-41,86],
  ["acide sulfurique",10,290],
  ["alcool éthylique",-114,78],
  ["aluminium", 660,2450]
]
/*EXERCICE 2 .2 */

calcul_temperature(substance, 300)

function calcul_temperature(array, temperature) {
  let current_element
  let stock_element = []
  let temperature_low
  let j = 0

  for (let i = 0; i < array.length; i++) {
    current_element = array[i]
    j = 0
    while (j < current_element.length) {

      if (i > 0 && j == 2 && current_element[2]<temperature) {
          temperature_low = current_element[0]

      }
      j++;
    }
  }
  return temperature_low

}
