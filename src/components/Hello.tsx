import * as React from "react";
import { FormattedMessage } from "react-intl";

const Hello = (props: any) => {
    return (
        <div>
            Hello, Welcome to React Ts Hell. - Language: {props.lang}
            <br />
            Title: <FormattedMessage id="title" />
        </div>
    );
};

export default Hello;