import * as PIXI from 'pixi.js'
import { Sprite } from "pixi.js";

export default class PictureHover {

        constructor(assets, scene) {

                const speechBubbleLong = Sprite.from(assets.speechBubbleLong)
                speechBubbleLong.anchor.set(.5)
                speechBubbleLong.x = 0
                speechBubbleLong.y = 0
                speechBubbleLong.visible = false;

                this.pictureMouseOver = new PIXI.Graphics()
                this.pictureMouseOver.beginFill(0x000000)
                this.pictureMouseOver.drawRect(600, 90, 100, 150)
                this.pictureMouseOver.alpha = 0
                this.pictureMouseOver.endFill()
                this.pictureMouseOver.eventMode = 'static'

                const pictureMouseOverText = new PIXI.Text(' Det første kompendie vi arbejde med, samt det sidste og baggrunden på Lars´s boilerplate. ', {

                        fontFamily: 'Roboto Slab',
                        fontSize: 15,
                        fill: 0x000000,
                        wordWrap: true

                })
                pictureMouseOverText.x = 750
                pictureMouseOverText.y = 75
                pictureMouseOverText.visible = false;

                this.mouseOverPicture = false;

                scene.addChild(speechBubbleLong, pictureMouseOverText, this.pictureMouseOver)

                this.pictureMouseOver.on('mouseover', () => {
                        speechBubbleLong.x = 795;
                        speechBubbleLong.y = 125;
                        speechBubbleLong.visible = true;
                        pictureMouseOverText.visible = true;
                });

                // Event Listener mouser out.
                this.pictureMouseOver.on('mouseout', () => {
                        setTimeout(() => {
                                if (!this.mouseOverPicture) {
                                        speechBubbleLong.visible = false;
                                        pictureMouseOverText.visible = false;
                                }
                        }, 100);
                });

        }

}