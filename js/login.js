document.getElementById('btn-click').addEventListener('click',function(event){
    event.preventDefault();
    
    

    const Phone_Number = document.getElementById('Phone-Number').value;
    const Pin_Number = document.getElementById('pin-number').value
    if( Phone_Number === ' ' && Pin_Number === "1234"){
        console.log("You are Login")
        window.location.href = '/Mobile-bank/home.html'
    }else{
        alert("please check your Number of password")
    }
})