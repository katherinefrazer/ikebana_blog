const postLinks = document.getElementsByClassName("post-link")

const toggleImage = (element, shouldShow) => {
	const imageContainer = element.nextElementSibling;
	if (shouldShow) {
		imageContainer.style = "display: block;";
	} else {
		imageContainer.style = "display: none;";
	}
}

const showImage = (e) => {
 const element = e.target;
 toggleImage(element, true);
}

const hideImage = (e) => {
 const element = e.target;
 toggleImage(element, false);
}

for (var i = 0; i < postLinks.length; i++) {
	const link = postLinks[i]
   	if (link.getAttribute('data-image') != null){
   		link.addEventListener("mouseenter", showImage);
   		link.addEventListener("mouseleave", hideImage);
   	}
}