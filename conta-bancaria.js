class ContaBancaria{
    constructor(agencia, numero, tipo, ){
    this.agencia =  agencia
    this.numero = numero
    this.tipo =  tipo
    this._saldo = 0
    }

    get saldo(){
    return this._saldo;
    }

    set saldo(valor){
        return this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "operação negada"
        } else {
        return this._saldo = this._saldo - valor;
        }
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this.saldo
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, CartãodeCredito){
        super(agencia, numero, CartãodeCredito);
        this.tipo = "corrente";
        this._CartãodeCredito = CartãodeCredito;
    }

    get CartãodeCredito(){
        return this._CartãodeCredito = CartãodeCredito;
    }

    set CartãodeCredito(valor){
       return this._CartãodeCredito = valor;
    }
}

class Contapoupança extends ContaBancaria{
    constructor(agencia, numero, ){
        super(agencia, numero, );
        this.tipo = "poupança";
    }
}

class ContaUNI extends ContaBancaria{
    constructor(agencia, numero, ){
        super(agencia, numero, );
        this.tipo = "universitaria";
    }

    sacar(valor){
        if(valor > 500){
            return "operação não realizada";
        }
        
        return this._saldo = this._saldo - valor
        

    }
}
        