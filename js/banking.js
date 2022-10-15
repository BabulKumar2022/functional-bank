
document.getElementById('deposit-submit').addEventListener('click', function(){
    // console.log('deposit-button clicked')
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseInt(depositAmountText)
    // console.log(depositAmount);

    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseInt(depositTotalText)
    // console.log(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;

    //update balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseInt(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    //clear input field
    depositInput.value = ''
})