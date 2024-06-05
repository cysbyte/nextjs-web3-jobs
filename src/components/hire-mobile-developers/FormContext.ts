import { Dispatch } from "react";
import { createContext } from "React";

export const initialFormState = { locationType: 'Remote' }

export interface IFormContext {
    state: typeof initialFormState;
    locationTypeDispatch: Dispatch<IAction>;
    
}
export const FormContext = createContext<IFormContext>({
    state: initialFormState,
    locationTypeDispatch: ()=>{}
});
export enum ActionType{
    CHANGE_LOCATION_TYPE = 'CHANGE_LOCATION_TYPE'
}
export type IAction = {
    type: ActionType
    value: string
}
export const LocationTypeReducer = (state: typeof initialFormState, action: IAction) => {
    switch (action.type) {
        case ActionType.CHANGE_LOCATION_TYPE:
            return { ...state, locationType: action.value }
        default:
            return state
    }
}