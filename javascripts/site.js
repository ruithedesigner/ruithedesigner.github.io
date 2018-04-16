// ¯\_(ツ)_/¯

var whereMyDomAt = function( callback ) {
  document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

whereMyDomAt(function() {

	// Window Height
	var winHeight = document.documentElement.clientHeight,
			winWidth = document.documentElement.clientWidth,
			circleEl = document.querySelector('.circle'),
			diameterVal = calcDiameter();

	circleEl.style.width = diameterVal + 'px';
	circleEl.style.height = diameterVal + 'px';
	circleEl.style.top = '-' + ( diameterVal / 2 ) + 'px';
	circleEl.style.right = '-' + ( diameterVal / 2 ) + 'px';

	window.addEventListener( "resize", function(){

		winHeight = document.documentElement.clientHeight,
		winWidth = document.documentElement.clientWidth,
		diameterVal = calcDiameter();

		circleEl.style.width = diameterVal + 'px';
		circleEl.style.height = diameterVal + 'px';
		circleEl.style.top = '-' + ( diameterVal / 2 ) + 'px';
		circleEl.style.right = '-' + ( diameterVal / 2 ) + 'px';

	}, true);

	function calcDiameter(){
		// Calculate the minimum size of the circle to cover a given rectangle
		return ( Math.sqrt( Math.pow(winHeight, 2) + Math.pow(winWidth, 2 ) ) * 2 );
	}

	function scaleCircle(){

		if( !circleEl.classList.contains('active') ){

			circleEl.classList.add('active');

		} else {

			circleEl.classList.remove('active');

		}

	}

	// Functions

	var lightboxTargets = document.querySelectorAll( '.grid__thumb' );

	function detectUrl(){

		var hash = window.location.hash;

		if( hash.length ){

			openLightbox( hash );

		}

	}

	function openLightbox( hash ){

		for( var i = 0; i < lightboxTargets.length; i++ ){

			if( lightboxTargets[i].hash === hash ){

				var target = lightboxTargets[i].dataset.featherlight,
						$match = $( lightboxTargets[i] );

				$.featherlight( $match, { ajax: target } );

			}

		}

	}

	$( lightboxTargets ).click( function( e ){
		if( e.currentTarget.hash.length > 1 ){
			window.location.hash = e.currentTarget.hash;
		}
	});

	detectUrl();

	// Adds or Removes 'active' class to supplied elements
	function activeToggle( el ){

		if( !el.classList.contains( 'active' ) ){

			el.classList.add( 'active' );

		} else {

			el.classList.remove( 'active' );

		}

	}

	// Debounce
	function debounce(func, wait, immediate) {

		var timeout;

		return function() {

			var context = this,
					args = arguments;

			var later = function() {

				timeout = null;

				if ( !immediate ) func.apply( context, args );

			};

			var callNow = immediate && !timeout;

			clearTimeout( timeout );

			timeout = setTimeout( later, wait );

			if (callNow) func.apply( context, args );

		};

	};


	// Menu
	var menuToggle = document.querySelector( '.hamburger' ),
			menuWrap = document.querySelector( '.menu__wrap' ),
			menuCircle = document.querySelector( '.circle' ),
			menuStatus = false;

	menuToggle.addEventListener( "click", function(){

		scaleCircle();

		if( !menuWrap.classList.contains( 'active' ) ){

			menuStatus = true;
			menuCircle.classList.add( 'expand' );

			setTimeout( function(){
				menuWrap.classList.add( 'active' );
				menuToggle.classList.add( 'is-active' );
			}, 200);

		} else {

			menuCircle.classList.remove( 'expand' );
			menuWrap.classList.remove( 'active' );
			menuToggle.classList.remove( 'is-active' );
			menuStatus = false;

		}

	});

	if( document.querySelector( '.next' ) ){
		var el = document.querySelector( '.next' );
		setTimeout( function(){
			el.classList.add('active');
		}, 1000)
	}

  if( document.querySelector( '.home-btn' ) ){
    var el = document.querySelector( '.home-btn' );
    setTimeout( function(){
      el.classList.add('active');
    }, 1000)
  }

	// Home Animations
	if( document.querySelector( '.view__home' ) ){

		var clouds = document.querySelector( '.icon-clouds' ),
			flower = document.querySelector( '.icon-flower' ),
			orb = document.querySelector( '.orb--big' ),
			logo = document.querySelector( '.icon-logo' ),
			slideIn = document.querySelector( '.slide-in' ),
      homeb = document.querySelector( '.home-btn' ),
			next = document.querySelector( '.next' );

		function homeLoad(){

			// orb, flowers, cloud, logo
			setTimeout( function(){
				activeToggle( orb );
			}, 500);

			setTimeout( function(){
				activeToggle( flower );
			}, 1000 );

			setTimeout( function(){
				activeToggle( clouds );
				clouds.classList.add('derp');
			}, 1500 );

			setTimeout( function(){
				activeToggle( logo );
			}, 2000 );

			setTimeout( function(){
				activeToggle( slideIn );
			}, 2500 );

			setTimeout( function(){
				activeToggle( next );
			}, 1400 );

      setTimeout( function(){
        activeToggle( homeb );
      }, 1400 );

		}

		// Init
		setTimeout( function(){
			homeLoad();
		}, 500);

	}

	// About Animations
	if( document.querySelector( '.view__about' ) ){

		function aboutLoad(){
			var about = document.querySelector('.view__about'),
					logo = about.querySelector('.icon-logo__dark'),
					orbSmall = about.querySelector('.orb--small'),
					orbBig = about.querySelector('.orb--big'),
					clouds = about.querySelector('.icon-clouds-2'),
					flower = about.querySelector('.icon-flower-2'),
					textBlock = about.querySelector('.text-block'),
					next = document.querySelector( '.next' );

			setTimeout( function(){ activeToggle( next ) }, 1800);

			setTimeout( function(){
				activeToggle( logo );
			}, 50 );

			setTimeout( function(){
				activeToggle( orbSmall );
				activeToggle( orbBig );
			}, 800 );

			setTimeout( function(){
				activeToggle( clouds );
			}, 800 );

			setTimeout( function(){
				activeToggle( flower );
			}, 1200 );

			setTimeout( function(){
				activeToggle( textBlock );
			}, 1900 );

		}

		// Init
		setTimeout( function(){
			aboutLoad();
		}, 500);

	}

	if ( document.querySelector( '.view__portfolio' ) ){
		el = document.querySelector( '.view__portfolio' );
		target = document.querySelector( '.orb--big' );
		targetTwo = document.querySelector( '.orb--small' );
		// boxRollovers( el, target );
		// boxRollovers( el, targetTwo );
	} else if ( document.querySelector( '.view__contact' ) ){
		el = document.querySelector( '.view__contact' );
		target = document.querySelector( '.orb--big' );
		targetTwo = document.querySelector( '.orb--small' );
		// boxRollovers( el, target );
		// boxRollovers( el, targetTwo );
	} else if ( document.querySelector( '.view__about' ) ){
		el = document.querySelector( '.view__about' );
		target = document.querySelector( '.orb--big' );
		targetTwo = document.querySelector( '.orb--small' );
		// boxRollovers( el, target );
		// boxRollovers( el, targetTwo );
	} else if ( document.querySelector( '.view__home' ) ){
		el = document.querySelector( '.view__home' );
		target = document.querySelector( '.orb--big' );
		// boxRollovers( el, target );
	}




  var bodyEl = $('body'),
      windowWidth = $(window).innerWidth(),
      windowHeight = $(window).innerHeight(),
      halfWindowWidth = windowWidth / 2,
      halfWindowHeight = windowHeight / 2;

  function mouseMovement(moveAmount) {

  	bodyEl.mousemove(function( e) {

  	  	var cursorX = e.pageX;
      	var cursorY = e.pageY;

      	var moveX = (cursorX - (halfWindowWidth))*-moveAmount;
  		  var moveY = (cursorY - (halfWindowHeight))*-moveAmount;
  		  var rotateY = moveX*-0.02;
      	TweenMax.to($('.orb'),
  			1.175, {
  				x: moveX,
  				y: moveY,
  				rotationY: rotateY
  			}
  		);
  		TweenMax.to($('.figure-mover.active .js-figure'),
  			1.175, {
  				x: moveX*0.4,
  				y: moveY*0.8,
  				rotationY: rotateY*0.4
  			}
  		);
  	});

  }

  mouseMovement(.04 );

    // old code start here
	if( document.querySelector( '.view__portfolio' ) ){
		// Init
		setTimeout( function(){
			portfolioLoad();
		}, 500);

		function portfolioLoad(){

			var portfolio = document.querySelector( '.view__portfolio' ),
					logo = portfolio.querySelector( '.icon-logo__dark' ),
					orbBig = portfolio.querySelector( '.orb--big' ),
					craneUp = portfolio.querySelector( '.crane-up' ),
					craneDown = portfolio.querySelector( '.crane-down' ),
					umbrella = portfolio.querySelector( '.umbrella' ),
					orbSmall = portfolio.querySelector( '.orb--small' ),
					lantern = portfolio.querySelector( '.lantern' ),
					flowerPot = portfolio.querySelector( '.flower-pot' ),
					next = document.querySelector( '.next' );

			setTimeout( function(){ activeToggle( orbBig )}, 400);
			setTimeout( function(){ activeToggle( craneUp )}, 800);
			setTimeout( function(){ activeToggle( craneDown )}, 1000);
			setTimeout( function(){ activeToggle( umbrella )}, 1200);
			setTimeout( function(){ activeToggle( orbSmall )}, 1400);
			setTimeout( function(){ activeToggle( lantern )}, 1400);
			setTimeout( function(){ activeToggle( flowerPot )}, 1800);
			setTimeout( function(){ activeToggle( next )}, 1800);

			setTimeout( function(){
				activeToggle( logo );
			}, 400);
		}
	}



});
