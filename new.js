
document.getElementById('#dropdown-item-1').addEventListener('click',function(){
  var select = document.querySelector('.dropdown-item').textContent; 
 
  if(select === "Rupees")
  {
    document.querySelector('.required').textContent= (67.461643)*document.querySelector('.required').textContent;
    console.log("hello world");
  }

});

document.getElementById('#dropdown-item-2').addEventListener('click',function(){
  var select = document.querySelector('.dropdown-item').textContent;

  if(select === "USD")
  {
    
    document.querySelector('.required').textContent= (0.0142823238)*document.querySelector('.required').textContent;
    console.log("helo");
  }
  

});
