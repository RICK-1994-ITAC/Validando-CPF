const input = document.querySelector('#cpf')
const result = document.querySelector('.resultado')
const btn = document.querySelector('.pesquisa')
const form = document.querySelector('.formulario')


form.addEventListener('click',(e)=>{
    e.preventDefault()
})

btn.addEventListener('click',()=>{
    const inputValue = input.value
    const cpf = new ValidaCpf(inputValue);
    result.innerHTML = cpf.valida();
    
    input.value=''

})

function ValidaCpf(cpfEnviado){
        
   Object.defineProperty(this,'cpfLimpo',{
        enumerable:true,
        get: function(){
            return cpfEnviado.replace(/\D+/g,'')//expressão regular para ñ numeros
        }
    })
    
}

ValidaCpf.prototype.valida = function(){
    if(this.cpfLimpo === ''){
        result.classList.remove('Valido')
        result.classList.add('invalido') 
        return 'Campo vazio'
    } 
    if(this.cpfLimpo.length <11 && this.cpfLimpo.length >0){
        result.classList.remove('Valido')
        result.classList.add('invalido')
        return 'CPF faltando números'
    } 
    if(this.cpfLimpo.length >11){
        result.classList.remove('Valido')
        result.classList.add('invalido')
        return 'CPF excedendo números' 
    } 
    if(this.digitosRepetidos()){
        result.classList.remove('Valido')
        result.classList.add('invalido')
        return 'CPF inválido,pois todos os 11 digitos são iguais'
    } 

    const cpfNoveDigitos = this.cpfLimpo.slice(0,9)
    
    const digito1 = String(this.criaDigitos(cpfNoveDigitos)); 
    const digito2 = this.criaDigitos(cpfNoveDigitos + digito1) ;
    
    const novoCpf = cpfNoveDigitos + digito1 + digito2
    
    
    if(this.cpfLimpo === novoCpf){
        result.classList.remove('invalido')
        result.classList.add('Valido')
        return 'Cpf Válido'
    } 
    result.classList.remove('Valido')
    result.classList.add('invalido')
    return 'Cpf inválido'
    
}

ValidaCpf.prototype.digitosRepetidos = function(){
    const cpfRepetido = this.cpfLimpo[0].repeat(11)
    return cpfRepetido === this.cpfLimpo    
}

ValidaCpf.prototype.criaDigitos = function(cpfParcial){
   const cpfArray = Array.from(cpfParcial)
   let regressivo = cpfArray.length + 1
    
   const a = cpfArray.reduce((ac,val)=>{
    ac = regressivo * val + ac
    regressivo --
   
    return ac
   },0)

   let digitos = 11-(a % 11)
   
   if (digitos > 9) {
    return 0
   }
    return digitos

}


