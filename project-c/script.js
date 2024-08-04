
function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementById('otpverify');
    
    let otp_val = Math.floor(Math.random()*10000);

    let emailbody= `<h2> Your otp is </h2>${otp_val}`;
    
    Email.send({
        SecureToken: "a87eb29f-d0e1-482c-b3ef-99ce5d24b108",
        To: email.value,
        From: "nukalavenkatasrinivasulu@gmail.com",
        Subject: "Email otp",
        Body: emailbody,
    }).then(
        message =>{
            if(message==="OK"){
                alert("OTP sent to your email "+email.value);

                otpverify.style.display="flex";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp_btn');
                
                otp_btn.addEventListener('click',()=>{
                    if(otp_inp.value == otp_val){
                        alert("Email address verified...");
                    }
                    else{
                        alert("invalid otp")
                    }
                })
            }
        }
    );
}