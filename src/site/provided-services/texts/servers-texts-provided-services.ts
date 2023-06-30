
export class ServersTextsProvidedServices {

  static servers: string[] = [];

  static cardText: string = `            Servidor pode trazer diversos benefícios para uma empresa de pequeno ou médio porte, proporcionando uma
  infraestrutura tecnológica mais eficiente e confiável. Neste texto, exploraremos esses benefícios e
  explicaremos por que uma rede com servidor pode
  ser vantajosa para seu tipo de negócio.`

  static subTitle0: string = 'Armazenamento centralizado de dados';
  static text0: string = `Com uma rede com servidor, é possível centralizar o armazenamento de dados em um local seguro e acessível a todos os funcionários da empresa. Isso elimina a necessidade de compartilhar arquivos por e-mail ou dispositivos de armazenamento externos, melhorando a colaboração e facilitando o trabalho em equipe.`;

  static subTitle1: string = 'Backup e recuperação de dados';
  static text1: string = `Ao utilizar um servidor dedicado, é possível implementar estratégias de backup automatizadas e eficientes. Isso significa que os dados importantes da empresa são protegidos contra perdas acidentais, falhas de hardware ou ataques cibernéticos. Caso ocorra algum problema, a recuperação dos dados se torna mais ágil e simples.`;

  static subTitle2: string = 'Maior segurança';
  static text2: string = `Uma rede com servidor proporciona uma camada adicional de segurança para os dados da empresa. Os servidores podem ser configurados com medidas de proteção, como firewalls, criptografia e autenticação de acesso, reduzindo o risco de invasões e vazamentos de informações sensíveis. Além disso, é possível estabelecer políticas de controle de acesso, garantindo que apenas as pessoas autorizadas tenham permissão para acessar determinados recursos e dados.`;

  static subTitle3: string = 'Gerenciamento simplificado';
  static text3: string = `Com uma rede com servidor, o gerenciamento de recursos de TI se torna mais simples e eficiente. É possível centralizar as configurações de rede, gerenciar contas de usuário, implementar políticas de segurança e instalar atualizações de software de forma centralizada, o que economiza tempo e esforço dos profissionais de TI.`;

  // static subTitle4: string = 'Acesso remoto e mobilidade';
  // static text4: string = `Uma rede com servidor permite que os funcionários acessem os recursos e arquivos da empresa de qualquer lugar, por meio de conexões remotas seguras. Isso possibilita maior mobilidade, facilitando o trabalho em equipe, o acesso a informações importantes durante reuniões externas e até mesmo o trabalho remoto, se necessário.`;

  static subTitle5: string = 'Escalabilidade e flexibilidade';
  static text5: string = `Com um servidor dedicado, a capacidade da rede pode ser facilmente expandida conforme a empresa cresce. É possível adicionar mais armazenamento, recursos de processamento e usuários à medida que a demanda aumenta, garantindo que a infraestrutura de TI acompanhe o ritmo de crescimento do negócio.`;

  static subTitle6: string = 'Aplicações e serviços centralizados';
  static text6: string = `Uma rede com servidor permite a centralização de aplicativos e serviços importantes para a empresa. Isso significa que os funcionários podem acessar essas ferramentas a partir de qualquer computador na rede, o que simplifica o gerenciamento de software, reduz os custos com licenças e garante que todos estejam utilizando a mesma versão atualizada das aplicações.`;

  static serversTexts(): string[] {
    this.servers.push(
      this.subTitle0,
      this.text0,
      this.subTitle1,
      this.text1,
      this.subTitle2,
      this.text2,
      this.subTitle3,
      this.text3,
      // this.subTitle4,
      // this.text4,
    )
    return this.servers;
  }





}
