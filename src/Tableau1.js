class Tableau1 extends Phaser.Scene {
    preload() {
        //preload fond d'écran
        this.load.image('bgimg', 'assets/images/bgimg.jpg');
        for (let i = 1; i <= 3; i++) {
            this.load.image('taskbar' + i, 'assets/images/taskbar' + i + '.png');
        }
        //preload pops ups
        this.load.image('error', 'assets/images/error.png');


    }


    create() {
        //mon fond d'écran
        this.bg1container = this.add.container(0, 0);

        this.background = this.add.image(0, 0, 'bgimg').setOrigin(0, 0);


        this.taskbar = this.add.image(0, 1055, 'taskbar1').setOrigin(0, 0);


        this.taskbar2 = this.add.image(90, 1055, 'taskbar2').setOrigin(0, 0);


        this.taskbar2bis = this.add.image(620, 1055, 'taskbar2').setOrigin(0, 0);


        this.taskbar2tis = this.add.image(1150, 1055, 'taskbar2').setOrigin(0, 0);


        this.taskbar2qis = this.add.image(1400, 1055, 'taskbar2').setOrigin(0, 0);


        this.taskbar3 = this.add.image(1840, 1055, 'taskbar3').setOrigin(0, 0);


        //mes pops ups
        this.fg1container = this.add.container(0, 0);

        this.error = this.add.image(700, 400, 'error').setOrigin(0, 0);

        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    update() {

        if (keyA.isDown) {
            console.log('A');
        }
    }
}
