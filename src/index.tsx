import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store"

function AppReducer(currentState: any, action: any, gStore: any) {
    switch (action.type) {
        case "init":
            store.dispatch(action);
            return { ...currentState, lang: action.payload };
    }
}

declare var window: any;
class BaseApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "Hello"
        }
    }

    componentDidMount() {
        const self = this;
        const GConnector = window.Store.GlobalListener;
        GConnector.listen(function (action: any) {
            self.setState(AppReducer(self.state, action, GConnector));
        });

    }

    render() {
        return <App />;
    }
}

ReactDOM.render(
    <Provider store={store} >
        <BaseApp />
    </Provider>,
    document.getElementById("apps")
);