document.getElementById('cashOut-btn').addEventListener('click',function(){
    document.getElementById('ADDMONEY').classList.add('hidden')
    document.getElementById('CASHOUT').classList.remove ('hidden')

});
document.getElementById('addMoney-btn').addEventListener('click',function(){
    document.getElementById('ADDMONEY').classList.remove('hidden')
    document.getElementById('CASHOUT').classList.add('hidden')

})
