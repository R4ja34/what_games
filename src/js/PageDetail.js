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
                clip,
                screenshots,
                stores
            } = gameData;

            const articleDOM = document.querySelector(".page-detail .article");
            articleDOM.querySelector("h1.title").innerHTML = name;
            articleDOM.querySelector("p.release-date span").innerHTML = released;
            articleDOM.querySelector("p.description").innerHTML = description;

            // Display developers with links to PageList
            const developersHTML = developers.map(dev => `<a href="#pagelist/developers/${dev.slug}">${dev.name}</a>`).join(', ');
            articleDOM.querySelector("p.developers").innerHTML = `Studio(s) de développement(s) :  ${developersHTML}`;

            // Display tags with links to PageList
            const tagsHTML = tags.map(tag => `<a href="#pagelist/tags/${tag.slug}">${tag.name}</a>`).join(', ');
            articleDOM.querySelector("p.tags").innerHTML = `Catégories :  ${tagsHTML}`;

            // Display genres with links to PageList
            const genresHTML = genres.map(genre => `<a href="#pagelist/genres/${genre.slug}">${genre.name}</a>`).join(', ');
            articleDOM.querySelector("p.genres").innerHTML = `Genre(s) :  ${genresHTML}`;

            // Display publishers with links to PageList
            const publishersHTML = publishers.map(publisher => `<a href="#pagelist/publishers/${publisher.slug}">${publisher.name}</a>`).join(', ');
            articleDOM.querySelector("p.publishers").innerHTML = `Editeur(s) : ${publishersHTML}`;

            // Display platforms with links to PageList
            const platformsHTML = parent_platforms.map(platform => `<a href="#pagelist/platforms/${platform.platform.slug}">${platform.platform.name}</a>`).join(', ');
            articleDOM.querySelector("p.platforms").innerHTML = `Disponible sur : ${platformsHTML}`;

            // Display website as an external link
            articleDOM.querySelector("a.website").href = website;

            // Display video using HTML5 player
            if (clip) {
                articleDOM.querySelector("div.video").innerHTML = `<video controls width="600" height="300"><source src="${clip.clip}" type="video/mp4">Your browser does not support the video tag.</video>`;
            }

            // Display average rating and number of ratings
            articleDOM.querySelector("p.rating").innerHTML = `Note : ${rating} / 5 <br> Nombre de notes: ${ratings_count}`;

            // Display main game image
            articleDOM.querySelector("img.img-fluid").src = background_image;
            articleDOM.querySelector("img.img-fluid").alt = `image de ${name}`;

            // Display four screenshots
            const screenshotsHTML = screenshots.slice(0, 4).map(screenshot => `<img src="${screenshot.image}" alt="Screenshot">`).join('');
            articleDOM.querySelector("div.screenshots").innerHTML = screenshotsHTML;

            // Display links to buy the game
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
          <img class="img-fluid" src="" alt="">
          <div class="screenshots"></div>
          <p class="buy-links"></p>
        </div>
      </section>
    `;

        preparePage();
    };

    render();
};

export { PageDetail };
