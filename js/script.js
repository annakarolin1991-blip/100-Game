/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'azra': {
		name: 'Азра',
		color: '#c6a56a',
		sprites: {
			normal: 'azra_neutral.png'
		}
	}
});

monogatari.script ({
	'Start': [
		'show scene #1a1614 with fadeIn',
		'show character azra normal at center with fadeIn',
		'Дождь барабанил по высоким окнам дворца.',
		'azra Отец вызывает в малый совет. Кассиан уже там.',
		{
			'Choice': {
				'Dialog': 'azra Что сказать, когда я войду?',
				'Calm': {
					'Text': 'Доброе утро, отец. Кассиан.',
					'Do': 'jump Calm'
				},
				'Direct': {
					'Text': 'Вы уже решили, кого отправите?',
					'Do': 'jump Direct'
				}
			}
		}
	],

	'Calm': [
		'azra Доброе утро, отец. Кассиан.',
		'Она улыбнулась брату и села. Вопрос о Назирете пока остался при ней.',
		'end'
	],

	'Direct': [
		'azra Вы уже решили, кого отправите?',
		'Кассиан поднял глаза. Отец не ответил сразу.',
		'end'
	]
});