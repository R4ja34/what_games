import apiKeys from './apikeys';

const API_KEY = apiKeys.rawg;
const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
const IMAGES_PATH = '/src/assets/images/';

const PageList = (argument = '') => {
  const pageSize = 9;
  let pageCounter = 1;
  const cleanedArgument = argument.trim().replace(/\s+/g, '-');
  const resultsContainer = document.querySelector('.page-list .articles');

  const platformImages = {
    'linux': 'linux.svg',
    'mac': 'mac.svg',
    'android': 'mobile.svg',
    'playstation': 'ps4.svg',
    'xbox': 'xbox.svg',
    'nintendo': 'switch.svg',
    'pc': 'windows.svg',
    'web': 'web.svg',
  };

  const platformSlugs = (platforms) => platformImages[platforms] ? `<img src="${IMAGES_PATH}${platformImages[platforms]}" alt="${platforms}" />` : platforms;

  const displayGame = (article) => `
    <article class="cardGame">
      <a href="#pagedetail/${article.id}">
        <img src="${article.background_image}" alt="${article.name}">
        <h3>${article.name}</h3>
        <h4>${article.released}</h4>
        <div class="platforms">Plateformes : ${article.parent_platforms.map((platform) => platformSlugs(platform.platform.slug)).join(", ")}</div>
      </a>
    </article>`;

  const displayResults = (articles) => {
    const resultsContent = articles.map(displayGame);
    resultsContainer.innerHTML = resultsContent.join("\n");
  };

  const fetchList = (url, argument, page) => {
    const finalURL = argument ? `${url}&search=${argument}&page=${page}` : url;
    fetch(finalURL)
      .then((response) => response.json())
      .then((responseData) => {
        displayResults(responseData.results);
        if (pageCounter >= 2) {
          hideShowMoreButton();
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  };

  const handleShowMoreClick = () => {
    pageCounter++;
    fetchList(API_URL, cleanedArgument, pageCounter);
  };

  const createShowMoreButton = () => {
    const button = document.createElement('button');
    button.textContent = 'Show more';
    button.addEventListener('click', handleShowMoreClick);
    return button;
  };

  const hideShowMoreButton = () => {
    showMoreButton.style.display = 'none';
  };

  const render = () => {
    const pageContent = document.getElementById('pageContent');
    if (!pageContent) {
      console.error("L'élément avec l'ID 'pageContent' n'a pas été trouvé.");
      return;
    }

    resultsContainer.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>`;
      
    const showMoreButton = createShowMoreButton();
    resultsContainer.appendChild(showMoreButton);
    fetchList(API_URL, cleanedArgument, pageCounter);
  };

  render();
};

export default PageList;
