/*PROJECT EULER
* franckyvee, sonjewer
* */

import {compute_sum_ab_below} from './problems/problem_1.js';
import {even_fibo} from "./problems/problem_2.js";
import {largest_prime} from "./problems/problem_3.js";

// euler prob 1
console.log(`and the answer is (P1): ${compute_sum_ab_below()}`)

// euler prob 1
console.log(`and the answer is (P2): ${even_fibo(1, 2, 100)}`)
console.log(`and the answer is (P3): ${largest_prime(1000)}`)
console.log(`and the answer is (P3): ${largest_prime()}`)

/*ok - let's turn that into some sort of small program*/

class MainProgram {
    constructor() {
    }
    run(){
        /*basically displays list of problems & then ask to select one to run that problem & get its solution for a specific set of inputs
        * also allows to simply exit */
    }


}