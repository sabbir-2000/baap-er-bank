// handle deposit button event

document.getElementById('deposite-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposite-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);


    // update deposite total

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account blance
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
    const newBlanceTotal = previousBlanceTotal + newDepositAmount;
    blanceTotal.innerText = newBlanceTotal;


    // clear the deposit input field
    depositInput.value = '';

})

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText)
    console.log(newWithdrawAmount);
    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update blance
    const blanceTotal = document.getElementById('blance-total');
    const previousBlanceText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceText);
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    blanceTotal.innerText = newBlanceTotal;


    // clear withdraw input
    withdrawInput.value = '';




})