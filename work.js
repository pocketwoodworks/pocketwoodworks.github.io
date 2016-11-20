  var page = 0;


  var photoPages = [
  		["w1.png", "w34.png", "w13.png", 
  		"t2.png", "t3.png", "t4.png",
  		"w18.png", "w21.png", "w25.png"],

  		["w26.png", "w7.png", "w5.png",
  		"t8.png", "t1.png", "t6.png",
  		"w32.png","w20.png", "w27.png"
  		],

  		["w2.png", "w12.png", "w15.png",
  		"w19.png", "w29.png", "w31.png",
  		"w22.png","w11.png", "w4.png"
  		]

  		
  ];


  $(document).ready(function() {
      $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();
      $("#leftButton").click(function(){pageLeft()});
      $("#rightButton").click(function(){pageRight()});
      disablePageLeft();
      populateGallery(page);
    
  });



  function populateGallery(photoPage){
  	console.log(page)
  	emptyGallery();

  	// Load the photo thumbnails
  	for(i = 0; i < photoPages[photoPage].length; i++){
  		var photoCode = '<a class="fancybox" rel="group" href="photos/' + photoPages[photoPage][i] + '"><img src="photos/thumbnail_' 
  							+ photoPages[photoPage][i] + '" alt="" ></a>'
  		if(i < 3){
  			$(".col-1").append(photoCode);

  		}
  		if(i >= 3 && i < 6){
  			$(".col-2").append(photoCode);
  		}
  		if(i >= 6){
  			$(".col-3").append(photoCode);
  		}
  	}

  	// Preload the real photos in anticipation of the user clicking on a picture
  	preloadFullPhotos(photoPages[page]);
  }

  function pageRight(){

    if(page >= photoPages.length-1){
    	disablePageRight();
    }
    else if(page == photoPages.length-2){
    	page++;
    	disablePageRight();
    	populateGallery(page);
    }
    else{
    	page++;
		reenablePageLeft();
    	populateGallery(page);
    	
    }
  }

  function pageLeft(){


  	if(page <= 0){
    	disablePageLeft();
    }
    else if(page == 1){
    	page--;
    	disablePageLeft();
    	populateGallery(page);
    }
    else{
    	page--;
    	
    	reenablePageRight();
    	populateGallery(page);
    	
    }
  }


  function disablePageRight(){
  //	$("#rightButton").click(function(){return false;});
  	$("#rightButton").css('color', 'lightgray');
  }

  function disablePageLeft(){
  //	$("#leftButton").click(function(){return false;});
  	$("#leftButton").css('color', 'lightgray');
  }

  function reenablePageRight(){
   // $("#rightButton").click(function(){pageRight()});
    $("#rightButton").css('color', 'black');
  }

  function reenablePageLeft(){
  //	$("#leftButton").click(function(){pageLeft()});
  	$("#leftButton").css('color', 'black');
  }

  function emptyGallery(){
  	$(".col-1").empty();
  	$(".col-2").empty();
  	$(".col-3").empty();
  }

function preloadFullPhotos(arrayOfImages) {

	preloadArray = arrayOfImages.slice();

	for(i = 0; i < preloadArray.length; i++){
		preloadArray[i] = 'photos/' + preloadArray[i];
	}
    $(preloadArray).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}




