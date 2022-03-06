var videoList = [
		{ 
			 url:"https://www.youtube.com/embed/0RdgrcBfoss",
			 title:"On The Floor Blueberry Muffin Dayana Cover"
		},
		{ 
			 url:"https://www.youtube.com/embed/lVue1Zy9YzE",
			 title:"Birds of Prey 2020 Joker Serena-Safari song"
		},
		{ 
			 url:"https://www.youtube.com/embed/YKLX3QbKBg0",
			 title:"Joker BGM Song Bass Boosted Song"
		},
		{ 
			 url:"https://www.youtube.com/embed/cX6g4cbVBwI",
			 title:"Najaa Full Song Sooryavanshi Aksha"
		}
	];


	setTimeout(function(){document.getElementById("header").style.display="none";},5000);
	var player = document.getElementById("iframe");
	var vtBox = document.getElementById("vt-box");
	var vTitle = document.getElementById("vt");

	function p1(){
		player.style.display="block";vtBox.style.display="block";
		player.setAttribute("src",videoList[0].url+"?autoplay=1");
		vTitle.innerText=videoList[0].title;
	}

	function p2(){
		player.style.display="block";vtBox.style.display="block";
		player.setAttribute("src",videoList[1].url+"?autoplay=1");
		vTitle.innerText=videoList[1].title;
	}

	function p3(){
		player.style.display="block";vtBox.style.display="block";
		player.setAttribute("src",videoList[2].url+"?autoplay=1");
		vTitle.innerText=videoList[2].title;
	}

	function p4(){
		player.style.display="block";vtBox.style.display="block";
		player.setAttribute("src",videoList[3].url+"?autoplay=1");
		vTitle.innerText=videoList[3].title;
	}