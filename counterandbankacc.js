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

//branch code
//Question 2: Simulating Private Variables with Closures
function createBankAccount(){
    return {
        deposit : function(deposit){
            let balance = 1000;
            depo = balance+deposit;
            console.log("Deposited Amount is:" + depo);
        },
        withdraw : function(withdraw){
                 withdra = depo - withdraw;
                 console.log("Withdraw Amount is :" + withdra);
            if(withdra < 1000)
                console.log("Insufficient Balance");
        },
    }
}
let ans = createBankAccount();
ans.deposit(1000);
ans.withdraw(500);
ans.withdraw(1100);
console.log(ans.balance);