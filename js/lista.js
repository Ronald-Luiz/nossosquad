
document.querySelector('#crc').addEventListener('click', (e) => {
    e.preventDefault();
        let x;
     if(document.querySelector('#nome').value.length == 0){
        x = "Por favor digite o nome do usuario";
        msgAlert(x,false);
     }else if(document.querySelector('#mail').value.length == 0){
        x = "Por favor digite o email";
        msgAlert(x,false);
     }else if(document.querySelector('#telefone').value.length == 0){
        x = "Por favor digite a senha";
        msgAlert(x,false);
     }else if(document.querySelector('#mensagem').value.length == 0){ 
        x = "Por favor digite a confirmação de senha";
        msgAlert(x,false);

    }else{
        x = "Obrigado, entraremos em contato em breve!";
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
