import * as PIXI from 'pixi.js'
import { Sprite, Texture } from "pixi.js";
import Stage from './Stage'
import { gsap } from 'gsap';
import Ninja from './Ninja';
import PictureHover from './PictureHover';

export default class Game {

        constructor(assets) {

                // Stage Class.
                let myStage = new Stage();
                this.scene = myStage.scene;
                this.scene.sortableChildren = true;
                this.myStageInfo = myStage.stageInfo;

                // Background.
                let background = myStage.bg;
                const bg = Sprite.from(assets.backgroundBlur)
                background.addChild(bg);

                // Sign
                const sign = Sprite.from(assets.playSign)
                console.log(sign)
                sign.anchor.set(.5)
                sign.x = 1300;
                sign.y = 150;
                sign.eventMode = 'static'
                this.scene.addChild(sign)

                // Sign EventListener
                sign.on('pointerdown', (event) => {

                        // gsap animation.
                        gsap.to(event.currentTarget, {

                                duration: 2,
                                delay: .2,
                                y: sign.y - 350,
                                ease: 'Elastic.easeOut',

                        });

                        // Timer så katte og normal baggrund ikke dukker op lige når man trykker på sign.
                        let timeBlur = setTimeout(() => {

                                //Baggrund blur bliver til normal baggrund.
                                bg.texture = Texture.from('../assets/images/baggrund1700x768.jpg')

                                // efter der bliver trykket på playSign, kommer alt frem:
                                this.scene.addChild(
                                        greyCat,
                                        brownCat,
                                        spot,
                                        this.ninjaSpilMouseOver,
                                        this.fagNummer,
                                        this.card,
                                        this.ninja.showNinja()

                                );


                        }, 500)

                })

                const speechBubbleSmall = Sprite.from(assets.speechBubbleSmall)
                speechBubbleSmall.anchor.set(.5)
                speechBubbleSmall.x = 0
                speechBubbleSmall.y = 0
                speechBubbleSmall.visible = false;
                this.scene.addChild(speechBubbleSmall)

                // Fag nummer mouseover
                this.fagNummer = new PIXI.Graphics()
                this.fagNummer.beginFill(0x000000)
                this.fagNummer.drawRect(1400, 200, 50, 10)
                this.fagNummer.alpha = 0;
                this.fagNummer.endFill()
                this.fagNummer.eventMode = 'static'

                const fagNummerText = new PIXI.Text('Fag nummer 16747', {

                        fontFamily: 'Roboto Slab',
                        fontSize: 15,
                        fill: 0x000000,
                        wordWrap: true

                })
                fagNummerText.x = 1515
                fagNummerText.y = 185
                fagNummerText.visible = false;
                this.scene.addChild(fagNummerText)

                // Death smokie card
                this.card = new PIXI.Graphics()
                this.card.beginFill(0x000000)
                this.card.drawRect(1440, 500, 50, 30)
                this.card.alpha = 0
                this.card.endFill()
                this.card.eventMode = 'static'

                const cardText = new PIXI.Text('Death Smokie', {

                        fontFamily: 'Roboto Slab',
                        fontSize: 15,
                        fill: 0x000000,

                })
                cardText.x = 1535
                cardText.y = 485
                cardText.visible = false;
                this.scene.addChild(cardText)

                this.ninjaSpilMouseOver = new PIXI.Graphics()
                this.ninjaSpilMouseOver.beginFill(0x000000)
                this.ninjaSpilMouseOver.drawRect(1400, 75, 100, 100)
                this.ninjaSpilMouseOver.alpha = 0;
                this.ninjaSpilMouseOver.endFill()
                this.ninjaSpilMouseOver.eventMode = 'static'


                const ninjaSpilText = new PIXI.Text('WebGL kompendie, ninja spil lavet af Lars', {

                        fontFamily: 'Roboto Slab',
                        fontSize: 15,
                        fill: 0x000000,
                        wordWrap: true

                })
                ninjaSpilText.x = 1315
                ninjaSpilText.y = 75
                ninjaSpilText.visible = false;
                this.scene.addChild(ninjaSpilText)


                // & CATS


                // Grey cat.
                const greyCat = Sprite.from(assets.greyCat)
                greyCat.eventMode = 'static'
                greyCat.anchor.set(0.5)
                greyCat.x = 1750;
                greyCat.y = 400;

                const kikoText = new PIXI.Text('Kiko', {

                        fontFamily: 'Roboto Slab',
                        fontSize: 20,
                        fill: 0x000000

                })
                kikoText.x = 1780
                kikoText.y = 290
                kikoText.visible = false;
                this.scene.addChild(kikoText)

                // Brown Cat.
                const brownCat = Sprite.from(assets.brownCat)
                brownCat.eventMode = 'static'
                brownCat.anchor.set(.0)
                brownCat.x = 1130
                brownCat.y = 380

                const apolloText = new PIXI.Text('Apollo', {

                        fontFamily: 'Roboto Slab',
                        fontSize: 20,
                        fill: 0x000000

                })
                apolloText.x = 1020
                apolloText.y = 350
                apolloText.visible = false;
                this.scene.addChild(apolloText)

                brownCat.on('pointerdown', () => {

                        brownCat.texture = Texture.from('../assets/images/brownCatPos2.png')
                        speechBubbleSmall.visible = false;
                        apolloText.visible = false;

                })

                // Spotted Cat.
                const spot = Sprite.from(assets.spottedCat)
                spot.anchor.set(.5)
                spot.eventMode = 'static'
                spot.x = 1100
                spot.y = 670

                const spotText = new PIXI.Text('Spot', {

                        fontFamily: 'Roboto Slab',
                        fontSize: 20,
                        fill: 0x000000

                })
                spotText.x = 980
                spotText.y = 590
                spotText.visible = false;
                this.scene.addChild(spotText)

                spot.on('pointerdown', () => {

                        spot.texture = Texture.from('../assets/images/spottedCatPos2.png')
                        speechBubbleSmall.visible = false;
                        spotText.visible = false;

                })


                // & CATS end.


                // Mouseover / Mouseout function.
                let mouseOverObject = false;

                function setupMouseEvents(object, text, x, y) {
                        object.on('mouseover', () => {
                                speechBubbleSmall.x = x;
                                speechBubbleSmall.y = y;
                                speechBubbleSmall.visible = true;
                                text.visible = true;
                        });

                        object.on('mouseout', () => {
                                setTimeout(() => {
                                        if (!mouseOverObject) {
                                                speechBubbleSmall.visible = false;
                                                text.visible = false;
                                        }
                                }, 10);
                        });
                }


                setupMouseEvents(greyCat, kikoText, 1800, 300);
                setupMouseEvents(brownCat, apolloText, 1050, 360);
                setupMouseEvents(spot, spotText, 1000, 600)
                setupMouseEvents(this.ninjaSpilMouseOver, ninjaSpilText, 1350, 110)
                setupMouseEvents(this.fagNummer, fagNummerText, 1550, 195)
                setupMouseEvents(this.card, cardText, 1575, 490)

                // Ninja class.
                this.ninja = new Ninja(assets, bg, this.scene, greyCat, brownCat, spot);

                // PictureHover class.
                this.pictureHover = new PictureHover(assets, this.scene)

        } // End Constructor.


} // End Class.