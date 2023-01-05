const btn = document.querySelector('#btn');
const table = document.querySelector('table');


btn.onclick = function(){

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

    if (table.childElementCount){
        document.querySelectorAll('tr').forEach((element) => element.remove())
    } 

    function calculateResult (){
        
        let investAmount = parseFloat(((a*n) + C).toFixed(2));
        invest.value = investAmount;
        let accumulateAmount = parseFloat(((C * ((1 + (i / 100)) ** n)) + (a * (((((1 + (i / 100))) ** n )- 1) / (i / 100)))).toFixed(2));
        accumulate.value = accumulateAmount;
        let fromRatesAmount = parseFloat((accumulateAmount - investAmount).toFixed(2));
        fromRates.value = fromRatesAmount;   
    }

    function calculateAmountByMonth(){
        totalByMonth = new Array(n);
        for (let counter = 1; counter <= n; counter++){
            totalByMonth [(counter-1)] = (((C * ((1 + (i / 100)) ** counter)) + (a * (((((1 + (i / 100))) ** counter )- 1) / (i / 100))))
            -
            ((C * ((1 + (i / 100)) ** (counter-1))) + (a * (((((1 + (i / 100))) ** (counter-1))- 1) / (i / 100))))) 
            - 
            a;    
        }
    }            

    function createTable(){  
        
        for (let counter = 0; counter < n; counter++){
            
            const newRow = document.createElement('tr');
            const newMonth = document.createElement('td');
            newMonth.innerText = (counter + 1) + "° mês";
            const newData = document.createElement('td');
            newData.innerText = "R$ "+parseFloat(totalByMonth[counter]).toFixed(2);
            table.append(newRow);
            newRow.append(newMonth);
            newRow.append(newData);            
        }
    }
    
    calculateResult();
    calculateAmountByMonth();
    createTable();    

    document.querySelector('section').hidden = false;
    document.querySelector('#table').hidden = false;
}


    
    