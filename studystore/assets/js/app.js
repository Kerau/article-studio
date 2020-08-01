$(document).ready(function(){

	var owl = $('.partners');
	owl.owlCarousel({
	  margin: 4,
	  loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: false,
		smartSpeed: 700,
	  responsive: {
		0: {
		  items: 1
		},

		768: {
		  items: 2
		},
		1000: {
		  items: 3
		}
	  }
	})

	$('.review').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		dots: true
	});





	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('myImg');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
		modal.style.display = "none";
	}

	});

hljs.configure({tabReplace: '  '});
hljs.initHighlightingOnLoad();