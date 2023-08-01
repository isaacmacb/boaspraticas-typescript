// Definindo um tipo de objeto
type Pessoa = {
    nome: string;
    idade: number;
    email?: string; // O "?" torna o campo opcional
  };
  
  // Criando um objeto do tipo Pessoa
  const pessoa1: Pessoa = {
    nome: "João",
    idade: 30,
    email: "joao@example.com"
  };
  
  const pessoa2: Pessoa = {
    nome: "Maria",
    idade: 25
  };
  
  // Acessando os campos do objeto
  console.log(pessoa1.nome); // Saída: "João"
  console.log(pessoa2.idade); // Saída: 25
  