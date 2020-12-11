let multiplier = 1;
// Multiplier kommer når jeg får lavet opgraderinger. Det er dog klar og virker hvis du ændre tallet virker det fint.
let count =(function() {
    let counter = 0;
    return function () {return counter ++ * multiplier;}
})()

function displaycount(){
    document.getElementById("clicks").innerHTML = count();
}
// Første click tæller ikke og ved ikke hvorfor det ikke gør.

//let boughtcount =(function() {
//    let boughtcounter = 0;
//    if (counter = 100 * multiplier){
//        return function () {return boughtcounter +=1}        
//    }
//})()

//function displayboughtcount(){
//    document.getElementById("bought").innerHTML = boughtcount();
//}