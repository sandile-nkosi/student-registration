const bursaryElement = document.getElementById("bursary");
const bursaryUploadElement = document.getElementById("bursaryDocs");

bursaryElement.addEventListener('change', ()=>{
  if(bursaryElement.checked){
    bursaryUploadElement.classList.remove("hidden")
  }else {
    bursaryUploadElement.classList.add("hidden")
  }
});

//Oben
const card_num = document.getElementById("card_number").value;
const card_num_txt = document.getElementById("card_number");
const cardholder_name = document.getElementById("card-holder" ).value;
const cardholder_txt = document.getElementById("card-holder" );
const expiry_date = document.getElementById("expiry").value;
const expiry_date_txt = document.getElementById("expiry");
const cvv = document.getElementById("cvv").value;
const cvv_txt = document.getElementById("cvv");
const submit = document.getElementById("mysubmit");
const  alphanum = (/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
const alphanum_res = alphanum.test(card_num);


const validate = /^[a-zA-Z\s]+$/;
const validate_test = validate.test(card_num);


new Cleave ( card_num_txt, {

  creditCard: true


});


new Cleave (  expiry_date_txt, {

  date: true,
  datePattern: ['m', 'y']


});





cvv_txt.addEventListener("keyup", ()=>{

  const cvv = document.getElementById("cvv").value
  const alphanum = (/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
  const alphanum_res = alphanum.test(cvv);
  const validate = /^[a-zA-Z]+$/;
  const validate_test = validate.test(cvv);
  
  if (cvv.length >3){

    alert("length > 3 ");
    
   
    document.getElementById("cvv").value = "";
    


  }

  else{

    

  }

  if(alphanum_res || validate_test ){

    alert("alphanumerals not allowed");
    document.getElementById("cvv").value = "";

  }

  else{


  }


});


cardholder_txt.addEventListener("keyup", (e)=>{

  const cardholder_name = document.getElementById("card-holder" ).value;
  const alphanum =  (/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/);
  const alphanum_res = alphanum.test(cardholder_name);
  const validate = /^[a-zA-Z\s]+$/;
  const validate_test = validate.test(cardholder_name);
  
 


  
 
  if(alphanum_res){

    alert("alphanumerals not allowed");
    document.getElementById("card-holder" ).value = "";

  }
  else if( validate_test == false ){

    alert("Numbers not allowed in card holder name ");
    document.getElementById("card-holder" ).value = "";

  }
  else{



  }


});

