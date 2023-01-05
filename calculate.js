const btn = document.querySelector('#btn');
const table = document.querySelector('table');
console.log(table.firstChild)


btn.onclick = function(){

    if (table.childElementCount){
        document.querySelectorAll('tr').forEach((element) => element.remove())
    } 

    function calculate (){

        let startingAmount = document.querySelector('#startingAmount').value || 0;
        let monthlyAmount = document.querySelector('#monthlyAmount').value || 0;
        let interestRates = document.querySelector('#interestRates').value || 0;
        let period = document.querySelector('#period').value || 0;
        let invest = document.querySelector('#invest');
        let accumulate = document.querySelector('#accumulate');
        let fromRates = document.querySelector('#fromRates');
        
        let C = parseFloat(startingAmount);
        let i = parseFloat(interestRates);
        let n = parseFloat(period);
        let a = parseFloat(monthlyAmount);
        
        let investAmount = parseFloat(((a*n) + C).toFixed(2));
        invest.value = investAmount;
        let accumulateAmount = parseFloat(((C * ((1 + (i / 100)) ** n)) + (a * (((((1 + (i / 100))) ** n )- 1) / (i / 100)))).toFixed(2));
        accumulate.value = accumulateAmount;
        let fromRatesAmount = parseFloat((accumulateAmount - investAmount).toFixed(2));
        fromRates.value = fromRatesAmount;
    }
        
    
    function createTable(){  
        
        for (let counter = 0; counter < n; counter++){
            
            const newRow = document.createElement('tr');
            const newMonth = document.createElement('td');
            newMonth.innerText = (counter + 1) + "° mês";
            const newData = document.createElement('td');
            newData.innerText = "R$ 0,00";
            table.append(newRow);
            newRow.append(newMonth);
            newRow.append(newData);            
        }
    }
    
    calculate();
    createTable();    

    document.querySelector('section').hidden = false;
    document.querySelector('#table').hidden = false;
}


    
    