const accountId=123423;//once initialized cannot be changed
let accountName="John Doe";
var accountBalance=1000.50;
accountbank="Bank of America";

console.log("Account ID:", accountId);
console.log("Account Name:", accountName);
console.log("Account Balance:", accountBalance);
console.log("Account Bank:", accountbank);
accountName="Jane Smith";//can be changed
{
    var accountBalance=2000.75;//can be redeclared because var is function scoped
}
var accountBalance=3000.00;//no error because var is function scoped and can be redeclared
console.log("Updated Account Name:", accountName);
console.log("Updated Account Balance:", accountBalance);

{
    let accountName="Alice Johnson";
    console.log("Inner Block Account Name:", accountName);//can be changed because it is block scoped
}
//let accountName="Bob Williams";//here error will occur because accountName is already declared in the same scope
console.log("Final Account Name:", accountName);
console.table({
    "Account ID": accountId,
    "Account Name": accountName,
    "Account Balance": accountBalance,
    "Account Bank": accountbank
});