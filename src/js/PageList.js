import apiKeys from './apikeys';

const API_KEY = apiKeys.rawg;
const IMAGES_PATH = '/src/assets/images/';
const searchGames = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');
    const displayResults = (articles) => {
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
      const resultsContent = articles.map((article) => (
        `<article class="cardGame"">
            <a href="#pagedetail/${article.id}">
              <img src="${article.background_image}">
              <h3>${article.name}</h3>
              <h4>${article.released}</h4>
              <div class="platforms">Plateformes : ${article.parent_platforms.map((platform) => platformSlugs(platform.platform.slug)).join(", ")}</div>
            </a>
          </article>`
        ));
        
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

  const fetchList = (url, argument) => {
  const finalURL = argument ? `${url}&search=${argument}&ordering=-released` : `${url}&dates=2024-01-01,2035-12-31`;
  fetch(finalURL)
    .then((response) => response.json())
    .then((responseData) => {
      displayResults(responseData.results);
    });
  };
    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
  };
  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;
    preparePage();
  };
  render();
};

searchGames.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  console.log(searchTerm);
  if (searchTerm !== '') {
    PageList(searchTerm);
  }
});

export default PageList;