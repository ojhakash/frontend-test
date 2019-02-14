### Code Splitting 
![Code Splitting](/front-test.png)


### WebLink
(http://94.237.72.184:82/)

### Explaination
I have created two stateless component named loanCalculatorComponent and computedEmiComponet.As the names suggests,LoanCalculator is a form where user can enter the amount of loat and how long is needed to repay it.On the basis of that the resultant is calculated and will appear
in the computedEmiComponent.<br>
**A Shared Component named Loader is added in shared directory under components section.which is used in between the time the request goes to api and a response will come.<br>

All the components are added in the mainContainer under container section.which is bootsraped in app.js file.
#
Third party libraries used:<b> reactstrap,react-input-range</b>
