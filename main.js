const url           = 'https://api.thedogapi.com/v1/images/search';
const urlFav =  'https://api.thedogapi.com/v1/favourites?&api_key=';
const urlFavDel = (id) => `https://api.thedogapi.com/v1/favourites/${id}`;
const urlUpload = 'https://api.thedogapi.com/v1/images/upload';

/*
-----------------------------------------------------------------------------------------
Gallery
-----------------------------------------------------------------------------------------
*/
async function getDog() {
  const res = await fetch(url);
  const data = await res.json();

  const img = document.getElementById('img01');
  img.src = data[0].url;

  btn.onclick = () => saveFav(data[0].id);  //Arrow para que solo se ejecute al hacer click
}

/*
-----------------------------------------------------------------------------------------
Save favorites
-----------------------------------------------------------------------------------------
*/
async function saveFav(id) {
  const res = await fetch(urlFav, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': '587854b5-0c8c-4f86-8091-d2905597a5ab',
    },
    body:JSON.stringify({
      image_id: id
    }),
  }); 
  
  const data = await res.json();
  console.log('saved');
  fav()
}

/*
-----------------------------------------------------------------------------------------
View Favorites
-----------------------------------------------------------------------------------------
*/
async function fav() {
  res = await fetch(urlFav, {
    method: 'GET',
    headers: {
      'X-API-KEY': '587854b5-0c8c-4f86-8091-d2905597a5ab',
    }
  });

  const data = await res.json();
  console.log('favorites');
  console.log(data);
  const section = document.getElementById('fav');
  section.innerHTML = ""; //cleaning the section
  data.forEach(element => {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    const btnText = document.createTextNode('💔');

    btn.appendChild(btnText);
    btn.onclick = () => delFav(element.id);
    img.src = element.image.url
    article.appendChild(img);
    article.appendChild(btn);
    section.appendChild(article);
  });
}

/*
-----------------------------------------------------------------------------------------
Delete Favorites
-----------------------------------------------------------------------------------------
*/
async function delFav(id) {
  const res = await fetch(urlFavDel(id), {
    method: 'DELETE',
    headers: {
      'X-API-KEY': '587854b5-0c8c-4f86-8091-d2905597a5ab',
    }
  });
  console.log('Deleted');
  fav();
}

/*
-----------------------------------------------------------------------------------------
Upload my own picture
-----------------------------------------------------------------------------------------
*/
async function upPic() {
  const form = document.getElementById('upForm')
  const formData = new FormData(form);
  console.log(formData.get('file'));

  const res = await fetch(urlUpload, {
    method: 'POST',
    headers: {
      'X-API-KEY': '587854b5-0c8c-4f86-8091-d2905597a5ab',
    },
    body: formData,
  });
}

getDog();
fav();

