// // Select Landing Page Element
// let landingPage = document.querySelector(".landing-page");

// // Get Array Of Imgs
// let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// // Function To Randomize Imgs
// function randomizeImgs() {

 

//     backgroundInterval = setInterval(() => {

//       // Get Random Number
//       let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
//       // Change Background Image Url 
//       landingPage.style.backgroundImage = 'url("imges/' + imgsArray[randomNumber] + '")';
    
//     }, 1000);

//   }



// randomizeImgs();
console.log("fff")

	
			var swiper = new Swiper(".mySwiper", {
				spaceBetween: 30,
				centeredSlides: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});