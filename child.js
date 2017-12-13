
/*
process.argv  传来的参数都在这里
 */
let add = function(){
    console.log( process.argv )
    let a = parseInt( process.argv[2])  + parseInt(process.argv[3]);
    console.log( a )
}
add();

process.on('message', function(m) {
    console.log('Child listen:', m);
});

process.send({ message: 'You love me'});