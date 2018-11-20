import { Localization } from "../../Localization";
import { combineReducers } from "redux";
import { ActionTypes } from "../../Modal";
import { LocalizationFormats } from "../../Data";

export class Reducers {
    locale: Localization;
    constructor() {
        this.locale = new Localization();
        this.basicReducer = this.basicReducer.bind(this);
        this.createReducer = this.createReducer.bind(this);
    }

    basicReducer(state: any = { lang: "en" }, actions: any) {
        switch (actions.type) {
            case ActionTypes.INIT:
                const localization = this.locale.localizationMessages()[actions.payload];
                return { ...state, localization, lang: actions.payload, formats: LocalizationFormats };

            default:
                return state;
        }
    }

    createReducer() {
        return combineReducers({ basic: this.basicReducer });
    }
}