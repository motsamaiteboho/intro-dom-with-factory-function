function textBillTotals() {
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function getCallCost() {
        return 2.75;
    }

    function getSmsCost() {
        return 0.75;
    }

    function getWarningLevel() {
        return 30;
    }

    function getCriticalLevel() {
        return 50;
    }

    function makeCall() {
        if (!hasReachedCriticaLevel())
            callCostTotal += 2.75;
    }

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost() {
        return callCostTotal;
    }

    function getTotalSmsCost() {
        return smsCostTotal;
    }

    function sendSms() {
        if (!hasReachedCriticaLevel())
            smsCostTotal += 0.75
    }

    function hasReachedCriticaLevel() {
        return getTotalCost() >= getCriticalLevel() && getTotalCost() > 0;
    }
    function totalClassName() {

        if (hasReachedCriticaLevel()) {
            return "danger";
        }
        if (getTotalCost() >= getWarningLevel()) {
            return "warning";
        }

    }

    return {
        getCallCost,
        getSmsCost,
        getWarningLevel,
        getCriticalLevel,
        makeCall,
        getCallCost,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName
    }
}