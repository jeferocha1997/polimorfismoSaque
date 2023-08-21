function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log('Saldo Insuficiente');
        console.log(`R$: ${this.saldo.toFixed(2)}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
};

Conta.prototype.verSaldo = function() {
    return `Agencia: ${this.agencia}. Saldo: ${this.saldo.toFixed(2)} R$`;
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > this.saldo + this.limite) {
        console.log('Saldo Insuficiente');
        console.log(`R$: ${this.saldo.toFixed(2)}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function ContaSalario(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaSalario.prototype = Object.create(Conta.prototype);
ContaSalario.prototype.constructor = ContaSalario;

ContaSalario.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log('Saldo Insuficiente');
        console.log(`R$: ${this.saldo.toFixed(2)}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.depositar(22);
conta1.sacar(20);

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(120);

const contaSalario = new ContaSalario(11, 33, 500);
contaSalario.sacar(200);
