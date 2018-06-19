const startScene = document.querySelector('.scene.--start');
const firstScene = document.querySelector('.scene.--one');
const secondScene = document.querySelector('.scene.--two');
const thirdScene = document.querySelector('.scene.--three');
const fourScene = document.querySelector('.scene.--four');
const fiveScene = document.querySelector('.scene.--five');
const sixScene = document.querySelector('.scene.--six');
const sevenScene = document.querySelector('.scene.--seven');
const eightScene = document.querySelector('.scene.--eight');
const nineScene = document.querySelector('.scene.--nine');
const endScene = document.querySelector('.scene.--end');

startScene.addEventListener('click', startsScene);

function startsScene(){
	startScene.classList.remove('active');
	firstScene.classList.add('active');

	setTimeout(oneScene, 5000);
}

function oneScene(){
	firstScene.classList.remove('active');
	secondScene.classList.add('active');

	setTimeout(twoScene, 5000);
}

function twoScene(){
	secondScene.classList.remove('active');
	thirdScene.classList.add('active');

	setTimeout(threeScene, 5000);
}

function threeScene(){
	thirdScene.classList.remove('active');
	fourScene.classList.add('active');

	setTimeout(fourthScene, 5000);
}

function fourthScene(){
	fourScene.classList.remove('active');
	fiveScene.classList.add('active');

	setTimeout(fivethScene, 5000);
}

function fivethScene(){
	fiveScene.classList.remove('active');
	sixScene.classList.add('active');

	setTimeout(sixthScene, 5000);
}

function sixthScene(){
	sixScene.classList.remove('active');
	sevenScene.classList.add('active');

	setTimeout(seventhScene, 5000);
}

function seventhScene(){
	sevenScene.classList.remove('active');
	eightScene.classList.add('active');

	setTimeout(eighthScene, 5000);
}

function eighthScene(){
	eightScene.classList.remove('active');
	nineScene.classList.add('active');

	setTimeout(ninethScene, 5000);
}

function ninethScene(){
	nineScene.classList.remove('active');
	endScene.classList.add('active');

	setTimeout(endScene, 5000);
}

endScene.addEventListener('click', endsScene);
function endsScene(){
	endScene.classList.remove('active');
	firstScene.classList.add('active');

	setTimeout(oneScene, 6500);
}