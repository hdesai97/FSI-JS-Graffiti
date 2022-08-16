let header = document.querySelector("#page-header")
header.style.textAlign = "left"
//
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '80px'
}

let dogName = document.querySelectorAll('.dog-name')
for(let i = 0; i <dogName.length; i++){
dogName[i].style.textAlign = "left"
}

let footer = document.querySelectorAll('.footer')
for(let i = 0; i <footer.length; i++){
footer[i].style.color = "red"
}
// Select some elements...