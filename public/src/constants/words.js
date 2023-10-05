export const words = [
  {
    word: "Aplicación Web",
    description:
      "Una aplicación web es un programa o software que funciona en un navegador web y se accede a través de Internet. Puede ser estática o dinámica, y generalmente utiliza al menos un lenguaje del lado del cliente, como HTML, CSS y JavaScript.",
  },
  {
    word: "Aplicación Web Estática",
    description:
      "Son aplicaciones web que no requieren interacción con un servidor para funcionar y generalmente contienen información no sensible. Esta información puede estar alojada en la web y se accede directamente desde el navegador. Un ejemplo es un sitio web corporativo simple.",
  },
  {
    word: "Aplicación Web Dinámica",
    description:
      "Son aplicaciones web que requieren interacción con un servidor para funcionar, generalmente para recuperar datos de una base de datos o realizar otras operaciones. Estas aplicaciones pueden requerir autenticación y tienden a ser más interactivas.",
  },
  {
    word: "Arquitectura Web",
    description:
      "Se refiere a la estructura y organización de una aplicación o sitio web, desde el hardware subyacente hasta el software y la forma en que se comunican. Incluye decisiones de diseño como la elección de lenguajes de programación, servidores web, bases de datos y la interacción entre el cliente y el servidor para garantizar el funcionamiento de la aplicación web.",
  },
  {
    word: "Capa Cliente",
    description:
      "La capa cliente es la parte de una aplicación que se ejecuta en el navegador web del usuario. Incluye la interfaz de usuario y la lógica del lado del cliente, generalmente implementada en HTML, CSS y JavaScript.",
  },
  {
    word: "Capa Negocio",
    description:
      "La capa de negocio es la parte de una aplicación que se encarga de la lógica de negocio y el procesamiento de datos. Puede incluir reglas de negocio, cálculos y manipulación de datos antes de que se almacenen o se presenten al usuario.",
  },
  {
    word: "Capa Datos",
    description:
      "La capa de datos es la parte de una aplicación que se encarga del almacenamiento y recuperación de datos. Puede interactuar con bases de datos, sistemas de archivos u otras fuentes de datos.",
  },
  {
    word: "W3C (World Wide Web Consortium)",
    description:
      "El W3C es un consorcio internacional que desarrolla estándares web abiertos para garantizar la interoperabilidad y la evolución de la World Wide Web. Define especificaciones como HTML, CSS y XML.",
  },
  {
    word: "Servidor Web",
    description:
      "Un servidor web es un software que atiende las solicitudes de los clientes (navegadores web) y entrega contenido web, como páginas HTML, imágenes y otros recursos, a través de Internet.",
  },
  {
    word: "Servidor",
    description:
      "Un servidor es una computadora o un sistema que proporciona servicios o recursos a otras computadoras o clientes. Puede ser un servidor web, un servidor de bases de datos, un servidor de correo, etc.",
  },
  {
    word: "Petición / Request",
    description:
      "Una petición (o request) es una solicitud que un cliente envía a un servidor para solicitar recursos o acciones. En el contexto de una aplicación web, una petición HTTP es común y se utiliza para cargar páginas web, imágenes u otros recursos.",
  },
  {
    word: "Dirección IP",
    description:
      "Una dirección IP es un identificador numérico único asignado a cada dispositivo conectado a una red IP (como Internet). Puede ser una dirección IPv4 (por ejemplo, 192.168.1.1) o una dirección IPv6 (por ejemplo, 2001:0db8:85a3:0000:0000:8a2e:0370:7334).",
  },
  {
    word: "Dominio",
    description:
      "Un dominio es una etiqueta legible por humanos que se utiliza para identificar recursos en Internet, como sitios web y servidores de correo electrónico. Los nombres de dominio se traducen a direcciones IP para localizar los recursos en la red.",
  },
  {
    word: "PHP",
    description:
      "PHP es un lenguaje de programación de código abierto ampliamente utilizado en desarrollo web. Se utiliza para crear aplicaciones web dinámicas y puede incrustarse en el código HTML para generar contenido web dinámico.",
  },
  {
    word: "Perl",
    description:
      "Perl es un lenguaje de programación versátil y de alto nivel que se utiliza en una variedad de aplicaciones, incluido el desarrollo web. Es conocido por su capacidad para procesar texto y realizar tareas de administración de sistemas.",
  },
  {
    word: "Linux",
    description:
      "Linux es un sistema operativo de código abierto basado en Unix. Se utiliza comúnmente en servidores web debido a su estabilidad y seguridad. Varias distribuciones de Linux, como Ubuntu y CentOS, son populares en el ámbito del servidor.",
  },
  {
    word: "APACHE",
    description:
      "Apache HTTP Server (comúnmente conocido como Apache) es un servidor web de código abierto ampliamente utilizado. Es conocido por su estabilidad y capacidad para alojar sitios web dinámicos.",
  },
  {
    word: "Maria DB",
    description:
      "MariaDB es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto. Es una bifurcación de MySQL y se utiliza para almacenar y administrar datos en aplicaciones web y otros sistemas.",
  },
  {
    word: "MySQL",
    description:
      "MySQL es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto ampliamente utilizado. Se utiliza para almacenar y administrar datos en aplicaciones web y otros sistemas.",
  },
  {
    word: "Servidor de Aplicaciones",
    description:
      "Un servidor de aplicaciones es un software que proporciona un entorno para ejecutar aplicaciones web. Gestiona la lógica de negocio y la comunicación entre el cliente y el servidor. Ejemplos incluyen Apache Tomcat y WildFly.",
  },
  {
    word: "APACHE Tomcat",
    description:
      "Apache Tomcat es un servidor de aplicaciones de código abierto que se utiliza comúnmente para ejecutar aplicaciones Java EE. Proporciona un entorno para ejecutar aplicaciones web basadas en Java.",
  },
  {
    word: "XAMPP",
    description:
      "Es un paquete de software libre, que consiste principalmente en el sistema de gestión de bases de datos MySQL, el servidor web Apache y los intérpretes para lenguajes de script PHP y Perl.",
  },
];

// order words
words.sort((a, b) => (a.word > b.word ? 1 : -1));
