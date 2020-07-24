var jeffBMI;
var toddsBMI;
var jeffWeight=50;
var toddsWeight=25;
var jeffHeight=5;
var toddsHeight=8;

jeffBMI = jeffWeight /(jeffHeight * jeffHeight);

toddsBMI = toddsWeight /(toddsHeight * toddsHeight);

var cmp;
if(jeffBMI>toddsBMI)
{
    cmp='Jeffs BMI higher than Todds';
}
else if(jeffBMI<toddsBMI)
{
    cmp='Todds BMI higher than Jeffs';
}
else{
    cmp='Same BMI';
}
console.log(cmp);