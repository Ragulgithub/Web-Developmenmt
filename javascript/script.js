function validation(){
  
    // firstname

    var firstname = document.getElementById('fname').value.trim();
    if(firstname){
        if(firstname.length>=3){
            document.getElementById('fname').style = "border:3px solid green";
            document.getElementById('fname-error').style ="display:none";
            document.getElementById('fname-error2').style="display:none";
        } else{
            document.getElementById('fname').style = "border:3px solid red";
            document.getElementById('fname-error').style ="display:block";
            document.getElementById('fname-error2').style="display:none";
        }
    } else{
        document.getElementById('fname').style = "border:3px solid red";
        document.getElementById('fname-error2').style="display:block";
    }

    // lastname

    var lastname = document.getElementById('lname').value.trim();

    if(lastname){
        if(lastname.length>=1){
        document.getElementById('lname').style = "border:3px solid green";
        document.getElementById('lname-error').style ="display:none";
        document.getElementById('lname-error2').style="display:none";
    }
    else{
         document.getElementById('lname').style = "border:3px solid red";
         document.getElementById('lname-error').style ="display:block";
         document.getElementById('lname-error2').style="display:none";
    }
    }else{
        document.getElementById('lname').style = "border:3px solid red";
        document.getElementById('lname-error2').style="display:block";
        
    }

    // email

    var mail = document.getElementById('mail').value.trim();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   if(mail){
    if(mailformat.test(mail)==true){
        document.getElementById('mail').style = "border:3px solid green";
        document.getElementById('mail-error2').style ="display:none";
        document.getElementById('mail-error').style ="display:none";
        
    }else{
        document.getElementById('mail').style = "border:3px solid red";
        document.getElementById('mail-error').style ="display:block";
        document.getElementById('mail-error2').style ="display:none";

    }
   }else{
        document.getElementById('mail').style = "border:3px solid red";
        document.getElementById('mail-error2').style ="display:block"; 
   }

    //password

    var password = document.getElementById('password').value.trim();
    var passwordformat=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
   console.log(passwordformat.test(password))
    if(password){  
        if(passwordformat.test(password)==true){
            document.getElementById('password').style = "border:3px solid green";
            document.getElementById('password-error2').style ="display:none"; 
            document.getElementById('password-error').style ="display:none"; 
     

        }else{
         document.getElementById('password').style = "border:3px solid red";
         document.getElementById('password-error2').style ="display:none"; 
         document.getElementById('password-error').style ="display:block"; 

        }   
    }
    else{
         document.getElementById('password').style = "border:3px solid red";
         document.getElementById('password-error2').style ="display:block"; 
         document.getElementById('password-error').style ="display:none"; 

    }

    //confirm password

    var  confirmpassword = document.getElementById('cpassword').value.trim();

    if(confirmpassword){
        if(password == confirmpassword){
            document.getElementById('cpassword').style = "border:3px solid green";
            document.getElementById('cpassword-error2').style ="display:none"; 
            document.getElementById('cpassword-error').style ="display:none"; 

     

        }else{
         document.getElementById('cpassword').style = "border:3px solid red";
         document.getElementById('cpassword-error').style ="display:block"; 
         document.getElementById('cpassword-error2').style ="display:none"; 
        }   
    }
    else{
         document.getElementById('cpassword').style = "border:3px solid red";
         document.getElementById('cpassword-error2').style ="display:block"; 
         document.getElementById('cpassword-error').style ="display:none"; 

    }

    // About us

    var aboutus = document.getElementById('textarea').value.trim();

    if(aboutus){
        if(aboutus <=55){
        document.getElementById('textarea').style = "border:3px solid green";
        document.getElementById('textarea-error2').style ="display:none"; 


        }
        else{
         document.getElementById('textarea-error').style = "border:3px solid red";
         document.getElementById('textarea-error2').style ="display:none"; 
         document.getElementById('textarea-error').style ="display:block"; 


        }
    }
    else{
         document.getElementById('textarea-error2').style ="display:block"; 
         document.getElementById('textarea-error').style ="border:3px solid red";
    }


    // <!-- --------X------- -->
    

    var salaryArray = [5000,10000,2500,7500,1250,15000,1000,4500,2000];
    var storearray =[ ];
    var lessvalue=[];

   for( var i=0; i<salaryArray.length; i++){
    if(salaryArray[i]<=2500){
        lessvalue.push(salaryArray[i]);

    }
    else{
        storearray.push(salaryArray[i]);
    }
   }

//    console.log("maxvalue....", storearray);

//    console.log("minvalue", lessvalue);


//    <!-- --------X------- -->

var voterarray = [5,6,7,8,10,15,18, 19, 20, 25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
var eligibletovote =[];
var not_eligibletovote =[];
var above_50 =[];
var above_60 =[];

for ( var i=0; i<voterarray.length; i++){
    if(voterarray[i]>18){
        eligibletovote.push(voterarray[i]);
    }
    else{
        not_eligibletovote.push(voterarray[i]);
    }
    if(voterarray[i]>50){
        above_50.push(voterarray[i]);
    }
    if(voterarray[i]>60){
        above_60.push(voterarray[i]);
    }
    // else{
    //     not_eligibletovote.push(voterarray[i]);
    // }

}

        console.log("-------Eligible voter------", eligibletovote);
        console.log("-------Non-Eligible vote------", not_eligibletovote);
        console.log("-------above_50------", above_50);
        console.log("-------above_60------",  above_60);
        ;

}

function event(){
    
}