const url           = 'https://api.thedogapi.com/v1/images/search?limit=10';
const url_favorites =  'https://api.thedogapi.com/v1/favourites?&api_key=587854b5-0c8c-4f86-8091-d2905597a5ab';

/*
-------------------------------------------------------------------------------
Sección Galería
-------------------------------------------------------------------------------
*/
async function getDog() {
  const res = await fetch(url);
  const data = await res.json();

  const img01 = document.getElementById('img01');
  const img02 = document.getElementById('img02');
  const img03 = document.getElementById('img03');
  const img04 = document.getElementById('img04');
  const img05 = document.getElementById('img05');
  const img06 = document.getElementById('img06');
  const img07 = document.getElementById('img07');
  const img08 = document.getElementById('img08');
  const img09 = document.getElementById('img09');
  const img10 = document.getElementById('img10');
  img01.src = data[0].url;
  img02.src = data[1].url;
  img03.src = data[2].url;
  img04.src = data[3].url;
  img05.src = data[4].url;
  img06.src = data[5].url;
  img07.src = data[6].url;
  img08.src = data[7].url;
  img09.src = data[8].url;
  img10.src = data[9].url;

  btn01.onclick = () => saveFavorites(data[0].id);
  btn02.onclick = () => saveFavorites(data[1].id);
  btn03.onclick = () => saveFavorites(data[2].id);
  btn04.onclick = () => saveFavorites(data[3].id);
  btn05.onclick = () => saveFavorites(data[4].id);
  btn06.onclick = () => saveFavorites(data[5].id);
  btn07.onclick = () => saveFavorites(data[6].id);
  btn08.onclick = () => saveFavorites(data[7].id);
  btn09.onclick = () => saveFavorites(data[8].id);
  btn10.onclick = () => saveFavorites(data[9].id);
}

/*
-------------------------------------------------------------------------------
Sección favoritos
-------------------------------------------------------------------------------
*/
async function favorite() {
  res = await fetch(url_favorites);
  data = await res.json();

  const section = document.getElementById('favorite');
  section.innerHTML = "";
  data.forEach(element => {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    const btn_text = document.createTextNode('💔');

    btn.appendChild(btn_text);
    btn.onclick = () => del_favorite(element.id);
    img.src = element.image.url
    article.appendChild(img);
    article.appendChild(btn);
    section.appendChild(article);
  });
}

/*
-------------------------------------------------------------------------------
Sección Guardar Favoritos
-------------------------------------------------------------------------------
*/
async function saveFavorites(id) {
  const res = await fetch(url_favorites, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      image_id: id
    }),
  });
  
  const data = await res.json();
  favorite()
}'¿¿'

getDog()
favorite()