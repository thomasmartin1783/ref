const svg = document.querySelectorAll('#svg path')


for(let i=0; i < svg.length ; i++){

	console.log(`Letter ${i} is ${svg[i].getTotalLength()}`)

}
