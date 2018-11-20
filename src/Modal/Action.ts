export interface IAction {
    type: ActionTypes;
    payload?: any;
    meta?: any;
}

export enum ActionTypes {
    INIT = "init"
}