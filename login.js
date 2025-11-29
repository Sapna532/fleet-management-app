function login(){
            let email=document.getElementById("email").value;
            let pass=document.getElementById("password").value;
            let correctEmail="admin@gmail.com";
            let correctPass="admin1234";
            if(email===correctEmail && pass===correctPass){
                window.location.href="admin.html";
            }else{
                document.getElementById("msg").innerText="Invalid";
            }
            
        }