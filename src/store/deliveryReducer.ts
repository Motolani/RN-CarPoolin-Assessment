
  

interface State {
    pickUpLocation: string;
    destination: string;
    date: string;
    isOtherDate: boolean;
    dateInCalender: string;
    passengersCount: number;
    driversName: string;
    driversRate: number;
    driversReviewCount: string;
    driversCar: string;
    rideCost: number;
    pickUpTime: string;
    dropOffTime: string;
  }
  
  const initialState: State = {
    pickUpLocation: "Brussels",
    destination: "Ghent",
    date: "Today",
    isOtherDate: false,
    dateInCalender: "2/12/2023",
    passengersCount: 1,
    driversName: "Stephen",
    driversRate: 4.99,
    driversReviewCount: "347 Reviews",
    driversCar: "Big White Car",
    rideCost: 21,
    pickUpTime: "16:30",
    dropOffTime: "17:20",
  };
  
  export default (state = initialState, {type, payload}) => {

    switch(type){
        case "Date": 
            return {...state, date: payload}
        case "Passengers":
            return {...state, passengersCount: payload}
        default:
            return state;
    }
}
  