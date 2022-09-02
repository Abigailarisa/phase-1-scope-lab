var customerName = "bob";
const leastFavoriteCustomer = "some initial value"
var bestCustomer;

function setBestCustomer() {
    bestCustomer = "not bob"
};

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
};

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
};

function changeLeastFavoriteCustomer(){
leastFavoriteCustomer = "least"
};