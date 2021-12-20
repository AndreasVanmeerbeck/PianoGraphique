class Tableau1 extends Phaser.Scene {

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
        this.load.image('mar', 'assets/images/Marine.png')
        this.load.image('mardead', 'assets/images/mardead.png')
        this.load.image('ghost1', 'assets/images/ghost1.png')
        this.load.image('ghost2', 'assets/images/ghost2.png')
        this.load.image('nuke', 'assets/images/nuke.png')
        //preload de sons
        this.load.audio('virale', 'assets/sounds/sound1.mp3')
        this.load.audio('errorsound', 'assets/sounds/errorsound.mp3')
        this.load.audio('welcome', 'assets/sounds/welcome.mp3')
        this.load.audio('msnsou', 'assets/sounds/msn.mp3')
        this.load.audio('marsou', 'assets/sounds/marsou.wav')
        this.load.audio('mardea', 'assets/sounds/mardea.wav')
        this.load.audio('DTsou', 'assets/sounds/DTsou.wav')
        this.load.audio('Gspawn', 'assets/sounds/Gspawn.wav')
        this.load.audio('nukealert', 'assets/sounds/nukealert.wav')
        this.load.audio('nukelaunch', 'assets/sounds/nukelaunch.wav')
        this.load.audio('nukestrike', 'assets/sounds/nukestrike.wav')

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
        this.lettres = "azertyuiopn".split("")
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

        //son de début
        this.startupsound();

    }

    creerSons(){
        this.virale = this.sound.add('virale', {loop: false});
        this.virale.volume = 0.3

        this.errorsou = this.sound.add('errorsound', {loop: false});
        this.errorsou.volume = 0.3

        this.msnsou = this.sound.add('msnsou', {loop: false});
        this.msnsou.volume = 0.3

        this.welcome = this.sound.add('welcome', {loop: false});
        this.welcome.volume = 0.2

        this.marsou = this.sound.add('marsou', {loop: false});
        this.marsou.volume = 0.3

        this.mardea = this.sound.add('mardea', {loop: false});
        this.mardea.volume = 0.4

        this.DTsou = this.sound.add('DTsou', {loop: false});
        this.DTsou.volume = 0.3

        this.Gspawn = this.sound.add('Gspawn', {loop: false});
        this.Gspawn.volume = 0.3

        this.nukealert = this.sound.add('nukealert', {loop: false});
        this.nukealert.volume = 0.3

        this.nukelaunch = this.sound.add('nukelaunch', {loop: false});
        this.nukelaunch.volume = 0.3

        this.nukestrike = this.sound.add('nukestrike', {loop: false});
        this.nukestrike.volume = 0.3
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

        this.mar = this.add.image(1200, 750, 'mar').setOrigin(0, 0);
        this.mar.visible=false
        this.mar.alpha=0

        this.mardead = this.add.image(1180, 770, 'mardead').setOrigin(0, 0);
        this.mardead.visible=false
        this.mardead.alpha=0

        this.ghost1 = this.add.image(480, 520, 'ghost1').setOrigin(0, 0);
        this.ghost1.visible=false
        this.ghost1.alpha=0

        this.ghost2 = this.add.image(480, 520, 'ghost2').setOrigin(0, 0);
        this.ghost2.visible=false
        this.ghost2.alpha=0

        this.nuke = this.add.image(750, 250, 'nuke').setOrigin(0, 0);
        this.nuke.visible=false
        this.nuke.alpha=0

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

//mon son de startup pour qu'il ne se joue qu'une fois
    startupsound(){
        this.startup=false;
    }

    quandToucheRelachee(lettre,) {

        //------------pop-ups---------------
        if (lettre === "a") {
            if (this.error.visible==false){ //joue le son que si l'image apparait
                this.errorsou.play()
            }
            this.error.visible= !this.error.visible; //toggle entre visible et non visible
            this.CompositionA() //appel de la fonction pour le tween
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
        if (lettre === "u") {
            if (this.mar.visible==false){
                this.marsou.play()
            }
            if (this.mardead.visible==true){
                this.mardead.visible=false
            }
            this.mar.visible= !this.mar.visible;
            this.CompositionU()
        }
        if (lettre === "i") {
            if (this.mar.visible==true){
                this.DTsou.play()
                this.mardea.play()
                this.mar.visible=false
                this.mardead.visible=true
                this.CompositionI()
            }
        }
        if (lettre === "o") {
            if (this.ghost1.visible==false){
                this.Gspawn.play()
            }
            this.ghost1.visible= !this.ghost1.visible;
            this.CompositionO()
        }

        if (lettre === "p") {
            if (this.ghost2.visible==false){
                this.nukealert.play()
                this.nukelaunch.play()
            }
            if (this.ghost1.visible==true){
                this.ghost1.visible=false
            }
            this.ghost2.visible= !this.ghost2.visible;
            this.CompositionP()
        }
        if (lettre === "n") {
            if (this.nuke.visible==false){
                this.nukestrike.play()
            }
            this.nuke.visible= !this.nuke.visible;
            this.CompositionN()
            this.error.visible=false
            this.avast.visible=false
            this.notepad.visible=false
            this.msn.visible=false
            this.cc.visible=false
            this.bar.visible=false
            this.mar.visible=false
            this.ghost1.visible=false
            this.ghost2.visible=false
            this.mardead.visible=false
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
//Fonctions pour chaques touches pour faire une apparation plus graduelle
    CompositionA(){
        this.tweens.add({
            targets: this.error,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
    });
        this.error.alpha=0
}
    CompositionZ() {
        this.tweens.add({
            targets: this.avast,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.avast.alpha = 0
    }
    CompositionE() {
        this.tweens.add({
            targets: this.notepad,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.notepad.alpha = 0
    }
    CompositionR() {
        this.tweens.add({
            targets: this.msn,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.msn.alpha = 0
    }
    CompositionT() {
        this.tweens.add({
            targets: this.cc,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.cc.alpha = 0
    }
    CompositionY() {
        this.tweens.add({
            targets: this.bar,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.bar.alpha = 0
    }
    CompositionU() {
        this.tweens.add({
            targets: this.mar,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.mar.alpha = 0
    }
    CompositionI() {
        this.tweens.add({
            targets: this.mardead,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.mardead.alpha = 0
    }
    CompositionO() {
        this.tweens.add({
            targets: this.ghost1,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.ghost1.alpha = 0
    }
    CompositionP() {
        this.tweens.add({
            targets: this.ghost2,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.ghost2.alpha = 0
    }
    CompositionN() {
        this.tweens.add({
            targets: this.nuke,
            duration: 25,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.nuke.alpha = 0
    }
}
