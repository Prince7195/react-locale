import * as React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import Hello from "./components/Hello";

const AppComponent = (props: any) => {
    return (
        <IntlProvider messages={props.messages} locale={props.lang} formats={props.formats}>
            <>
                <Hello lang={props.lang} />
            </>
        </IntlProvider>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        lang: state.basic.lang,
        messages: state.basic.localization,
        formats: state.basic.formats
    }
};

const mapDispatchToPRops = (dispatch: any) => {
    return {};
};

export const App = connect(mapStateToProps, mapDispatchToPRops)(AppComponent);