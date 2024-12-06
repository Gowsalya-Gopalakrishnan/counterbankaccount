//Question 1: Closure-Based Counter Implementation
function createCounter(){
    let count=0;
    return {
        increment : function(){
            count++;
            console.log(count);
        },
        decrement : function(){
            count--;
            console.log(count);
        }
    }
    // return function increment(){
        
    // }
    // return function decrement(){
        
    // }
    
}
let counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();