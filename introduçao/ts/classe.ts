// Definindo uma classe em TypeScript
class Carro {
    marca: string;
    modelo: string;
    ano: number;
  
    constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    // Método da classe para exibir informações do carro
    exibirInformacoes(): string {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
  }
  
  // Criando uma instância da classe Carro
  const meuCarro = new Carro("Toyota", "Corolla", 2022);
  
  // Chamando o método da classe para exibir as informações
  console.log(meuCarro.exibirInformacoes());
  // Saída: "Marca: Toyota, Modelo: Corolla, Ano: 2022"
  