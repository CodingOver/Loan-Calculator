// Listen For Sumbit

document.getElementById('loan-form').addEventListener('submit',function(e){
    // Hide Results
        document.getElementById('results').style.display = 'none';
    // Show Loader
        document.getElementById('loading').style.display = 'block';
    
        setTimeout(calculateResults, 2000)
    e.preventDefault();
});
 
// Calculate Results
function calculateResults(){
    // UI VARIBALES
    const amount = document.getElementById('amount');
    const interset = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterset = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interset.value) / 100 / 12 ;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Complete Monthl Payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
       monthlyPayment.value = monthly.toFixed(2);
       totalPayment.value = (monthly * calculatedPayments).toFixed(2);
       totalInterset.value = ((monthly * calculatedPayments)-principal).toFixed(2);

        // Display Results
        document.getElementById('results').style.display = 'block';

        // Hide Loding 
        document.getElementById('loading').style.display = 'none';


    }else {
        
        showError('Please Check Your Numbers')
    }
}

//
function showError(error){
    
     // Display Results
    document.getElementById('results').style.display = 'none';

    // Hide Loding 
    document.getElementById('loading').style.display = 'none';
    //Create a div 
    const errorDiv = document.createElement('div');
    // Get Elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add Class
    errorDiv.className = 'alert alert-danger';

    // Create Text Node and Append into Div
    errorDiv.appendChild(document.createTextNode(error));

    // insert Error Above Heading
    card.insertBefore(errorDiv, heading);

    // Clear error After 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}