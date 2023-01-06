//code fow the calculate button
document.getElementById('calculate-button').addEventListener('click', function(){
    
    //get the player input field by id
    const perPlayerRate = getInputFieldById('player-rate-input-field');

    if(isNaN(perPlayerRate))
    {
        alert("Please Enter a Valid Number For Per Player Rate");
        document.getElementById('player-expense').innerText = '0.00';
        return;
    }

    else{
    
        
        //get the player list item legth
        const playerNumber = document.getElementById('player-list-item');
        const playerNumberLength = playerNumber.children.length;
     
        //get the player expense element by id
        const playerExpense = document.getElementById('player-expense');

        // calculate all praylers total expense
        const playerExpenseTotal = playerNumberLength * perPlayerRate;
        
        //showing the player expense total on the  player expense element area
        setElementValueById('player-expense', playerExpenseTotal.toFixed(2));
    }
    
    
})




//code for the calculate total button
document.getElementById('calculate-total-button').addEventListener('click', function(){
    
    //get the input fields by id
    const managerSalary = getInputFieldById('manager-salary-input-field');
    const coachSalary = getInputFieldById('coach-salary-input-field');

    if(isNaN(managerSalary) || isNaN(coachSalary)){
        
        alert("Please Enter Valid Number For Manager And Coach Salary");
        document.getElementById('total-cost').innerText = '0.00';
        return;
    }

    else{

        //get the player expense element by id 
        const playerExpenseTotalString =  document.getElementById('player-expense').innerText;
        const playerExpenseTotalNumber = parseFloat(playerExpenseTotalString);
    
        //calculate the total cost = Player expense Total + manager salary + coach salary
        const totalCost = playerExpenseTotalNumber + managerSalary + coachSalary;

        //showing the total cost on the  total element area
        setElementValueById('total-cost', totalCost.toFixed(2));

    }
    
})



