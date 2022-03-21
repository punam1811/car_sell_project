function equirydata()
{    
   var submit=document.getElementById("submit");
   if(submit == "submit")
    var data=[];
    data["fullname"]=document.getElementById("first_name").value;
    data["email"]=document.getElementById("email").value;
    data["brand"]=document.getElementById("brand").value;
    data["cars"]=document.getElementById("cars_model").value;
     
    var table =document.getElementById("equirydata").getElementsByTagName('tbody')[0];
    var newrow=table.insertRow(table.length);
     var cell1=newrow.insertCell(0);
         cell1.innerHTML=data.fullname;
    var cell2=newrow.insertCell(1);
         cell2.innerHTML=data.email;
    var cell3=newrow.insertcell(2);
        cell3.innerHTML=data.brand;
    var cell4=newrow.insertCell(3);
       cell4.innerHTML=data.cars;
    

}