window.addEventListener('load',()=>{
   
    const name=localStorage.getItem("first_name");
    const email=localStorage.getItem("email");
    const brand=localStorage.getItem("brand");
    const cars=localStorage.getItem("cars_model");
    
    document.getElementById("first_name").innerHTML=name;
    


})