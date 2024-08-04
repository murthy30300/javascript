var slugify = require('slugify')

let a =slugify('some string') // some-string

// if you prefer something other than '-' as separator
const b = slugify('some strisdjxbkoj___f!@#$ng', '_')  // some_string

console.log(b);
