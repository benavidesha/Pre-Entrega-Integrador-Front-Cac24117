document.getElementById("inicioSesion").addEventListener("submit",function(event)
        {
            event.preventDefault();
            var email=document.getElementById("email").value;
            var password=document.getElementById("password").value;
            var emailError=document.getElementById("emailError");
            var passwordError=document.getElementById("passwordError");
            var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            //var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 
            emailError.textContent="";
            passwordError.textContent="";

            /* Primer if: comprueba que Email y Contraseña no estén vacíos */

            if(email.trim()==="" || password.trim()==="")
                {
                    emailError.textContent="Ingrese su correo para acceder";
                    passwordError.textContent="Ingrese su contraseña para acceder";
                    return;
                }

            /* Esta Regex valida que se ingrese un correo electrónico  */

            if(!regexEmail.test(email))
                {
                    emailError.textContent="El correo no es válido, intente otra vez";
                    return;
                }

            /* Esta validación es para que solo se pueda enviar el formulario si se escribe la contraseña Entrada$2024*/
            
            if(password.trim()!=="Entrada$2024")
                {
                    passwordError.textContent="Su contraseña no es válida. Reintente"
                    return;
                }
                    
        alert("Ha iniciado sesión exitosamente");
        });
