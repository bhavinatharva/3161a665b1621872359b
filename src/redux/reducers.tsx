
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

export default reducers