import React from "react";
import { Card, CardTitle } from "reactstrap";
import PropTypes from "prop-types";

const computedEmi = props => {
    return (
        <Card
            body
            inverse
            style={{
                backgroundColor: "#333",
                borderColor: "#333",
                width: "50%",
                margin: "auto"
            }}
        >
            <CardTitle>
                <b>Computed EMI Details</b>
            </CardTitle>
            <div>
                <div>
                    {" "}
                    Total Capital:{" "}
                    <b>
                        {props.principal.amount} {props.principal.currency}
                    </b>
                </div>
                <div>
                    Rate of Interest: <b>{props.interestRate}</b>
                </div>
                <div>
                    Total month take to repay the Loan:{" "}
                    <b>{props.monthDuration}</b>
                </div>
                <div>
                    {" "}
                    Monthly Payment:{" "}
                    <b>
                        {props.monthlyPayment.amount}{" "}
                        {props.monthlyPayment.currency}
                    </b>
                </div>
            </div>
        </Card>
    );
};

computedEmi.propTypes = {
    principal: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired,
    monthlyPayment: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    }),
    interestRate: PropTypes.number.isRequired,
    monthDuration: PropTypes.number.isRequired
};

export default computedEmi;
