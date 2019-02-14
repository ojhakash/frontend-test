import React from "react";
import { Button, FormGroup, Form, Label, FormText, Input } from "reactstrap";
import InputRange from "react-input-range";
import PropTypes from "prop-types";

//this array is to initialize 6 to 24 numbers which is used in dropdown
const monthDurationArr = [];
for (let i = 6; i <= 24; i++) {
    monthDurationArr.push(i);
}

const loanCalculatorComponent = props => (
    <Form>
        <FormGroup />
        <FormGroup>
            <Label for="loanAmount" style={{ paddingBottom: "0.5em" }}>
                Amount in $
            </Label>
            <div style={{ padding: "0 1em" }}>
                <InputRange
                    maxValue={5000}
                    minValue={500}
                    value={props.loanAmount}
                    onChange={value => props.onLoanAmoutChange(value)}
                />
            </div>

            <FormText style={{ marginTop: "2em" }}>
                The loan amount between $500 and $5000
            </FormText>
        </FormGroup>
        <FormGroup>
            <Label for="monthDuration">Duration in months</Label>
            <Input
                type="select"
                value={props.monthDuration}
                name="select"
                id="exampleSelect"
                onChange={e => {
                    props.onMonthDurationChange(e.target.value);
                }}
            >
                {monthDurationArr.map(month => (
                    <option key={month}>{month}</option>
                ))}
            </Input>
            <FormText>
                Time Duration between 6 months and 24 months in which user would
                pay his loan
            </FormText>
        </FormGroup>
        <FormGroup>
            <Button
                style={{ width: "-webkit-fill-available" }}
                onClick={e => {
                    props.onLoanCalculatorSubmit(e);
                }}
            >
                Submit
            </Button>
        </FormGroup>
    </Form>
);

loanCalculatorComponent.propTypes = {
    monthDuration: PropTypes.number.isRequired,
    loanAmount: PropTypes.number.isRequired,
    onMonthDurationChange: PropTypes.func.isRequired,
    onLoanAmoutChange: PropTypes.func.isRequired,
    onLoanCalculatorSubmit: PropTypes.func.isRequired
};

export default loanCalculatorComponent;
