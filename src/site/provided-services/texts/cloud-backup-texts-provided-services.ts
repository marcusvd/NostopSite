


export class CloudBackupTextsProvidedServices {

 static cloudBackup: string[] = [];

  static cardText:string = `O backup em nuvem é uma solução moderna e eficiente para proteger seus dados importantes. Ao utilizar o
  backup em nuvem, você está armazenando cópias dos seus arquivos em servidores remotos, acessíveis pela
  internet. Isso oferece uma série de vantagens
  em relação aos métodos tradicionais de backup.`

  // static subTitle0: string = 'Acesso remoto:'
  // static text0: string = `Isso permite que você se conecte de qualquer lugar com uma conexão à internet, o que é particularmente útil para empresas que precisam acessar seus arquivos no trabalho, em casa ou em viagem.`;

  static subTitle1: string = 'Alta disponibilidade:'
  static text1: string = `Seus dados serão acessíveis 24/7 sem qualquer interrupção ou problemas de performance. `;

  static subTitle2: string = 'Menor custo inicial:';
  static text2: string = `As nuvens podem ser usadas para armazenar dados, Sem a necessidade de investir em uma infraestrutura local.`;

  static subTitle3: string = 'Segurança aprimorada:';
  static text3: string = `As nuvens oferecem uma camada adicional de segurança que impede o acesso não autorizado aos seus dados.`;


  static cloudBackupTexts(): string[] {
    this.cloudBackup.push(
      // this.subTitle0,
      // this.text0,
      this.subTitle1,
      this.text1,
      this.subTitle2,
      this.text2,
      this.subTitle3,
      this.text3,
    )
    return this.cloudBackup;
  }





}
