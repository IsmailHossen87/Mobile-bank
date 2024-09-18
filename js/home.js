document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()
    // step 1
   const input_Money =  document.getElementById('input-money').value;
   const input_pass = document.getElementById('input-pass').value;
   console.log(input_Money,input_pass);
})