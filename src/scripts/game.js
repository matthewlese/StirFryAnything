import Star from './space'
import printer from './util'
import {INGREDIENTS, proteins, vegetables} from "./ingredients"

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.startGame();
  }

  startGame() {
    this.render()
    printer('Press Enter to Begin')
    this.level = 1;
    window.addEventListener('keypress', (key) => {
      if (key.key === "Enter") {
        this.level1();
      }
    }, false)
  }
  
  render() {
    Star.render.bind(this)();
  }

  level1() {
    if (this.level !== 1) { this.startGame() };
    let firstDirs = printer('Click ingredients to add them to your tray')
    firstDirs.style.top = "23%";
    const container = document.getElementById('game-container');
    this.buildTray(container)
    this.buildLists(container);

  }

  buildTray(container) {
    const trayDiv = document.createElement('div');
    trayDiv.setAttribute('id', 'tray');
    const trayPic = document.createElement('img');
    trayPic.setAttribute('src', 'images/sheet_pan.PNG');
    trayPic.setAttribute('id', 'tray-pic');
    trayDiv.appendChild(trayPic);
    const chosenIngredients = document.createElement('ul');
    chosenIngredients.setAttribute('id', 'chosen-ingredients');
    trayDiv.appendChild(chosenIngredients);
    container.appendChild(trayDiv);
  }
      
  buildLists(container) {
    // const container = document.getElementById('game-container');
    let veggieList = document.createElement('ul');
    veggieList.setAttribute('class', 'veggieList');
    vegetables.forEach((veggie) => {
      let veggieEl = document.createElement('li');
      veggieEl.setAttribute('id', `${veggie.name}`);
      let veggieImg = document.createElement('img');
      veggieImg.setAttribute('src', `${veggie.raw_img_link}`);
      veggieImg.setAttribute('alt', `${veggie.name}`);
      veggieEl.appendChild(veggieImg);
      veggieList.appendChild(veggieEl);
    })
    container.appendChild(veggieList);

    let proteinList = document.createElement('ul');
    proteinList.setAttribute('class', 'proteinList');
    proteins.forEach((protein) => {
      let proteinEl = document.createElement('li');
      proteinEl.setAttribute('id', `${protein.name}`);
      let proteinImg = document.createElement('img');
      proteinImg.setAttribute('src', `${protein.raw_img_link}`);
      proteinImg.setAttribute('alt', `${protein.name}`);
      proteinEl.appendChild(proteinImg);
      proteinList.appendChild(proteinEl);
    })
    container.appendChild(proteinList);
  }
}
