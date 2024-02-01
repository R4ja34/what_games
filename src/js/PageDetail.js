import apiKeys from './apikeys';
const API_KEY = apiKeys.rawg;

const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");
    const displayGame = (gameData) => {
      const {
        name,
        released,
        description,
        developers,
        tags,
        genres,
        publishers,
        parent_platforms,
        website,
        rating,
        ratings_count,
        background_image,
        background_image_additional,
        clip,
        stores
    } = gameData;

    const articleDOM = document.querySelector(".page-detail .article");
    articleDOM.querySelector("h1.title").innerHTML = name;
    articleDOM.querySelector("p.release-date span").innerHTML = released;
    const developersHTML = developers.map(dev => `<a href="#pagelist/developers/${dev.slug}">${dev.name}</a>`).join(', ');
    articleDOM.querySelector("p.description").innerHTML = description;
    articleDOM.querySelector("p.developers").innerHTML = `Studio(s) de développement(s) :  ${developersHTML}`;
    const tagsHTML = tags.map(tag => `<a href="#pagelist/tags/${tag.slug}">${tag.name}</a>`).join(', ');
    articleDOM.querySelector("p.tags").innerHTML = `Catégories :  ${tagsHTML}`;
    const genresHTML = genres.map(genre => `<a href="#pagelist/genres/${genre.slug}">${genre.name}</a>`).join(', ');
    articleDOM.querySelector("p.genres").innerHTML = `Genre(s) :  ${genresHTML}`;
    const publishersHTML = publishers.map(publisher => `<a href="#pagelist/publishers/${publisher.slug}">${publisher.name}</a>`).join(', ');
    articleDOM.querySelector("p.publishers").innerHTML = `Editeur(s) : ${publishersHTML}`;
    const platformsHTML = parent_platforms.map(platform => `<a href="#pagelist/platforms/${platform.platform.id}">${platform.platform.name}</a>`).join(', ');
    articleDOM.querySelector("p.platforms").innerHTML = `Disponible sur : ${platformsHTML}`;
  
    articleDOM.querySelector("a.website").href = website;
    if (clip !== null) {
      articleDOM.querySelector("div.video").innerHTML = `<video controls width="600" height="300"><source src="${clip.clip}" type="video/mp4">Your browser does not support the video tag.</video>`;
    } else {
      articleDOM.querySelector("div.video").innerHTML = `<p>Aucune video disponible</p>`
    }
    articleDOM.querySelector("p.rating").innerHTML = `Note : ${rating} / 5. <br> Nombre de notes: ${ratings_count}`;
    articleDOM.querySelector("img.img-fluid").src = background_image_additional ? background_image_additional : background_image;
    articleDOM.querySelector("img.img-fluid").alt = `image de ${name}`;
    const storesHTML = stores.map(store => `<a href="${store.url}" target="_blank">${store.store.name}</a>`).join(', ');
    articleDOM.querySelector("p.buy-links").innerHTML = `Acheter le jeu : ${storesHTML}`;
    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
        displayGame(responseData);
      });
    };

    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
      pageContent.innerHTML = `
    <section class="page-detail">
      <div class="article">
        <h1 class="title"></h1>
        <img class="img-fluid" src="" alt="">
        <div class="article-content">
          <p class="release-date">Date de sortie : <span></span></p>
          <p class="description"></p>
          <p class="developers"></p>
          <p class="tags"></p>
          <p class="genres"></p>
          <p class="publishers"></p>
          <p class="platforms"></p>
          <a class="website" href="#" target="_blank">Site Web</a>
          <div class="video"></div>
          <p class="rating"></p>
          <div class="screenshots"></div>
          <p class="buy-links"></p>
        </div>
      </div>
    </section>
  `;

      preparePage();
  };

  render();
};

export { PageDetail };
