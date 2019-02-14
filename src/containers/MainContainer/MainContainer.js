import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Alert } from "reactstrap";
import LoanCalculator from "./../../components/loanCalculatorComponent/loanCalculatorComponent";
import ComputedEmi from "./../../components/computedEmiComponent/computedEmiComponent";
import Loader from "./../../components/shared/loader/loader";

class MainContainer extends Component {
    // state are initalized here
    state = {
        loanAmount: 500,
        monthDuration: 6,
        showComputedCard: false,
        loader: false,
        interestRate: 0,
        monthlyPayment: {
            amount: 0,
            currency: ""
        },
        principal: {
            amount: 0,
            currency: ""
        }
    };

    loanAmountChangeHandler(value) {
        this.setState({ loanAmount: value });
    }

    monthDurationChangeHandler(value) {
        this.setState({ monthDuration: value });
    }

    submitClicked(e) {
        // console.log(this.state);
        //set the computed card to invisible
        this.setState({ showComputedCard: false, loader: true });
        let url = new URL("https://ftl-frontend-test.herokuapp.com/interest");
        url.search = new URLSearchParams({
            amount: this.state.loanAmount,
            numMonths: this.state.monthDuration
        });
        fetch(url, {
            method: "get"
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                // change all states according to the fetched data from the api
                if (data.status === "error") {
                    //if error come then a alert will show
                    this.setState({
                        loader: false,
                        apiError:
                            data.message || "error from api.Please try again!"
                    });
                    setTimeout(() => {
                        this.setState({ apiError: null });
                    }, 2000);
                } else {
                    //if everything is right the the proper data will show
                    this.setState({ ...data }, () => {
                        //set the computed card to visible
                        this.setState({
                            showComputedCard: true,
                            loader: false
                        });
                    });
                }
            });
    }
    render() {
        return (
            <div style={{ width: "60%", margin: "auto", paddingTop: "2em" }}>
                <Breadcrumb>
                    <BreadcrumbItem active>
                        Loan EMI and Interest calculator
                    </BreadcrumbItem>
                </Breadcrumb>
                <LoanCalculator
                    monthDuration={this.state.monthDuration}
                    onMonthDurationChange={value => {
                        this.monthDurationChangeHandler(value);
                    }}
                    loanAmount={this.state.loanAmount}
                    onLoanAmoutChange={value => {
                        this.loanAmountChangeHandler(value);
                    }}
                    onLoanCalculatorSubmit={e => this.submitClicked(e)}
                />
                {/* it will show between api request is stared and finished */}
                {this.state.loader && (
                    <div style={{ width: "3em", margin: "auto" }}>
                        <Loader />
                    </div>
                )}
                {/* it will show after the request come without any error */}
                {this.state.showComputedCard && (
                    <ComputedEmi
                        principal={this.state.principal}
                        monthlyPayment={this.state.monthlyPayment}
                        interestRate={this.state.interestRate}
                        monthDuration={this.state.monthDuration}
                    />
                )}
                {/* it will show if any error occurred in fetching data */}
                {this.state.apiError && (
                    <Alert color="primary">{this.state.apiError}</Alert>
                )}
            </div>
        );
    }
}

export default MainContainer;
