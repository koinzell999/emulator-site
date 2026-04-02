const carousel_items = document.getElementsByClassName('carousel-item');
const container = document.getElementById('tileContainer');
const gameFilterSearchInput = document.getElementById('gameSearch');


// having the game_titles to filter through them.
const arrayOfGameTitleSlashDescriptionArrays = [...carousel_items].map(item => {
    const gameArray = item.textContent.split(/\r?\n/)?.map(text => text.trim()).filter(element => element.length !== 0);
    gameArray.push(item.querySelector('img').src);

    return gameArray;
});
const arrayOfGameTitleSlashDescriptionJSONs = arrayOfGameTitleSlashDescriptionArrays.map( output => ({title: output[0], desc: output[1], imgSrc: output[2]}));

function renderTiles(games)
{

    container.innerHTML = games.map(game => `
    <div class="col-md-4">
      <div class="card bg-secondary border-warning h-100 p-3">
        <img src="${game.imgSrc}" class="d-block mx-auto mb-3" style="width:200px;" alt="Castle Builder">
        <h5 class="pixel-font text-warning">${game.title}</h5>
        <p class="small mb-0 text-light">${game.desc}</p>
      </div>
    </div>
  `).join('');

}

renderTiles(arrayOfGameTitleSlashDescriptionJSONs);

gameFilterSearchInput.addEventListener('input', (e) => {

    const term = e.target.value.toLowerCase().trim();

    const filtered = arrayOfGameTitleSlashDescriptionJSONs.filter(game => game.title.toLowerCase().includes(term));

    renderTiles(filtered);

});


// // console.log(carousel_items.forEach(item => item.innerText.split(/\r?\n/)));


// console.log(GamesTitles);
// // console.log(carousel_item?.[0].innerText.split(/\r?\n/)?.[0]);