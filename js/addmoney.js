document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()
    // step 1
   const input_Money =  document.getElementById('input-money').value;
   const input_pass = document.getElementById('input-pass').value;
   if(input_pass === '1234'){
        const current_Money = document.getElementById('current-money').innerText

        const newBalance = parseFloat(current_Money) + parseFloat(input_Money)
        // new money add the corrent balance 
        document.getElementById('current-money').innerText = newBalance

   }else{
    alert("corrent your Password")
   }
})
// MAin step 2 - CASH OUT
