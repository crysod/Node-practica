// .js -> por defecto utiliza CommonJs
// .mjs -> para utilizar Es Modules
// cjs -> para utilizar CommonJS

import {sum, sub, mul} from './sum.mjs'

console.log(sum(2,1))
console.log(sub(2,1))
console.log(mul(2,1))