
// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
>> "number" The return value is number because it is stating what 15 is, a number.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
>> "string" The return is string because a string has quotes around it and hello had quotes around it.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
>> "object" The return is object because there are only two data types and it would usually show what type of array it is but because it is not an array,
    it has to be an object.
// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
>> "number" The return was number because Not a Number is equal to zero basically.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
>> "hamburgers" The return is hamburgers because it's showing hamburger plus s.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
>> NaN The return is NaN because hamburgers minus s isn't an actual number / equation.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
>> "johnny5" The return is johnny5 because it's showing johnny plus 5.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
>> NaN The return is NaN because luftbaloons isn't a number.

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );

// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
