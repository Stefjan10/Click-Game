import * as PIXI from 'pixi.js'
import { Sprite, Texture } from "pixi.js";
import { gsap } from 'gsap';

export default class Ninja {
        constructor(assets, background, scene, kiko, apollo, spot) {

                // Ninja
                this.ninja = Sprite.from(assets.ninja);
                this.ninja.anchor.set(0.5);
                this.ninja.x = 1920;
                this.ninja.y = 140;
                this.ninja.eventMode = 'static';

                // SpeechBubble
                this.speechBubble = Sprite.from(assets.speechBubble);
                this.speechBubble.anchor.set(0.5);
                this.speechBubble.x = 0;
                this.speechBubble.y = 0;
                this.speechBubble.visible = false;

                // Ninja Text
                this.ninjaText = new PIXI.Text("i wouldn't do that...", {
                        fontFamily: 'Roboto Slab',
                        fontSize: 20,
                        fill: 0x000000,
                });
                this.ninjaText.x = 1655;
                this.ninjaText.y = 80;
                this.ninjaText.visible = false;

                // Gamer Over Text
                let gameOverText = new PIXI.Text('You died', {

                        fontFamily: 'Roboto Slab',
                        fontSize: 100,
                        fill: 0x000000

                })
                gameOverText.x = 1120
                gameOverText.y = 50
                gameOverText.visible = false;
                scene.addChild(gameOverText)

                // MouseOverNinjaText flag
                this.mouseOverNinjaText = false;

                // Add Ninja and related elements to the scene
                scene.addChild(this.speechBubble, this.ninjaText, this.ninja);

                // Event Listener mouser over.
                this.ninja.on('mouseover', () => {
                        this.speechBubble.x = 1730;
                        this.speechBubble.y = 90;
                        this.speechBubble.visible = true;
                        this.ninjaText.visible = true;
                });

                // Event Listener mouser out.
                this.ninja.on('mouseout', () => {
                        setTimeout(() => {
                                if (!this.mouseOverNinjaText) {
                                        this.speechBubble.visible = false;
                                        this.ninjaText.visible = false;
                                }
                        }, 100);
                });

                // Event Listner på Ninja med 'click'
                this.ninja.on('pointerdown', (ev) => {
                        this.ninja.texture = Texture.from('../assets/images/ninjaJump.png');
                        this.speechBubble.visible = false;
                        this.ninjaText.visible = false;

                        // Gsap animation.
                        gsap.to(ev.currentTarget, {
                                duration: 0.3,
                                delay: 0.2,
                                y: this.ninja.y + 200,
                                x: this.ninja.x - 500,
                                onComplete: () => {
                                        gsap.to(this.ninja, {
                                                duration: 0.2,
                                                y: 500,
                                                width: 3500,
                                                height: 3520,
                                                onComplete: () => {
                                                        this.ninja.visible = false;
                                                },
                                        });
                                },
                        });

                        // Timer hvor den ændrer baggrunden, adder 'gameOverText' og gemmer kattene væk.
                        let gameOver = setTimeout(() => {

                                background.texture = Texture.from('./assets/images/baggrundHurt.jpg');
                                gameOverText.visible = true;

                                kiko.visible = false;
                                apollo.visible = false;
                                spot.visible = false;

                        }, 600);
                });

                this.hideNinja();

        }

        showNinja() {
                this.ninja.visible = true;
                this.speechBubble.visible = false;
                this.ninjaText.visible = false;
        }

        hideNinja() {
                this.ninja.visible = false;
                this.speechBubble.visible = false;
                this.ninjaText.visible = false;
        }

}