import React from "react";
import Cart from "./Cart";
import './Form.css';
import './TheForm.css';
import NewForm from "./NewForm";

const jsonfile = require('jsonfile');



class Payment extends React.Component{




state = {
  finaidchanged: undefined,
  formSubmitted: undefined,
  error: undefined
}




  submitFunction = (e) => {
    e.preventDefault();

    const namecard = e.target.elements.nameoncard.value;
    const cardnum = e.target.elements.creditcardnumber.value;
    const expirmonth = e.target.elements.expirationmonth.value;
    const expiryear = e.target.elements.expirationyear.value;
    const cvv = e.target.elements.cardcvv.value;
    const email = e.target.elements.emailaddress.value;

    const buttonSubmitted = 'Submitted!';
    if( email && namecard && expirmonth && expiryear && cvv && cardnum ){


      const info = {email, namecard, expirmonth, expiryear, cvv, cardnum };
      const data = JSON.stringify(info);

{/*
      fs.writeFile("./creditcardfrom.json", data, function (err) {
        if (err) console.error(err)
        })
*/}
      console.log(info);

{/*
      componentDidMount(){
        fetch('./creditcardfrom.json').then( (Response) => Response.json()).
        then((findresponse=> {
          console.log(findresponse.info);
          this.setState({ })

        }
        ))

      }
*/}

{/*
    const objbillinfo = {email, namecard, expirmonth, expiryear, cvv, cardnum};
    const billinginfo = JSON.stringify(objbillinfo, null, 2);
    fs.writeFile("./creditcardfrom.json", billinginfo, null);
*/}
    console.log(buttonSubmitted);
    this.setState( {
      formSubmitted: 'Submitted!',
      error: " "
     } );
   }

   else{
     this.setState( {
     error: "Form is missing information",
     formSubmitted: undefined
   } );
   }
 }


  printFunction = (e) => {
    e.preventDefault();
    window.print();
  }

  applyChangesFunction = (e) => {
    e.preventDefault();
    const checkchange = e.target.elements.checkedChanges.value;
    const applyChanges = 'Changes Applied!';
    if(checkchange){
    console.log(applyChanges);

    this.setState( {
      finaidchanged:   'Changes Applied!',
      error: " "
     } );
   }
   else  {
     this.setState( {
        finaidchanged: undefined,
          error: "No Changes made"
     } );

  }
}



  render() {
    return (

  



 
  <div className="row">

              <div className="container"> <br/>
                 <br/> <div id="first">
                      <NewForm   formSubmitted = {this.state.formSubmitted}
                      submitFunction={this.submitFunction}
                      error = {this.state.error} />
                      </div>
               </div> <br/>

          <div id="second">

        {/*   <div className="containerRight">
                 <FinancialAid applyChangesFunction = {this.applyChangesFunction}
                   finaidchanged = {this.state.finaidchanged}
                     error = {this.state.error} />
               </div> */}
                <br/> 
               <div className="containerRight">

                 <Cart  printFunction = {this.printFunction} />
               </div>

    </div>

  </div>
  
  



    );
  }
}

export default Payment;