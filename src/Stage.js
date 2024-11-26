import * as PIXI from 'pixi.js'
import { Application } from 'pixi.js'

export default class Stage {

        constructor() {

                // Dimensionerne på canvas
                this.targetWidth = 1700;
                this.targetHeight = 768;
                this.targetCenter = 1024;

                // Dimernsionerne på browser window.
                this.appWidth = window.innerWidth;
                this.appHeight = window.innerHeight;

                // skalere baseret på browser dimensionerne og target dimensionerne.
                this.scaleFactor = this.appWidth / this.targetWidth

                // Appender 'this.app' til body.
                this.app = new Application();
                document.body.appendChild(this.app.view)

                // 'this.bg', en container der indholder baggrund elementer.
                this.bg = new PIXI.Container();
                this.bg.x = this.appWidth / 2;
                this.bg.y = this.appHeight / 2;
                this.bg.pivot.x = this.targetWidth * .5;
                this.bg.pivot.y = this.targetHeight * .5;
                this.bg.eventMode = 'static'
                // 'this.bg', bliver added til til stage.
                this.app.stage.addChild(this.bg)

                // 'this.scene', endnu en container der indeholder main scene elementer.
                this.scene = new PIXI.Container();
                this.scene.x = 0
                this.scene.y = 0
                this.scene.pivot.x = this.targetCenter * 0.5;
                // 'this.scene', bliver added til stage.
                this.app.stage.addChild(this.scene)

                // 'scene' containeren bliver skaleret proportionelt baseret på 'scaleFactor', for at sikre at grafikken bliver rendered rigtigt baseret på ens browser størrelse.
                this.scene.scale.x = this.scene.scale.y = this.scaleFactor;
                this.scene.scale.y = this.scene.scale.x = this.appHeight / this.targetHeight;

                // renderer bliver resized for at matche dimensionerne af browser vinduet.
                this.app.renderer.resize(this.appWidth, this.appHeight)

        }

        // Getter method.
        get stageInfo() {

                return {

                        appWidth: this.appWidth,
                        appHeight: this.appHeight,
                        targetHeight: this.targetHeight,
                        targetWidth: this.targetWidth,
                        scaleFactor: this.scaleFactor,
                        app: this.app

                };

        } // Constructer END;

} // Class END;