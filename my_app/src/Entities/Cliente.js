class Cliente {
    constructor(
      nome, genero, dtNascimento, cpf, tpTelefone, DDD, celular, 
      tpResidencia, tpLogradouro, logradouro, numero, bairro, CEP, pais, estado, cidade, observacoes,
      email) {
      this.nome = nome;
      this.genero = genero;
      this.dtNascimento = dtNascimento;
      this.cpf = cpf;
      this.tpTelefone = tpTelefone;
      this.DDD = DDD;
      this.celular = celular;
      this.tpResidencia = tpResidencia;
      this.tpLogradouro = tpLogradouro;
      this.logradouro = logradouro;
      this.numero = numero;
      this.bairro = bairro;
      this.CEP = CEP;
      this.pais = pais;
      this.estado = estado;
      this.cidade = cidade;
      this.observacoes = observacoes;
      this.email = email;
    }
  }

  export default Cliente;