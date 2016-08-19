// alert("hello")
// prompt("hello")
// window.console.log('hello')
// window.console.log('hello " ""   ')


var my_strapline = $('#strapline').text();
console.log( my_strapline );
$('#strapline').text('corolla');

var count = 10;

for( var i=0; i<count; i++ ){

    yo( i );

}

// moptimis verison

function yo( number ){

    console.log( 'yo!' + number );

}