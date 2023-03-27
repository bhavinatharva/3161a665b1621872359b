
interface States {
    locationList: LocationItem[]
}
interface ActionType {
    type: string
    value: number | string | [] | object
}
export interface LocationItem {
    location_name: string
    time: string
    latitude: number
    longitude: number
}
const initialState: States = {
    locationList: []

}

const reducers = (state = initialState, action: ActionType) => {
    console.log('action', action)
    switch (action.type) {
        case "ADD_LOCATION":
            return { ...state, locationList: [...state.locationList, action.value] }
        case "SET_LOCATION_LIST":
            return { ...state, locationList: action.value }
        default:
            return state;
    }
}


export const setLocationList = (locationList: LocationItem[]) => {
    return {
        type: "SET_LOCATION_LIST",
        value: locationList
    };
};

export const addLocation = (location: LocationItem) => {
    return {
        type: "ADD_LOCATION",
        value: location
    };
};

export default reducers