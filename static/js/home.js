$.fn.fullpage({
	verticalCentered: true,
	resize : true,
	slidesColor: ['#fff', '#002050', '#fff', '#0072c6', '#002050'],
	anchors: ['Inicio', 'Que_Hacemos', 'Clientes', 'Cuarta'],
	scrollingSpeed: 1000,
	easing: 'easeInOutBack',
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Inicio', 'Que Hacemos','Clientes','Cuarta'],
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	autoScrolling: true,
	scrollOverflow: true,
	css3: true,
	paddingTop: '50px',
	paddingBottom: '50px',
	fixedElements: '#element1, .element2',
	normalScrollElements: '#element1, .element2',
	keyboardScrolling: true,
	touchSensitivity: 5,

	//events
	onLeave: function(index, direction){},
	afterLoad: function(anchorLink, index){
		//section 2
		if(index == 2){
			//moving the image
			$('#section1').find('img').delay(500).animate({
				left: '0%'
			}, 1500, 'easeOutExpo');
			
			$('#section1').find('p').first().fadeIn(1800, function(){
				$('#section1').find('p').last().fadeIn(1800);
			});;
			
		}
		
		//section 3
		if(anchorLink == '3rdPage'){
			//moving the image
			$('#section2').find('.intro').delay(500).animate({
				left: '0%'
			}, 1500, 'easeOutExpo');
		}
	},
	afterRender: function(){},
	afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
	onSlideLeave: function(anchorLink, index, slideIndex, direction){}
});