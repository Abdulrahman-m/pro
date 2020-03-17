function customer(name,mobile,price1,price2,priceB,theDate,DeliveryIn,Details1,Details2,Details3,Details4,Details5,Details6,Details7,Details8,Notes,status){
  
  var d = new Date(); ///
  var mm = d.getDay() +1 ;
  var dd = d.getDate();
  var yy = d.getFullYear();
  var ms = " - ";
  var ss = ":";
  var sm = " / ";
  var t = d.getHours() ;
  var mn = d.getMinutes() ;
  var theDate = dd + sm + mm + sm + yy ;
  //  console.log(fddmmyy) ;
 

  this.name = name;
  this.mobile = mobile;
  this.price1 = price1;
  this.price2 = price2;
  this.priceB = priceB;
  this.theDate = theDate;
  this.DeliveryIn = DeliveryIn;
  this.Details1 = Details1;
  this.Details2 = Details2;
  this.Details3 = Details3;
  this.Details4 = Details4;
  this.Details5 = Details5;
  this.Details6 = Details6;
  this.Details7 = Details7;
  this.Details8 = Details8;
  this.Notes = Notes;
  this.status = "قيد التجهيز";


}


document.getElementById("priceB").addEventListener("mouseenter",NewV);
//document.getElementById("theDate").addEventListener("mouseenter",NewD);


document.getElementById("student-form").addEventListener("submit",function(e){
e.preventDefault();
const name = document.getElementById("name").value;
const mobile = document.getElementById("mobile").value;
const price1 = document.getElementById("price1").value; 
const price2 = document.getElementById("price2").value; 
const priceB = document.getElementById("priceB").value; 
//const theDate = document.getElementById("theDate").value;
const DeliveryIn = document.getElementById("DeliveryIn").value;
const Details1 = document.getElementById("Details1").value;
const Details2 = document.getElementById("Details2").value;
const Details3 = document.getElementById("Details3").value;
const Details4 = document.getElementById("Details4").value;
const Details5 = document.getElementById("Details5").value;
const Details6 = document.getElementById("Details6").value;
const Details7 = document.getElementById("Details7").value;
const Details8 = document.getElementById("Details8").value;
const Notes = document.getElementById("Notes").value;

const theCustomer = new customer(name,mobile,price1,price2,priceB,theDate,DeliveryIn,Details1,Details2,Details3,Details4,Details5,Details6,Details7,Details8,Notes,status)
console.log(theCustomer);

  e.preventDefault();
});



function NewV(){  /// حساب الباقي المبلغ بعد خصم العربون
  let i = document.getElementById("price1").value ;
  let l = document.getElementById("price2").value; 
  let o = document.getElementById("priceB") ; 
  o.value = i - l;
}; 



// function NewD(){  /// وضع التاريخ بشكل الي
//   var d = new Date();
//   var mm = d.getDay() +1 ;
//   var dd = d.getDate();
//   var yy = d.getFullYear();
//   var ms = "-";
//   var fddmmyy = dd + ms+mm+ms+yy;
//   //  console.log(fddmmyy) ;
//  // let nolla = document.getElementById("theDate"); 
//   nolla.value = fddmmyy  ;
// }; 






