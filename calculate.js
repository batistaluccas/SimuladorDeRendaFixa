const btn = document.querySelector('#btn');
const tBody = document.querySelector('tbody');
const newRow = document.createElement('tr');
const newMonth = document.createElement('td');
newMonth.innerText = "x° mês";
const newData = document.createElement('td');
newData.innerText = "R$ 0,00";

tBody.append(newRow); /* para aparecer antes deve ser .prepend */
newRow.append(newMonth);
newRow.append(newData);

btn.onclick = function(){

    let startingAmount = document.querySelector('#startingAmount').value || 0;
    let monthlyAmount = document.querySelector('#monthlyAmount').value || 0;
    let interestRates = document.querySelector('#interestRates').value || 0;
    let period = document.querySelector('#period').value || 0;
    let accumulate = document.querySelector('#accumulate')
    let C = parseFloat(startingAmount);
    let i = parseFloat(interestRates);
    let n = parseFloat(period);
    let a = parseFloat(monthlyAmount);

    let invest = (a*n) + C;
    let accumulateAmount = parseFloat(((C * ((1 + (i / 100)) ** n)) + (a * (((((1 + (i / 100))) ** n )- 1) / (i / 100)))).toFixed(2));
    accumulate.value = accumulateAmount;
}


    
    