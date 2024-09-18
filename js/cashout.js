document.getElementById('casOutmoney-btn').addEventListener('click',function(event){
    event.preventDefault();
   const castOut_money_INPUT = document.getElementById('castOut-money-INPUT').value
   const current_Money = document.getElementById('current-money').innerText
   const passCheck = document.getElementById('cashOut-pass').value
   if ( passCheck === '1234'){
    const newSubstract = parseFloat(current_Money) - parseFloat(castOut_money_INPUT) 
    document.getElementById('current-money').innerText = newSubstract
   }else{
    alert('please check your password')
   }
})