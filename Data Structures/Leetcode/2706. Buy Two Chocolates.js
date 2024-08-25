/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);
    console.log(prices);
    let mn=money;
    let boughtsuccessfull=false;

    if(prices[0]<=money){
        mn= mn- prices[0];
    }
    if(prices[1]<=mn){
        mn=mn-prices[1];
        boughtsuccessfull=true;
    }

  return  boughtsuccessfull?mn:money;

    
};
