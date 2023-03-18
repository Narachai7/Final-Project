var character1 = 'Player1';
var nameimg1 = './2D/' + character1 + '/IdleR_6.png';
var img1 = new Image();
img1.src = nameimg1;

function GamePlayer1() {


    var r = true;
    Player1 = new Sprite(scene, nameimg1, img1.width, img1.height);
    Player1.loadAnimation(img1.width, img1.height, img1.width / nameimg1.charAt(nameimg1.length - 5), img1.height / 1);
    Player1.generateAnimationCycles();
    Player1.setAnimationSpeed(400);
    Player1.setSpeed(0);
    Player1.setPosition(100, 400);
    Player1.playAnimation()
    Player1.falling = true;
    Player1.motionPlay = function () {
        if (keysDown[K_A] && !keysDown[K_V]) {
            r = false;
            if (nameimg1 != './2D/' + character1 + '/RunL_8.png') {
                this.setSpeed(15);
                nameimg1 = './2D/' + character1 + '/RunL_8.png';
                this.setMoveAngle(270);
                img1.src = nameimg1;
                img1.onload = function () {
                    Player1.setImage(nameimg1);
                    Player1.loadAnimation(img1.width, img1.height, img1.width / nameimg1.charAt(nameimg1.length - 5), img1.height / 1);
                    Player1.setAnimationSpeed(400);
                    Player1.generateAnimationCycles();
                };
            }

        } if (keysDown[K_D] && !keysDown[K_V]) {
            r = true;
            if (nameimg1 != './2D/' + character1 + '/RunR_8.png') {
                this.setSpeed(15);
                nameimg1 = './2D/' + character1 + '/RunR_8.png';
                this.setMoveAngle(90);
                img1.src = nameimg1;
                img1.onload = function () {
                    Player1.setImage(nameimg1);
                    Player1.loadAnimation(img1.width, img1.height, img1.width / nameimg1.charAt(nameimg1.length - 5), img1.height / 1);
                    Player1.setAnimationSpeed(400);
                    Player1.generateAnimationCycles();
                };
            }
        } if (keysDown[K_S]) {
            if (!this.falling) {
                this.setSpeed(0);
                nameimg1 = './2D/' + character1 + '/Protection_2.png';
                this.setMoveAngle(90);
                img1.src = nameimg1;
                img1.onload = function () {
                    Player1.setImage(nameimg1);
                    Player1.loadAnimation(img1.width, img1.height, img1.width / nameimg1.charAt(nameimg1.length - 5), img1.height / 1);
                    Player1.setAnimationSpeed(500);
                    Player1.generateAnimationCycles();
                };
            }

        } if (keysDown[K_V]) {
            if (r) { nameimg1 = './2D/' + character1 + '/AttackR_1_4.png'; } else { nameimg1 = './2D/' + character1 + '/AttackL_1_4.png'; }
            if (!this.falling) {
                this.setSpeed(0);
            }

            img1.src = nameimg1;
            img1.onload = function () {
                Player1.setImage(nameimg1);
                Player1.loadAnimation(img1.width, img1.height, img1.width / nameimg1.charAt(nameimg1.length - 5), img1.height / 1);
                Player1.setAnimationSpeed(100);
                Player1.generateAnimationCycles();
            };
        }
        if (keysDown[K_W]) {
            if (r) {
                if (this.falling == false) {
                    this.setPosition(this.x, 400);
                    img1.src = nameimg1;
                    img1.onload = function () {
                        Player1.setImage(nameimg1);
                        Player1.loadAnimation(img1.width, img1.height, img1.width / nameimg1.charAt(nameimg1.length - 5), img1.height / 1);
                        Player1.setAnimationSpeed(1000);
                        Player1.generateAnimationCycles();
                    };
                    this.y -= 5;
                    this.falling = true;
                    this.addVector(0, 25);
                }
            } else {
                if (this.falling == false) {
                    this.setPosition(this.x, 400);
                    img1.src = nameimg1;
                    img1.onload = function () {
                        Player1.setImage(nameimg1);
                        Player1.loadAnimation(img1.width, img1.height, img1.width / nameimg1.charAt(nameimg1.length - 5), img1.height / 1);
                        Player1.setAnimationSpeed(1000);
                        Player1.generateAnimationCycles();
                    };
                    this.y -= 5;
                    this.falling = true;
                    this.addVector(0, 25);
                }
            }
        }

        if (!keysDown[K_A] && !keysDown[K_D] && !keysDown[K_S] && !keysDown[K_V]) {
            if (!this.falling) {
                this.setSpeed(0);
                if (r) { nameimg1 = './2D/' + character1 + '/IdleR_6.png'; } else { nameimg1 = './2D/' + character1 + '/IdleL_6.png'; }
                img1.src = nameimg1;
                // this.setPosition(this.x, 700);
                img1.onload = function () {
                    Player1.setImage(nameimg1);
                    Player1.loadAnimation(img1.width, img1.height, img1.width / nameimg1.charAt(nameimg1.length - 5), img1.height / 1);
                    Player1.setAnimationSpeed(400);
                    Player1.generateAnimationCycles();
                };
            }
        }

        if (!this.falling) {
            this.setPosition(this.x, 400);
        }


    }

    Player1.checkGravity = function () {
        if (r) {
            if (this.falling) {
                this.addVector(180, 1);
                if (this.y >= 400) {
                    if (r) { nameimg1 = './2D/' + character1 + '/IdleR_6.png'; } else { nameimg1 = './2D/' + character1 + '/IdleL_6.png'; }
                    img1.src = nameimg1;
                    img1.onload = function () {
                        Player1.setImage(nameimg1);
                        Player1.loadAnimation(img1.width, img1.height, img1.width / nameimg1.charAt(nameimg1.length - 5), img1.height / 1);
                        Player1.setAnimationSpeed(400);
                        Player1.generateAnimationCycles();
                    };
                    key = 0
                    this.falling = false;
                    this.setSpeed(0);
                }
            }
        } else {
            if (this.falling) {
                this.addVector(180, 1);
                if (this.y >= 400) {
                    if (r) { nameimg1 = './2D/' + character1 + '/IdleR_6.png'; } else { nameimg1 = './2D/' + character1 + '/IdleL_6.png'; }
                    img1.src = nameimg1;
                    img1.onload = function () {
                        Player1.setImage(nameimg1);
                        Player1.loadAnimation(img1.width, img1.height, img1.width / nameimg1.charAt(nameimg1.length - 5), img1.height / 1);
                        Player1.setAnimationSpeed(400);
                        Player1.generateAnimationCycles();
                    };
                    key = 0
                    this.falling = false;
                    this.setSpeed(0);
                }
            }
        }

    }

    return Player1;
}


var character2 = 'Player2';
var nameimg2 = './2D/' + character2 + '/IdleL_5.png';
var img2 = new Image();
img2.src = nameimg2;
var r = false;

function GamePlayer2() {


    Player2 = new Sprite(scene, nameimg2, img2.width, img2.height);
    Player2.loadAnimation(img2.width, img2.height, img2.width / nameimg2.charAt(nameimg2.length - 5), img2.height / 1);
    Player2.generateAnimationCycles();
    Player2.setAnimationSpeed(400);
    Player2.setSpeed(0);
    Player2.setPosition(900, 400);
    Player2.playAnimation()
    Player2.falling = true;
    Player2.motionPlay = function () {
        if (keysDown[K_LEFT] && !keysDown[K_M]) {
            r = false;
            if (nameimg2 != './2D/' + character2 + '/RunL_8.png') {
                this.setSpeed(15);
                nameimg2 = './2D/' + character2 + '/RunL_8.png';
                this.setMoveAngle(270);
                img2.src = nameimg2;
                img2.onload = function () {
                    Player2.setImage(nameimg2);
                    Player2.loadAnimation(img2.width, img2.height, img2.width / nameimg2.charAt(nameimg2.length - 5), img2.height / 1);
                    Player2.setAnimationSpeed(400);
                    Player2.generateAnimationCycles();
                };
            }

        } if (keysDown[K_RIGHT] && !keysDown[K_M]) {
            r = true;
            if (nameimg2 != './2D/' + character2 + '/RunR_8.png') {
                this.setSpeed(15);
                nameimg2 = './2D/' + character2 + '/RunR_8.png';
                this.setMoveAngle(90);
                img2.src = nameimg2;
                img2.onload = function () {
                    Player2.setImage(nameimg2);
                    Player2.loadAnimation(img2.width, img2.height, img2.width / nameimg2.charAt(nameimg2.length - 5), img2.height / 1);
                    Player2.setAnimationSpeed(400);
                    Player2.generateAnimationCycles();
                };
            }
        } if (keysDown[K_DOWN]) {
            if (!this.falling) {
                this.setSpeed(0);
                nameimg2 = './2D/' + character2 + '/Protect_2.png';
                this.setMoveAngle(90);
                img2.src = nameimg2;
                img2.onload = function () {
                    Player2.setImage(nameimg2);
                    Player2.loadAnimation(img2.width, img2.height, img2.width / nameimg2.charAt(nameimg2.length - 5), img2.height / 1);
                    Player2.setAnimationSpeed(500);
                    Player2.generateAnimationCycles();
                };
            }

        } if (keysDown[K_M]) {
            if (r) { nameimg2 = './2D/' + character2 + '/AttackR_1_4.png'; } else { nameimg2 = './2D/' + character2 + '/AttackL_1_4.png'; }
            if (!this.falling) {
                this.setSpeed(0);
            }

            img2.src = nameimg2;
            img2.onload = function () {
                Player2.setImage(nameimg2);
                Player2.loadAnimation(img2.width, img2.height, img2.width / nameimg2.charAt(nameimg2.length - 5), img2.height / 1);
                Player2.setAnimationSpeed(100);
                Player2.generateAnimationCycles();
            };
        }
        if (keysDown[K_UP]) {
            if (r) {
                if (this.falling == false) {
                    this.setPosition(this.x, 400);
                    img2.src = nameimg2;
                    img2.onload = function () {
                        Player2.setImage(nameimg2);
                        Player2.loadAnimation(img2.width, img2.height, img2.width / nameimg2.charAt(nameimg2.length - 5), img2.height / 1);
                        Player2.setAnimationSpeed(1000);
                        Player2.generateAnimationCycles();
                    };
                    this.y -= 5;
                    this.falling = true;
                    this.addVector(0, 25);
                }
            } else {
                if (this.falling == false) {
                    this.setPosition(this.x, 400);
                    img2.src = nameimg2;
                    img2.onload = function () {
                        Player2.setImage(nameimg2);
                        Player2.loadAnimation(img2.width, img2.height, img2.width / nameimg2.charAt(nameimg2.length - 5), img2.height / 1);
                        Player2.setAnimationSpeed(1000);
                        Player2.generateAnimationCycles();
                    };
                    this.y -= 5;
                    this.falling = true;
                    this.addVector(0, 25);
                }
            }
        }

        if (!keysDown[K_LEFT] && !keysDown[K_RIGHT] && !keysDown[K_DOWN] && !keysDown[K_M]) {
            if (!this.falling) {
                this.setSpeed(0);
                if (r) { nameimg2 = './2D/' + character2 + '/IdleR_5.png'; } else { nameimg2 = './2D/' + character2 + '/IdleL_5.png'; }
                img2.src = nameimg2;
                // this.setPosition(this.x, 700);
                img2.onload = function () {
                    Player2.setImage(nameimg2);
                    Player2.loadAnimation(img2.width, img2.height, img2.width / nameimg2.charAt(nameimg2.length - 5), img2.height / 1);
                    Player2.setAnimationSpeed(400);
                    Player2.generateAnimationCycles();
                };
            }
        }

        if (!this.falling) {
            this.setPosition(this.x, 400);
        }

    }

    Player2.checkGravity = function () {
        if (r) {
            if (this.falling) {
                this.addVector(180, 1);
                if (this.y >= 400) {
                    if (r) { nameimg2 = './2D/' + character2 + '/IdleR_5.png'; } else { nameimg2 = './2D/' + character2 + '/IdleL_5.png'; }
                    img2.src = nameimg2;
                    img2.onload = function () {
                        Player2.setImage(nameimg2);
                        Player2.loadAnimation(img2.width, img2.height, img2.width / nameimg2.charAt(nameimg2.length - 5), img2.height / 1);
                        Player2.setAnimationSpeed(400);
                        Player2.generateAnimationCycles();
                    };
                    key = 0
                    this.falling = false;
                    this.setSpeed(0);
                }
            }
        } else {
            if (this.falling) {
                this.addVector(180, 1);
                if (this.y >= 400) {
                    if (r) { nameimg2 = './2D/' + character2 + '/IdleR_5.png'; } else { nameimg2 = './2D/' + character2 + '/IdleL_5.png'; }
                    img2.src = nameimg2;
                    img2.onload = function () {
                        Player2.setImage(nameimg2);
                        Player2.loadAnimation(img2.width, img2.height, img2.width / nameimg2.charAt(nameimg2.length - 5), img2.height / 1);
                        Player2.setAnimationSpeed(400);
                        Player2.generateAnimationCycles();
                    };
                    key = 0
                    this.falling = false;
                    this.setSpeed(0);
                }
            }
        }

    }

    return Player2;
}