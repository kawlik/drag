import { Game } from './game';

const game = new Game(document.body);

window.addEventListener('keypress', ({ key }) => {
	if (key.toUpperCase() === ' ') {
		game.toggle();
	}
});
