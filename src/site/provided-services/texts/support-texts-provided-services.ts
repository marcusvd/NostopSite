
export class SupportTextsProvidedServices {

  static support: string[] = [];

  static cardText: string = `O suporte técnico remoto é uma forma eficiente e conveniente de fornecer assistência e solução de problemas
  relacionados a computadores, dispositivos eletrônicos e software. Em vez de agendar uma visita presencial de
  um técnico, o suporte remoto permite
  que um profissional qualificado resolva os problemas remotamente, por meio da internet. `

  static subTitle0: string = 'Economia de tempo e dinheiro:'
  static text0: string = `Com o suporte remoto, não há necessidade de esperar por um técnico chegar fisicamente ao local. Isso economiza tempo precioso, especialmente em situações de emergência, onde a resolução rápida é crucial. Além disso, os custos associados a deslocamento e transporte são reduzidos, uma vez que o suporte é prestado remotamente.`;

  static subTitle1: string = 'Acesso imediato a especialistas:'
  static text1: string = `Ao optar pelo suporte técnico remoto, você tem acesso direto a uma equipe de especialistas qualificados em diversas áreas. Independentemente de onde você esteja geograficamente, desde que tenha uma conexão com a internet, é possível receber assistência instantânea e profissional.`;

  static subTitle2: string = 'Resolução rápida de problemas:';
  static text2: string = `Com o suporte remoto, os técnicos podem visualizar e interagir diretamente com o seu dispositivo, permitindo uma análise mais precisa do problema. Ao compartilhar sua tela ou conceder acesso remoto ao técnico, ele pode diagnosticar e solucionar problemas de forma ágil e eficiente.`

  static subTitle3: string = 'Maior conveniência e flexibilidade:';
  static text3: string = `O suporte técnico remoto oferece uma experiência mais conveniente e flexível para os usuários. Não é necessário marcar um horário específico para receber o suporte, pois os técnicos estão disponíveis para ajudar em qualquer momento. Além disso, você pode receber assistência no conforto do seu próprio ambiente, sem a necessidade de se deslocar.`;

  static subTitle4: string = 'Aprendizado e capacitação:';
  static text4: string = `Durante uma sessão de suporte remoto, é possível aprender com os técnicos sobre a solução de problemas e obter dicas úteis para evitar problemas futuros. Os técnicos podem orientá-lo sobre as melhores práticas de manutenção e oferecer sugestões para maximizar o desempenho do seu dispositivo.`;

  static subTitle5: string = 'Segurança dos dados:';
  static text5: string = `Uma preocupação comum ao permitir acesso remoto é a segurança dos dados. No entanto, a maioria dos serviços de suporte remoto utiliza protocolos de segurança avançados para garantir a proteção das informações confidenciais. É importante escolher provedores confiáveis e estabelecer acordos de confidencialidade para garantir a segurança dos seus dados.`;

  static supportTexts(): string[] {
    this.support.push(
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
    return this.support;
  }





}
