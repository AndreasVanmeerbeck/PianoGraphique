class Tableau1 extends Phaser.Scene {

    //mes variables
    variables(){
    this.startup=false;
    }


    preload() {
        //preload fond d'écran
        this.load.image('bgimg', 'assets/images/bgimg.jpg');
        for (let i = 1; i <= 3; i++) {
            this.load.image('taskbar' + i, 'assets/images/taskbar' + i + '.png');
        }
        //preload pops ups
        this.load.image('error', 'assets/images/error.png');
        this.load.image('notepad', 'assets/images/notepad.png');
        this.load.image('avast', 'assets/images/avast.png');
        this.load.image('msn', 'assets/images/msn.png');
        this.load.image('cc', 'assets/images/cc.png');
        this.load.image('bar', 'assets/images/bar.png');
        //preload de sons
        this.load.audio('virale', 'assets/sounds/sound1.mp3')
        this.load.audio('errorsound', 'assets/sounds/errorsound.mp3')
        this.load.audio('welcome', 'assets/sounds/welcome.mp3')
        this.load.audio('msnsou', 'assets/sounds/msn.mp3')
    }


    create() {

        //mon fond d'écran

        this.background = this.add.image(0, 0, 'bgimg').setOrigin(0, 0);

        this.taskbar = this.add.image(0, 1055, 'taskbar1').setOrigin(0, 0);


        this.taskbar2 = this.add.image(90, 1055, 'taskbar2').setOrigin(0, 0);


        this.taskbar2bis = this.add.image(620, 1055, 'taskbar2').setOrigin(0, 0);


        this.taskbar2tis = this.add.image(1150, 1055, 'taskbar2').setOrigin(0, 0);


        this.taskbar2qis = this.add.image(1400, 1055, 'taskbar2').setOrigin(0, 0);


        this.taskbar3 = this.add.image(1840, 1055, 'taskbar3').setOrigin(0, 0);


        //les touches prisent en compte
        this.lettres = "azertyuiopqsdfghjklmwxcvbn".split("")
        console.log("liste des touches prises en charge...");
        console.log(this.lettres);
        //création de la fonction clavier
        this.initKeyboard();

        //fonction pour créer un feedback visuel
        this.creerClavier();



        //mes pops ups
        this.creerPopups();

        //mes sons
        this.creerSons();

        //variables
        this.variables();


    }

    creerSons(){
        this.virale = this.sound.add('virale', {loop: false});
        this.virale.volume = 1

        this.errorsou = this.sound.add('errorsound', {loop: false});
        this.errorsou.volume = 1

        this.msnsou = this.sound.add('msnsou', {loop: false});
        this.msnsou.volume = 1

        this.welcome = this.sound.add('welcome', {loop: false});
        this.welcome.volume = 0.4
    }

    creerPopups() {
        this.notepad = this.add.image(400, 400, 'notepad').setOrigin(0, 0);
        this.notepad.visible=false
        this.notepad.alpha=0

        this.error = this.add.image(700, 400, 'error').setOrigin(0, 0);
        this.error.visible=false
        this.error.alpha=0

        this.avast = this.add.image(1600, 800, 'avast').setOrigin(0, 0);
        this.avast.visible=false
        this.avast.alpha=0

        this.msn = this.add.image(1770, 930, 'msn').setOrigin(0, 0);
        this.msn.visible=false
        this.msn.alpha=0

        this.cc = this.add.image(1400, 600, 'cc').setOrigin(0, 0);
        this.cc.visible=false
        this.cc.alpha=0

        this.bar = this.add.image(1100, 500, 'bar').setOrigin(0, 0);
        this.bar.visible=false
        this.bar.alpha=0

    }

    creerClavier() {
        //feedback visuel de la pression des touches
        let espacement = (this.game.config.width - 2) / this.lettres.length; // -2 c'est pour avoir une petite marge d'un pixel
        let x = 1;
        for (let lettre of this.lettres) {
            let objetGraphique = this.add.text(x, 1, lettre, {
                color: "#FFFFFF", //blanc
                align: "center",
                backgroundColor: "#345EE3", //bleu
                fixedWidth: espacement - 1  // -1 c'est pour avoir une petite marge d'un pixel entre les lettres
            });
            //position X de la rouche suivante
            x += espacement;
            //donne un nom à l'élément graphique
            objetGraphique.name = lettre;
        }
    }


    initKeyboard() {
        /**
         *
         * @type {Tableau1}
         */
        let me = this;
        this.input.keyboard.on('keydown', function (kevent) {
            console.log("keydown", kevent.key, kevent)
            for (let lettre of me.lettres) {
                if (kevent.key === lettre) {
                    /**
                     *
                     * @type {Phaser.GameObjects.Text}
                     */
                    let objetGraphique = me.children.getByName(lettre);
                    objetGraphique.toucheEnfoncee = true;

                }
            }

        });
        this.input.keyboard.on('keyup', function (kevent) {
            console.log("keyup", kevent.key, kevent)
            for (let lettre of me.lettres) {
                if (kevent.key === lettre) {
                    /**
                     * Obtenir la touche à partir de la lettre
                     * @type {Phaser.GameObjects.Text}
                     */
                    let touche = me.children.getByName(lettre);
                    touche.toucheEnfoncee = false;
                    touche.actif = !touche.actif; //alterne un fois ce sera actif, une fois ça le sera plus.
                    //appelle une fonction
                    me.quandToucheRelachee(kevent.key, touche)
                }
            }

        });
    }

    quandToucheRelachee(lettre, objetGraphique) {

        //------------pop-ups---------------
        if (lettre === "a") {
            if (this.error.visible==false){
                this.errorsou.play()
            }
            this.error.visible= !this.error.visible;
            this.CompositionA()
        }
        if (lettre === "z") {
            if (this.avast.visible==false){
                this.virale.play()
            }
            this.avast.visible= !this.avast.visible;
            this.CompositionZ()
        }
        if (lettre === "e") {
            this.notepad.visible= !this.notepad.visible;
            this.CompositionE()
        }
        if (lettre === "r") {
            if (this.msn.visible==false){
                this.msnsou.play()
            }
            this.msn.visible= !this.msn.visible;
            this.CompositionR()
        }
        if (lettre === "t") {
            this.cc.visible= !this.cc.visible;
            this.CompositionT()
        }
        if (lettre === "y") {
            this.bar.visible= !this.bar.visible;
            this.CompositionY()
        }
    }
    update(){

        if (this.startup==false){
            this.welcome.play()
            this.startup=true
        }

            //pour chacune des lettres on va tester si il faut faire des choses ou non
            for (let lettre of this.lettres) {

                //--- interaction sur le clavier ---

                /**
                 * La touche qui correspond à la lettre
                 * @type {Phaser.GameObjects.Text}
                 */
                let touche = this.children.getByName(lettre);
                //si enfoncée le fond de touche est gris
                if (touche.toucheEnfoncee) {
                    touche.setBackgroundColor("#888888")
                } else {
                    touche.setBackgroundColor("#345EE3")
                }
                //si actif le texte est vert sinon blanc
                if (touche.actif) {
                    touche.setColor("#00FF00")
                } else {
                    touche.setColor("#FFFFFF")
                }
            }
        }
    CompositionA(){
        this.tweens.add({
            targets: this.error,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
    });
        this.error.alpha=0
}
    CompositionZ() {
        this.tweens.add({
            targets: this.avast,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.avast.alpha = 0
    }
    CompositionE() {
        this.tweens.add({
            targets: this.notepad,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.notepad.alpha = 0
    }
    CompositionR() {
        this.tweens.add({
            targets: this.msn,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.msn.alpha = 0
    }
    CompositionT() {
        this.tweens.add({
            targets: this.cc,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.cc.alpha = 0
    }
    CompositionY() {
        this.tweens.add({
            targets: this.bar,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.bar.alpha = 0
    }
}
