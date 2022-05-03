// Listen for submit 

document.getElementById('loan-form').addEventListener('submit' , function(e){

// Hide Results
document.getElementById('results').style.display= 'none';


// Show Loader 

document.querySelector('.loading').style.display= 'block';

setTimeout(calculateResults,1700);



  e.preventDefault();

});

// Calculate result funcn

function calculateResults() {


  // UI variables

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 /12 ;
  const calculatePayments = parseFloat(years.value) * 12 ;

  // Compute Monthly Payments 

  const x = Math.pow(1 + calculatedInterest , calculatePayments);

  const monthly = (principal*calculatedInterest*x) / (x-1) ;

  if(isFinite(monthly)){

    monthlyPayment.value = monthly.toFixed(2);

    totalPayment.value = (monthly * calculatePayments).toFixed(2);

    totalInterest.value =((monthly*calculatePayments) - principal).toFixed(2);


    // show results 

    document.getElementById('results').style.display= 'block';




    // Hide loader 
    document.querySelector('.loading').style.display= 'none';



}else{

  errorfuncn('Please check your number');
}


}


function errorfuncn(error){


  // Hide Results
document.getElementById('results').style.display= 'none';


// Hide Loader 

document.querySelector('.loading').style.display= 'none';


  // Crearte a div

  const errorDiv =  document.createElement('div');

  // get elements 

  const card = document.querySelector('.card');

  const heading = document.querySelector('.heading');

  // Add class

  errorDiv.className = 'alert alert-danger';

  // create text node and append to div 

  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading 

  card.insertBefore(errorDiv,heading);

  // clear after 3 seconds 

  setTimeout(clearError,2000);



}

function clearError() {

  document.querySelector('.alert').remove();
}