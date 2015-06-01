/* -------------------------------------------------------------------------- *\
 	A Basic Closures Example
 	src: http://skilldrick.co.uk/2011/04/closures-explained-with-javascript/ 
\* -------------------------------------------------------------------------- */
function person(name) {
    function get() {
        return name;
    }
    
    function set(newName) {
        name = newName;
    }
    
    return [get, set];
}

var getSetDave = person('Dave');
var getDave = getSetDave[0];
var setDave = getSetDave[1];

alert(getDave()); //'Dave'

setDave('Bob');

alert(getDave()); //'Bob'


var getSetMary = person('Mary');
var getMary = getSetMary[0];
var setMary = getSetMary[1];

alert(getMary()); //'Mary'