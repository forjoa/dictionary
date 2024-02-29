export const words = [
  {
    word: 'Aplicación Web',
    description:
      'Una aplicación web es un programa o software que funciona en un navegador web y se accede a través de Internet. Puede ser estática o dinámica, y generalmente utiliza al menos un lenguaje del lado del cliente, como HTML, CSS y JavaScript.',
  },
  {
    word: 'Aplicación Web Estática',
    description:
      'Son aplicaciones web que no requieren interacción con un servidor para funcionar y generalmente contienen información no sensible. Esta información puede estar alojada en la web y se accede directamente desde el navegador. Un ejemplo es un sitio web corporativo simple.',
  },
  {
    word: 'Aplicación Web Dinámica',
    description:
      'Son aplicaciones web que requieren interacción con un servidor para funcionar, generalmente para recuperar datos de una base de datos o realizar otras operaciones. Estas aplicaciones pueden requerir autenticación y tienden a ser más interactivas.',
  },
  {
    word: 'Arquitectura Web',
    description:
      'Se refiere a la estructura y organización de una aplicación o sitio web, desde el hardware subyacente hasta el software y la forma en que se comunican. Incluye decisiones de diseño como la elección de lenguajes de programación, servidores web, bases de datos y la interacción entre el cliente y el servidor para garantizar el funcionamiento de la aplicación web.',
  },
  {
    word: 'Capa Cliente',
    description:
      'La capa cliente es la parte de una aplicación que se ejecuta en el navegador web del usuario. Incluye la interfaz de usuario y la lógica del lado del cliente, generalmente implementada en HTML, CSS y JavaScript.',
  },
  {
    word: 'Capa Negocio',
    description:
      'La capa de negocio es la parte de una aplicación que se encarga de la lógica de negocio y el procesamiento de datos. Puede incluir reglas de negocio, cálculos y manipulación de datos antes de que se almacenen o se presenten al usuario.',
  },
  {
    word: 'Capa Datos',
    description:
      'La capa de datos es la parte de una aplicación que se encarga del almacenamiento y recuperación de datos. Puede interactuar con bases de datos, sistemas de archivos u otras fuentes de datos.',
  },
  {
    word: 'W3C (World Wide Web Consortium)',
    description:
      'El W3C es un consorcio internacional que desarrolla estándares web abiertos para garantizar la interoperabilidad y la evolución de la World Wide Web. Define especificaciones como HTML, CSS y XML.',
  },
  {
    word: 'Servidor Web',
    description:
      'Un servidor web es un software que atiende las solicitudes de los clientes (navegadores web) y entrega contenido web, como páginas HTML, imágenes y otros recursos, a través de Internet.',
  },
  {
    word: 'Servidor',
    description:
      'Un servidor es una computadora o un sistema que proporciona servicios o recursos a otras computadoras o clientes. Puede ser un servidor web, un servidor de bases de datos, un servidor de correo, etc.',
  },
  {
    word: 'Petición / Request',
    description:
      'Una petición (o request) es una solicitud que un cliente envía a un servidor para solicitar recursos o acciones. En el contexto de una aplicación web, una petición HTTP es común y se utiliza para cargar páginas web, imágenes u otros recursos.',
  },
  {
    word: 'Dirección IP',
    description:
      'Una dirección IP es un identificador numérico único asignado a cada dispositivo conectado a una red IP (como Internet). Puede ser una dirección IPv4 (por ejemplo, 192.168.1.1) o una dirección IPv6 (por ejemplo, 2001:0db8:85a3:0000:0000:8a2e:0370:7334).',
  },
  {
    word: 'Dominio',
    description:
      'Un dominio es una etiqueta legible por humanos que se utiliza para identificar recursos en Internet, como sitios web y servidores de correo electrónico. Los nombres de dominio se traducen a direcciones IP para localizar los recursos en la red.',
  },
  {
    word: 'PHP',
    description:
      'PHP es un lenguaje de programación de código abierto ampliamente utilizado en desarrollo web. Se utiliza para crear aplicaciones web dinámicas y puede incrustarse en el código HTML para generar contenido web dinámico.',
  },
  {
    word: 'Perl',
    description:
      'Perl es un lenguaje de programación versátil y de alto nivel que se utiliza en una variedad de aplicaciones, incluido el desarrollo web. Es conocido por su capacidad para procesar texto y realizar tareas de administración de sistemas.',
  },
  {
    word: 'Linux',
    description:
      'Linux es un sistema operativo de código abierto basado en Unix. Se utiliza comúnmente en servidores web debido a su estabilidad y seguridad. Varias distribuciones de Linux, como Ubuntu y CentOS, son populares en el ámbito del servidor.',
  },
  {
    word: 'APACHE',
    description:
      'Apache HTTP Server (comúnmente conocido como Apache) es un servidor web de código abierto ampliamente utilizado. Es conocido por su estabilidad y capacidad para alojar sitios web dinámicos.',
  },
  {
    word: 'Maria DB',
    description:
      'MariaDB es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto. Es una bifurcación de MySQL y se utiliza para almacenar y administrar datos en aplicaciones web y otros sistemas.',
  },
  {
    word: 'MySQL',
    description:
      'MySQL es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto ampliamente utilizado. Se utiliza para almacenar y administrar datos en aplicaciones web y otros sistemas.',
  },
  {
    word: 'Servidor de Aplicaciones',
    description:
      'Un servidor de aplicaciones es un software que proporciona un entorno para ejecutar aplicaciones web. Gestiona la lógica de negocio y la comunicación entre el cliente y el servidor. Ejemplos incluyen Apache Tomcat y WildFly.',
  },
  {
    word: 'APACHE Tomcat',
    description:
      'Apache Tomcat es un servidor de aplicaciones de código abierto que se utiliza comúnmente para ejecutar aplicaciones Java EE. Proporciona un entorno para ejecutar aplicaciones web basadas en Java.',
  },
  {
    word: 'XAMPP',
    description:
      'Es un paquete de software libre, que consiste principalmente en el sistema de gestión de bases de datos MySQL, el servidor web Apache y los intérpretes para lenguajes de script PHP y Perl.',
  },
  {
    word: 'Flexibilidad',
    description:
      'La flexibilidad en el desarrollo web se refiere a la capacidad de adaptar y modificar fácilmente una aplicación o sistema para satisfacer nuevas necesidades o cambios en los requisitos. Una arquitectura flexible permite ajustes sin afectar negativamente otras partes del sistema.',
  },
  {
    word: 'Estabilidad',
    description:
      'La estabilidad en el contexto del desarrollo web se refiere a la capacidad de un sistema para funcionar de manera consistente y predecible bajo diversas condiciones y cargas de trabajo. Un sistema estable minimiza los fallos y proporciona una experiencia confiable a los usuarios.',
  },
  {
    word: 'Escalabilidad',
    description:
      'La escalabilidad se refiere a la capacidad de un sistema para manejar un aumento en la carga o la demanda sin perder rendimiento. Un sistema escalable puede crecer para adaptarse a mayores requerimientos de recursos y usuarios.',
  },
  {
    word: 'Capacidad de Carga',
    description:
      'La capacidad de carga es la cantidad de tráfico o actividad que un sistema o aplicación puede manejar sin degradar su rendimiento. Se relaciona con la escalabilidad y es esencial para garantizar que una aplicación web pueda manejar un número creciente de usuarios simultáneos.',
  },
  {
    word: 'Seguridad',
    description:
      'La seguridad en el desarrollo web se refiere a la implementación de medidas y prácticas para proteger una aplicación o sistema contra amenazas, ataques y acceso no autorizado. Incluye técnicas como encriptación, autenticación y autorización.',
  },
  {
    word: 'Hosting',
    description:
      'El hosting es el servicio que permite a los usuarios almacenar y acceder a sus sitios web y aplicaciones en servidores remotos. Los proveedores de hosting ofrecen espacio en servidores y servicios relacionados, como almacenamiento, ancho de banda y seguridad.',
  },
  {
    word: 'XAMPP',
    description:
      'XAMPP es un paquete de software libre que proporciona un entorno de desarrollo local. Incluye herramientas como el servidor web Apache, el sistema de gestión de bases de datos MySQL, y los intérpretes para los lenguajes de script PHP y Perl.',
  },
  {
    word: 'LAMP',
    description:
      'LAMP es un acrónimo que se refiere a un conjunto de software de código abierto comúnmente utilizado en el desarrollo web. Incluye Linux (sistema operativo), Apache (servidor web), MySQL (base de datos) y PHP (lenguaje de programación).',
  },
  {
    word: 'WAMP',
    description:
      'WAMP es un acrónimo que representa un entorno de desarrollo web en sistemas Windows. Incluye Windows (sistema operativo), Apache (servidor web), MySQL (base de datos) y PHP (lenguaje de programación).',
  },
  {
    word: 'MySQL/MariaDB',
    description:
      'MySQL y MariaDB son sistemas de gestión de bases de datos relacionales de código abierto. Ambos se utilizan ampliamente en el desarrollo web para almacenar y gestionar datos en aplicaciones.',
  },
  {
    word: 'PHP',
    description:
      'PHP es un lenguaje de programación de código abierto ampliamente utilizado en el desarrollo web. Se utiliza para crear aplicaciones web dinámicas y puede integrarse en el código HTML para generar contenido web dinámico.',
  },
  {
    word: 'Perl',
    description:
      'Perl es un lenguaje de programación versátil y de alto nivel utilizado en varias aplicaciones, incluido el desarrollo web. Es conocido por su capacidad para procesar texto y realizar tareas de administración de sistemas.',
  },
  {
    word: 'Servidor de Aplicaciones',
    description:
      'Un servidor de aplicaciones es un software que proporciona un entorno para ejecutar aplicaciones web. Gestiona la lógica de negocio y la comunicación entre el cliente y el servidor. Ejemplos incluyen Apache Tomcat y WildFly.',
  },
  {
    word: 'APACHE Tomcat',
    description:
      'Apache Tomcat es un servidor de aplicaciones de código abierto comúnmente utilizado para ejecutar aplicaciones Java EE. Proporciona un entorno para ejecutar aplicaciones web basadas en Java.',
  },
  {
    word: 'Protocolo de Comunicación',
    description:
      'Un protocolo de comunicación es un conjunto de reglas y convenciones que permiten la comunicación entre sistemas. En el contexto web, ejemplos incluyen HTTP (Hypertext Transfer Protocol) y HTTPS (HTTP Secure).',
  },
  {
    word: 'Parámetros de Configuración',
    description:
      'Los parámetros de configuración son ajustes específicos que afectan el comportamiento de un sistema o aplicación. En el desarrollo web, estos pueden incluir configuraciones de servidor, bases de datos y aplicaciones.',
  },
  {
    word: 'Directivas de Control de Servidor',
    description:
      'Las directivas de control de servidor son configuraciones que especifican cómo debe comportarse un servidor web. Se utilizan para personalizar la configuración del servidor, como reglas de acceso y opciones de seguridad.',
  },
  {
    word: 'httpd.conf',
    description:
      'httpd.conf es el archivo de configuración principal del servidor web Apache. Contiene directivas que controlan la configuración del servidor, como la asignación de puertos, la ubicación de archivos y la configuración de módulos.',
  },
  {
    word: 'Modularidad',
    description:
      'La modularidad en el desarrollo web se refiere a la práctica de dividir una aplicación en módulos independientes y reutilizables. Esto facilita el mantenimiento, la escalabilidad y la implementación de nuevas funcionalidades.',
  },
  {
    word: 'Módulo Estático',
    description:
      'Un módulo estático es una extensión del servidor web que se carga durante el inicio y permanece activa durante la ejecución. Los módulos estáticos están vinculados directamente al servidor y no se pueden cargar o descargar dinámicamente.',
  },
  {
    word: 'Módulo Compartido',
    description:
      'Un módulo compartido es una extensión del servidor web que se carga dinámicamente durante la ejecución. Puede ser cargado o descargado según sea necesario, lo que permite una mayor flexibilidad y eficiencia en el uso de recursos.',
  },
  {
    word: 'Módulo en Conjunto',
    description:
      'Un módulo en conjunto es un conjunto de módulos individuales agrupados para proporcionar una funcionalidad específica en un servidor web. Esto permite una configuración más sencilla y la gestión de características relacionadas.',
  },
  {
    word: 'Módulos Individuales',
    description:
      'Los módulos individuales son componentes independientes que se pueden agregar o quitar del servidor web según sea necesario. Esto proporciona una mayor flexibilidad al permitir la personalización de la funcionalidad del servidor.',
  },
  {
    word: 'HTTP',
    description:
      'HTTP (Hypertext Transfer Protocol) es un protocolo de aplicación para la transferencia de información en la World Wide Web. Se utiliza para la comunicación entre clientes (navegadores) y servidores web.',
  },
  {
    word: 'HTTPS',
    description:
      'HTTPS (HTTP Secure) es la versión segura de HTTP que utiliza cifrado para proteger la comunicación entre clientes y servidores. Es esencial para la seguridad de la información transmitida a través de la web.',
  },
  {
    word: 'FTP',
    description:
      'FTP (File Transfer Protocol) es un protocolo de red utilizado para la transferencia de archivos entre un cliente y un servidor. Permite la subida y descarga de archivos en entornos web y de red.',
  },
  {
    word: 'Request',
    description:
      'Una solicitud (request) es un mensaje enviado por un cliente a un servidor para solicitar un recurso o realizar una acción. En el contexto de una aplicación web, las solicitudes HTTP son comunes y se utilizan para cargar páginas y recursos.',
  },
  {
    word: 'Response',
    description:
      'Una respuesta (response) es la información devuelta por un servidor en respuesta a una solicitud del cliente. Puede incluir datos, recursos o mensajes de estado que informan al cliente sobre el resultado de la solicitud.',
  },
  {
    word: 'POST',
    description:
      'POST es un método de solicitud en HTTP utilizado por los navegadores para enviar datos al servidor. Se utiliza comúnmente para enviar datos de formularios, actualizar recursos y realizar otras acciones que pueden tener efectos secundarios.',
  },
  {
    word: 'GET',
    description:
      'GET es un método de solicitud en HTTP utilizado para recuperar datos del servidor. Se utiliza cuando el cliente solicita información y no realiza cambios en el estado del servidor durante la operación.',
  },
  {
    word: 'OPTIONS',
    description:
      'OPTIONS es un método de solicitud en HTTP utilizado para obtener información sobre las opciones y requisitos de comunicación disponibles en el servidor. Se utiliza para determinar los métodos permitidos y configuraciones de seguridad.',
  },
  {
    word: 'Cookies',
    description:
      'Las cookies son pequeños fragmentos de datos enviados por un servidor y almacenados en el navegador del cliente. Se utilizan para realizar un seguimiento de la información del usuario y mantener el estado de la sesión entre solicitudes.',
  },
  {
    word: 'URL',
    description:
      'URL (Uniform Resource Locator) es una dirección que se utiliza para identificar recursos en la web. Incluye el protocolo utilizado (HTTP, HTTPS), el dominio y la ruta al recurso específico.',
  },
  {
    word: 'VirtualHost',
    description:
      'Un VirtualHost es una configuración que permite a un servidor web alojar varios sitios web en una sola máquina. Permite asignar diferentes dominios o direcciones IP a diferentes conjuntos de archivos y configuraciones.',
  },
  {
    word: 'Autorización',
    description:
      'La autorización en el contexto web se refiere al proceso de permitir o denegar el acceso a recursos o funcionalidades específicas a usuarios autenticados. Se utiliza para controlar qué acciones pueden realizar los usuarios después de la autenticación.',
  },
  {
    word: 'Autenticación',
    description:
      'La autenticación en el contexto web es el proceso de verificar la identidad de un usuario. Se realiza mediante credenciales como nombre de usuario y contraseña, certificados digitales o métodos biométricos.',
  },
  {
    word: 'SSL',
    description:
      'SSL (Secure Sockets Layer) es un protocolo de seguridad que establece una conexión cifrada entre un cliente y un servidor. Se utiliza para proteger la integridad y confidencialidad de la información transmitida a través de la web.',
  },
  {
    word: 'TLS',
    description:
      'TLS (Transport Layer Security) es el sucesor de SSL y proporciona una capa segura sobre la conexión entre un cliente y un servidor. Al igual que SSL, se utiliza para garantizar la seguridad de la información transmitida.',
  },
    {
    word: 'Transacción',
    description: 'En el contexto de bases de datos, una transacción es una secuencia de una o varias operaciones que se ejecutan como una única unidad, de manera que o bien todas se completan con éxito o ninguna se realiza.',
  },
  {
    word: 'Sesión asociado a un identificador único',
    description: 'Una sesión es un período de interacción entre un usuario y un sistema de computadoras que se mantiene durante cierto tiempo. Asociado a un identificador único significa que cada sesión está vinculada a un identificador único para identificar de manera única a cada usuario.',
  },
  {
    word: 'Logs',
    description: 'Los logs, o registros, son archivos que registran eventos, acciones o datos específicos en un sistema. Estos registros son útiles para el diagnóstico de problemas, seguimiento de actividades y auditoría.',
  },
  {
    word: 'Wildfly',
    description: 'Wildfly es un servidor de aplicaciones Java de código abierto y un proyecto de la comunidad JBoss. Proporciona un entorno para ejecutar aplicaciones Java EE (Enterprise Edition) y otras tecnologías relacionadas.',
  },
  {
    word: 'Glassfish',
    description: 'Glassfish es un servidor de aplicaciones de código abierto desarrollado por la comunidad de GlassFish, liderado por Oracle. Es compatible con las tecnologías Java EE y se utiliza para implementar aplicaciones empresariales.',
  },
  {
    word: 'Tomcat',
    description: 'Apache Tomcat es un contenedor de servlets y servidor web HTTP de código abierto. Implementa las especificaciones de Java Servlet y JavaServer Pages (JSP) y proporciona un entorno para ejecutar aplicaciones web Java.',
  },
  {
    word: 'Jass',
    description: 'JASS (Just Another Scripting Syntax) es un lenguaje de programación de scripting utilizado en el motor de juego Warcraft III. Se utiliza para escribir scripts que controlan el comportamiento de unidades y sistemas en el juego.',
  },
  {
    word: 'Server.xml',
    description: 'server.xml es un archivo de configuración en servidores web como Apache Tomcat. Contiene configuraciones importantes relacionadas con el servidor, como puertos, conectores y otras opciones de configuración.',
  },
  {
    word: 'Web.xml',
    description: 'web.xml es un archivo de configuración en aplicaciones web Java que utiliza tecnologías como Java Servlet y JavaServer Pages (JSP). Contiene configuraciones relacionadas con la aplicación, como servlets, filtros y mapeos de URL.',
  },
  {
    word: 'Work',
    description: 'En el contexto de servidores web, el directorio "work" puede referirse a un directorio utilizado para almacenar archivos temporales y resultados de compilación durante la ejecución de aplicaciones web.',
  },
  {
    word: 'Webapps',
    description: 'El directorio "webapps" es comúnmente utilizado en servidores web para almacenar aplicaciones web. En este directorio, se colocan las aplicaciones web que el servidor puede desplegar y ejecutar.',
  },
  {
    word: 'Temp',
    description: 'El directorio "temp" generalmente se refiere a una carpeta temporal utilizada para almacenar archivos temporales. Puede ser utilizado por aplicaciones para almacenar datos temporales durante su ejecución.',
  },
  {
    word: 'Libs',
    description: 'El directorio "libs" se utiliza comúnmente para almacenar bibliotecas (librerías) o JAR (Java Archive) necesarios para el funcionamiento de una aplicación Java.',
  },
  {
    word: 'Jar',
    description: 'Un archivo JAR (Java Archive) es un formato de archivo que permite empaquetar múltiples archivos Java en un solo archivo. Se utiliza para distribuir y almacenar bibliotecas, componentes y aplicaciones Java.',
  },
  {
    word: 'War',
    description: 'Un archivo WAR (Web Application Archive) es un formato de archivo utilizado para distribuir y desplegar aplicaciones web Java. Contiene todos los archivos necesarios para ejecutar la aplicación web.',
  },
  {
    word: 'Optimizar',
    description: 'Optimizar se refiere al proceso de mejorar el rendimiento, eficiencia o funcionalidad de un sistema, aplicación o código para lograr un mejor resultado en términos de velocidad, uso de recursos o calidad.',
  },
  {
    word: 'Refactorizar',
    description: 'Refactorizar es el proceso de reestructurar y mejorar el código fuente de un software sin cambiar su comportamiento externo. El objetivo es mejorar la legibilidad, mantenibilidad y eficiencia del código.',
  },
  {
    word: 'Dns',
    description: 'DNS (Domain Name System) es un sistema de nomenclatura jerárquico utilizado para traducir nombres de dominio legibles por humanos en direcciones IP numéricas que son utilizadas por los equipos en Internet.',
  },
  {
    word: 'Ldap',
    description: 'LDAP (Lightweight Directory Access Protocol) es un protocolo estándar utilizado para acceder y mantener servicios de directorio de información de manera distribuida sobre una red TCP/IP.',
  },
  {
    word: 'Ip',
    description: 'IP (Internet Protocol) es un protocolo de comunicación que se utiliza para la transmisión de datos en redes de computadoras. Es responsable de la asignación de direcciones y el enrutamiento de los paquetes de datos.',
  },
  {
    word: 'Dominio',
    description: 'En el contexto de Internet, un dominio es una identificación asociada a una dirección IP que se utiliza para localizar y acceder a recursos en la red. Puede representar un sitio web, servidor de correo, u otros servicios.',
  },
  {
    word: 'FTP',
    description: 'FTP (File Transfer Protocol) es un protocolo estándar de red utilizado para la transferencia de archivos entre un cliente y un servidor en una red TCP/IP. Permite subir y bajar archivos de y hacia un servidor.',
  },
  {
    word: 'Hosting',
    description: 'El hosting se refiere al servicio que proporciona espacio en servidores web para alojar sitios web o aplicaciones. Los proveedores de hosting ofrecen servicios de almacenamiento, ancho de banda y otros recursos necesarios.',
  },
  {
    word: 'Comandos con exclamación y sin',
    description: 'En sistemas basados en UNIX y Linux, los comandos con exclamación (!) y sin ella tienen significados diferentes. El comando con exclamación se utiliza en el historial de comandos para repetir o editar comandos anteriores, mientras que el comando sin exclamación realiza la ejecución normal de un comando.',
  },
  {
    word: 'FileZilla',
    description: 'FileZilla es un cliente de código abierto para FTP, FTPS, y SFTP. Permite la transferencia de archivos entre un cliente y un servidor. "filiZilla" parece ser un error tipográfico, probablemente se refiere a "FileZilla".',
  },
]

// order words
words.sort((a, b) => (a.word > b.word ? 1 : -1))
