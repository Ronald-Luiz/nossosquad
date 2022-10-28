
document.querySelector('#crc').addEventListener('click', (e) => {
    e.preventDefault();
        let x;
     if(document.querySelector('#usuario').value.length == 0){
        x = "Por favor digite o nome do usuario";
        msgAlert(x,false);
     }else if(document.querySelector('#email').value.length == 0){
        x = "Por favor digite o email";
        msgAlert(x,false);
     }else if(document.querySelector('#password').value.length == 0){
        x = "Por favor digite a senha";
        msgAlert(x,false);
     }else if(document.querySelector('#confirm_password').value.length == 0){ 
        x = "Por favor digite a confirmação de senha";
        msgAlert(x,false);
    }else if(document.querySelector('#rg').value.length == 0){ 
        x = "Por favor digite o RG";
        msgAlert(x,false);
    }else if(document.querySelector('#cpf').value.length == 0){ 
        x = "Por favor digite o CPF";
        msgAlert(x,false);
    }else if(document.querySelector('#cep').value.length == 0){ 
        x = "Por favor digite o CEP";
        msgAlert(x,false);
    }else{
        x = "Cadastro feito com sucesso!";
        msgAlert(x,true);

























//var btnenv = document.getElementById('telefone');

//btnenv.addEventListener('click', () =>{

//If(btnenv ===''){

//alert ("preencha todos os campos");


//}else{



//swal("obrigado pelo contato, em breve entraremos em contato");


//}


  


























//var btnenv = document.getElementById('crc');
//btnenv.addEventListener('click', () =>{

   // swal("obrigado pelo contato, em breve entraremos em contato");
//})
