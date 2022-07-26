try {
somethingVeryDangerous();
} catch (e) {
if (e instanceof TypeError) {
// deal with TypeError exceptions
} else if (e instanceof RangeError) {
// deal with RangeError exceptions
} else if (e instanceof EvalError) {
// deal with EvalError exceptions
} else {
//deal with all other exceptions
throw e; //rethrow
}