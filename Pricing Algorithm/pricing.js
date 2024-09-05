const BASE_FARE_PASSENGER = 12 //per kilometer
const BASE_FARE_COURIER = 5 //per kilometer 

const MIN_FARE = 50
const MAX_FARE = 10000

const DYNAMIC_MULTIPLIERS = {
    peakTime: 1.2,
    offPeakTime: 0.75,
    highDemand: 1.5,
};

const ROUTE_ADJUSTMENTS = {
    "NRB-MSA": 1.1,
    "NRB-KSM": 1.0,
    "NRB-NKR": 0.9,
    "KSM-MSA": 1.1,
}

function calculateFare(distance, serviceType, additionalFactors = {}) {
    let baseFare = (serviceType === 'passenger') ? BASE_FARE_PASSENGER : BASE_FARE_COURIER;
    let fare = baseFare * distance

    let dynamicFactor = getDynamicFactor(additionalFactors)
    fare *= dynamicFactor
    let routeAdjustment = getRouteAdjustment(additionalFactors.route)
    fare *= routeAdjustment

    if (serviceType === 'courier') {
        fare += calculateCourierCharges(additionalFactors)
    }

    fare = applyDiscounts(fare, additionalFactors.discounts)
    fare = applySurcharges(fare, additionalFactors.surcharges)

    fare = Math.max(MIN_FARE, Math.min(fare, MAX_FARE))

    return fare
}

function getDynamicFactor({ isPeakTime, isHighDemand }) {
    if (isPeakTime) {
        return DYNAMIC_MULTIPLIERS.peakTime
    } else if (isHighDemand) {
        return DYNAMIC_MULTIPLIERS.highDemand
    } else {
        return DYNAMIC_MULTIPLIERS.offPeakTime
    }
}


function getRouteAdjustment(route) {
    return ROUTE_ADJUSTMENTS[route] || 1.0
}

function calculateCourierCharges({ weight, volume, specialHandling }) {
    // first 1.25 kg free, then additional weight charge per kg
    let freeWeight = 1.25
    let weightCharge = (weight > freeWeight) ? (weight - freeWeight) * 6 : 0
    let specialHandlingCharge = specialHandling ? 300 : 0

    return weightCharge + specialHandlingCharge
}


function applyDiscounts(fare, discounts = []) {
    let discountAmount = 0
    discounts.forEach(discount => {
        if (discount.type === 'percentage') {
            discountAmount += fare * (discount.value / 100)
        } else if (discount.type === 'fixed') {
            discountAmount += discount.value
        }
    })
    return fare - discountAmount
}

function applySurcharges(fare, surcharges = []) {
    let surchargeAmount = 0
    surcharges.forEach(surcharge => {
        if (surcharge.type === 'percentage') {
            surchargeAmount += fare * (surcharge.value / 100)
        } else if (surcharge.type === 'fixed') {
            surchargeAmount += surcharge.value
        }
    })
    return fare + surchargeAmount
}



let fare = calculateFare(80, 'passenger', {
    isPeakTime: false,
    isHighDemand: false,
    route: "KSM-NRB",
    discounts: [{
        type: 'percentage',
        value: 5
    }],
    surcharges: [{
        type: 'fixed',
        value: 100
    }]
})

console.log(`Total Bus Fare: KES ${fare.toFixed(2)}`)
