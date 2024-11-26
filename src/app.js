import Game from "./Game";
import "../css/style.scss";
import * as PIXI from 'pixi.js'
import { Assets } from 'pixi.js';
import dataCats from '../assets/json/cats.json'

// **  IIFE: Immediately Invoked Function Expression  */

Assets.addBundle('objects', {

  backgroundBlur: './assets/images/baggrundBlurred.jpg',
  playSign: './assets/images/playSign.png',
  greyCat: './assets/images/greyCat.png',
  brownCat: './assets/images/brownCat.png',
  spottedCat: './assets/images/spottedCat.png',
  ninja: './assets/images/ninja.png',
  speechBubble: './assets/images/speechBubble.png',
  speechBubbleSmall: './assets/images/speechBubbleSmall.png',
  speechBubbleLong: './assets/images/speechBubbleLong.png'

});

(async () => {

  const assets = await Assets.loadBundle('objects');

  let init = new Game(assets, dataCats);

})();