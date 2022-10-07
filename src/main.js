import './assets/css/style.css';

class Senha {
  pegaClique(){
    const senha = document.querySelector('.senha');
    const button = document.querySelector('.gerar');
    button.addEventListener('click', () =>{
      senha.innerHTML = this.senhaGerada();
    });
  }

  senhaGerada(){
    const caracter = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let senha = ''
    for(let i=0; i < 12; i++){
      senha += caracter[this.rand()]
    }
    return senha;
  }

  rand(min = 0, max = 71){
    return Math.floor(Math.random() * (max - min) + min)
  }
}

const gerarSenha = new Senha();
gerarSenha.pegaClique()