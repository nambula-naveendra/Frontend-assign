
document.getElementById('#dropdown-item-1').addEventListener('click',function(){
  var select = document.getElementById('.dropdown-item-1').textContent; 
 
  if(select === "Rupees")
  {
    document.getElementById('.required').textContent= (67.461643)*document.getElementById('.required').textContent;
    
  }

});

document.getElementById('#dropdown-item-2').addEventListener('click',function(){
  var select = document.getElementById('.dropdown-item-2').textContent;

  if(select === "USD")
  {
    
    document.getElementById('.required').textContent= (0.0142823238)*document.getElementById('.required').textContent;
    console.log("helo");
  }
  

});
