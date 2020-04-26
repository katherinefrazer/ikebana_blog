const postLinks = document.getElementsByClassName("post-link")

const toggleImage = (element, shouldShow) => {
	let imageContainer = null;
	for (var i = 0; i < element.childNodes.length; i++) {
		const child = element.childNodes[i]
		if (child.className == "fi-container") {
			imageContainer = child
			break;
		}	
	}

	if (shouldShow) {
		imageContainer.style = "display: block;";
	} else {
		imageContainer.style = "display: none;";
	}
}

const showImage = (e) => {
 const element = e.target;
 toggleImage(element, true);
 e.preventDefault();
}

const hideImage = (e) => {
 const element = e.target;
 toggleImage(element, false);
 e.preventDefault();
}

for (var i = 0; i < postLinks.length; i++) {
	const link = postLinks[i]
   	if (link.getAttribute('data-image') != null){
   		link.addEventListener("mouseenter", showImage);
   		link.addEventListener("mouseleave", hideImage);
   	}
}