function getInputValue(inputId){
    const Input = document.getElementById(inputId);
    const AmountText = Input.value;
    const AmountValue = parseInt(AmountText)
    //clear input field
    Input.value = ''

    return AmountValue;
}

 




    document.getElementById('deposit-submit').addEventListener('click', function(){
    // console.log('deposit-button clicked')
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseInt(depositAmountText)
    // console.log(depositAmount);
    depositAmount = getInputValue('deposit-input');

    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseInt(depositTotalText)
    // console.log(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance via deposit

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseInt(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
 
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
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal =  parseInt(withdrawTotalText);
    console.log(previousWithdrawTotal);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance via withdraw

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseInt(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
   
})