export const deliveryDayAction  = (dateDay: string) => {
    return{
        type: "Date",
        payload: dateDay
    }
}

export const passengersAction  = (passengerCount: number) => {
    return{
        type: "Passengers",
        payload: passengerCount
    }
}