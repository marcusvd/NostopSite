


export class WiredNetworkTextsProvidedServices {

  static wiredNetwork: string[] = [];

  static cardText:string = `
  Uma rede local cabeada é uma ótima solução para conectar seus dispositivos e fornecer uma conexão a internet
  mais rápida e confiável. Temos vários benefícios em utilizar uma rede local cabeada, abaixo citamos alguns
`;

  static subTitle0: string = 'Confiabilidade:'
  static text0: string = `Uma conexão cabeada fornece um sinal estável e confiável que não é interrompido por interferências externas e não é vulnerável a cortes temporários da conexão.`;

  static subTitle1: string = 'Segurança:'
  static text1: string = `É muito mais difícil que o seu sinal seja interceptado por pessoas mal-intencionadas devido a sua conexão cabeada ser mais difícil de penetrar.`;

  static subTitle2: string = 'Velocidade:';
  static text2: string = `Uma rede local cabeada oferece conexões a internet com maior taxa de dados e mais velocidade se wi-fi fosse como rede cabeada o homem não passaria cabos abaixo do oceano de um continente ao outro.`;


  static wiredNetworkTexts(): string[] {
    this.wiredNetwork.push(
      this.subTitle0,
      this.text0,
      this.subTitle1,
      this.text1,
      this.subTitle2,
      this.text2,
    )
    return this.wiredNetwork;
  }





}
