function getInputValue(inputId){
    const Input = document.getElementById(inputId);
    const AmountText = Input.value;
    const AmountValue = parseInt(AmountText)
    //clear input field
    Input.value = ''

    return AmountValue;
}

 function updateTotalField(totalFieldId, Amount){
    // debugger;
    const updateTotal = document.getElementById(totalFieldId);
    const updateTotalText = updateTotal.innerText;
    const previousUpdateTotal = parseInt(updateTotalText)
    updateTotal.innerText = previousUpdateTotal + Amount;
 }

 function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseInt(balanceTotalText);
  if(isAdd== true){
    balanceTotal.innerText = previousBalanceTotal + amount;
  }else{
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
 }




    document.getElementById('deposit-submit').addEventListener('click', function(){
    // console.log('deposit-button clicked')
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseInt(depositAmountText)
    // console.log(depositAmount);
    depositAmount = getInputValue('deposit-input');

    //get current deposit
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseInt(depositTotalText)
    // depositTotal.innerText = previousDepositTotal + depositAmount;
        // console.log(depositTotalText);
        updateTotalField('deposit-total', depositAmount)

    // update balance via deposit

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseInt(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    updateBalance(depositAmount, true)
 
})
//------------------------------------------------------------------------------
// function for withdraw

    document.getElementById('withdraw-submit').addEventListener('click', function(){
    // console.log('clicked')
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // // console.log(withdrawAmountText);
    // const withdrawAmount = parseInt(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');

    //get current withdraw
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal =  parseInt(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    // console.log(previousWithdrawTotal);
    updateTotalField('withdraw-total', withdrawAmount)
    // update balance via withdraw

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseInt(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    updateBalance(withdrawAmount, false)
})