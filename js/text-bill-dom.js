// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn");

//fdf
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");

//link the factory functions
var txtBillTotal = textBillTotals(); 
//add an event listener for when the add button is pressed
function textBillTotal() {
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call") {
        txtBillTotal.makeCall();
    }
    else if (billTypeEntered === "sms") {
        txtBillTotal.sendSms();
    }


    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = txtBillTotal.getTotalCallCost().toFixed(2);
    smsTotalElem.innerHTML = txtBillTotal.getTotalSmsCost().toFixed(2);
    totalCostElem.innerHTML = txtBillTotal.getTotalCost().toFixed(2);

    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");

    //color the total based on the criteria
    totalCostElem.classList.add(txtBillTotal.totalClassName());
}
textTotalAddBtn.addEventListener('click', textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen