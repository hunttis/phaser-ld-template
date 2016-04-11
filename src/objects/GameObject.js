class GameObject extends Phaser.Sprite {

  constructor(game, x, y, key, frame){
    super(game, x, y, key, frame);
  }

  update(){
    // Call the superclass update first
    super.update();

    // Then do whatever you want to do...
  }

}

export default GameObject;
