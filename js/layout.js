$(function() {
  var scrollTo = function( $el ) {
    $( 'html, body' ).animate({
      scrollTop: $el.offset().top
    }, 300);
  }

  var initialHash = window.location.hash.substring(1);
  if ( initialHash ) {
    scrollTo( $( '#' + initialHash ) );
  }

  $( 'a' ).click( function( evt ) {
    var $this = $( this ),
      href = $this.attr( 'href' ),
      $target;

    if ( href.indexOf( '#' ) != -1 && href.length > 1 ) { 
      evt.preventDefault();
      $target = $( '#' + href.substring( 1, href.length ) );
      $( 'html, body' ).animate({ scrollTop: $target.offset().top }, 300 );
    }
  });

  $( '.top-link' ).click( function( evt ) {
    console.log('test');
    evt.preventDefault();
    scrollTo( $( 'body' ) );
  });
});
