import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from "redux-thunk";

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
const reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "setCurrentLocation":
            return { ...state, locationList: action.value }
        default:
            return state;
    }
}



let store = createStore(combineReducers({ app: reducer }), applyMiddleware(thunk))

export { store };

const setLocationList = (locationList: LocationItem[]) => {
    return {
        type: "setLocationList",
        value: locationList
    };
};

export { setLocationList };