let multiplier =1;
// Multiplier kommer når jeg får lavet opgraderinger. Det er dog klar og virker hvis du ændre tallet virker det fint.
let count =(function() {
    let counter = 0;
    return function () {return counter ++ * multiplier;}
    })()

function displaycount(){
    document.getElementById("id").innerHTML = count();
}
// Første click tæller ikke og ved ikke hvorfor det ikke gør.