import PreloadState from 'states/Preload';
import BootState from 'states/Boot';
import GameState from 'states/Game';
import MainmenuState from 'states/Mainmenu';

class Game extends Phaser.Game {

	constructor() {
		super(800, 480, Phaser.AUTO, 'content', null);

		// Create the game states
		this.state.add('BootState', BootState, false);
		this.state.add('PreloadState', PreloadState, false);
		this.state.add('GameState', GameState, false);
		this.state.add('MainmenuState', MainmenuState, false);

		// Start with the bootstate
		this.state.start('BootState');
	}

}

new Game();
