//variables for buttons
const cat_btn = document.querySelector('#cat_btn');

const dog_btn = document.querySelector('#dog_btn');
//variables for animal placeholders
const cat_result = document.querySelector("#cat_result")//same as querySelector(".result") 
const dog_result = document.getElementById('dog_result');
//add  onClickevents to buttons
cat_btn.addEventListener('click', getRandomCat);

dog_btn.addEventListener('click', getRandomDog);
 //functions for onclicks
    
// https://github.com/public-apis/public-apis
function getRandomCat() {

	fetch('https://aws.random.cat/meow')	
		.then(res => res.json())

		.then(data => {
			cat_result.innerHTML = `

									<img src=${data.file} alt="cat" /> `
		});

}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}
