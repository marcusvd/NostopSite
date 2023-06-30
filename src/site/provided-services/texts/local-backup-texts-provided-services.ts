
export class LocalBackupTextsProvidedServices {

  static backUp: string[] = [];

  static cardText:string = `
  O backup é uma prática essencial para proteger os dados e informações importantes, sejam eles pessoais ou
  empresariais. Consiste em fazer cópias de segurança dos arquivos e armazená-las em locais alternativos, de
  forma a garantir a disponibilidade dos
  dados mesmo diante de situações adversas. Existem diversos benefícios associados à realização regular de
  backups.
`;

  static subTitle0: string = 'Recuperação de dados perdidos:';
  static text0: string = `Um dos principais benefícios do backup é a capacidade de recuperar dados perdidos.
  Falhas no hardware, ataques de malware,
   erros humanos ou desastres naturais podem resultar na perda de arquivos importantes.
   Ao ter um backup atualizado, é possível restaurar os dados de maneira rápida e eficiente, minimizando o impacto de qualquer incidente.`;

  static subTitle1: string = 'Proteção contra ataques cibernéticos:'
  static text1: string = `Com o aumento dos ataques cibernéticos,
  o backup se tornou uma defesa fundamental contra o sequestro de dados por ransomware e outras formas de malware.
  Ao manter cópias de segurança atualizadas,
  você reduz a dependência de pagar resgates para recuperar seus dados e pode restaurá-los a partir de um ponto anterior ao ataque.`;

  static subTitle2: string = 'Continuidade dos negócios:';
  static text2: string = `Para empresas, a interrupção das operações devido à perda de dados pode ser extremamente prejudicial.
  Ter um backup permite retomar as atividades rapidamente,
  minimizando o tempo de inatividade e evitando perdas financeiras e de reputação.
  Além disso, ao ter acesso aos dados de backup, é possível manter a continuidade dos negócios mesmo diante de desastres ou situações imprevistas.`;

  static subTitle3: string = 'Proteção contra erros humanos:';
  static text3: string = `Erros cometidos por pessoas são inevitáveis,
  e podem resultar na exclusão acidental de arquivos importantes. Ao ter um backup,
  é possível recuperar os dados perdidos sem grandes consequências.
  Isso é especialmente relevante para usuários domésticos que possam ter documentos pessoais, fotos ou vídeos valiosos.`;

  static subTitle4: string = 'Preservação de dados históricos:';
  static text4: string = `O backup não é apenas útil para recuperar dados recentes,
   mas também para preservar informações históricas.
   Manter backups periódicos permite que você tenha acesso a versões anteriores de arquivos,
   facilitando a recuperação de versões mais antigas ou a comparação de alterações ao longo do tempo.`;

  static subTitle5: string = 'Tranquilidade e confiança:';
  static text5: string = `Saber que seus dados estão protegidos por meio de backups traz tranquilidade e confiança. Independentemente do que possa acontecer,
  você tem a garantia de que seus arquivos importantes estão seguros e podem ser recuperados. Essa paz de espírito é inestimável,
  tanto para usuários individuais quanto para organizações. Em resumo, o backup oferece uma série de benefícios,
  desde a recuperação de dados perdidos até a proteção contra ataques cibernéticos. É uma prática essencial para garantir a segurança e a disponibilidade dos dados,
  oferecendo proteção contra uma ampla gama de ameaças.
  Portanto, é altamente recomendado realizar backups regularmente, seja por meio de soluções locais ou em nuvem,
   a fim de aproveitar todas as vantagens dessa importante medida de segurança.`;

  static backupTexts(): string[] {
    this.backUp.push(
      this.subTitle0,
      this.text0,
      this.subTitle1,
      this.text1,
      this.subTitle2,
      this.text2,
      this.subTitle3,
      this.text3,
      this.subTitle4,
      this.text4,
    )
    return this.backUp;
  }





}
