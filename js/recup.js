let rec = document.getElementById('px');
rec.addEventListener('click',(event) =>{
  event.preventDefault();
  let ml = document.getElementById('xp').value;
  if(ml == "admin@gmail.com" ){
     swal("um link de recuperação de senha foi enviado ao seu email");
  }else{
    swal('insira um e-mail válido');
    
  }
})


let pg = document.getElementById('pk');
if(pg.clicked){
    document.getElementById('lkj').style.display = "block";
}
  
pg.addEventListener('click', () =>{
  document.getElementById('lkj').style.display = "block";

})

let telk = document.getElementById('kl');
telk.addEventListener('click', (event) => {
event.preventDefault();
let vtel = document.getElementById('telxd').value;
if(vtel == 2199997777){
  swal("um sms foi enviado com as devidas instruções");
}else{
  swal("insira no formato solicitado");
}


}) 