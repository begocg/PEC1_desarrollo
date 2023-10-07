
# La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno.
**¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.**
Una de las ventajas de usar etiquetas semánticas es que el código se comprende mejor, ya que todos saben qué es un "header" (encabezado) o un "footer" (pie de página) sin necesidad de haber siquiera empezado a programar. Por tanto, hace el código más user-friendly. Otra ventaja es que le facilita el trabajo a los lectores de pantalla. Para personas con dispacidad visual, el lector de pantalla interpreta el texto y lo lee en voz alta. Si se usan etiquetas semánticas, es más fácil que los lectores de pantalla puedan transmitir la información (esto es el encabezado, esto es el menú de navegación) a los usuarios que lo necesiten. Como última ventaja, mencionaría la mejora en el SEO. Google, uno de los motores de búqueda más célebres, utiliza estas etiquetas semánticas para comprender la estructura y el contenido de la página web. Si usas las etiquetas semánticas correctamente, el motor de búsqueda puede interpretar mejor tu web y la posicionará más alto.

**Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.**
- API de Canvas: Permite a los desarrolladores crear gráficos o imágenes directamente en el navegador utilizando JavaScript.
- API de File: Permite seleccionar y manipular archivos a los usuarios desde el navegador. Útil para formularios de carga de documentos.
- API de Geolocalización: Permite al navegador obtener la ubicación geográfica del dispositivo del usuario.

**Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).**
Para aplicar diferentes estilos CSS, se utilizan las media queries, que nos permiten definir una regla de estilo específica para un dispositivo específico en función del tamaño de píxeles de su pantalla.

**Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).**
1. Compilación a JavaScript: el resultado final será código JavaScript.
2. Uso de clases: podemos definir clases con propiedades y métodos, útil para la organización del código.
3. Tipado estático: los tipos de variables no cambian en tiempo de ejecución y, gracias a la comprobación de tipos estricta, detectamos errores antes.
4. Organización de código: los módulos de TypeScript nos permiten importar o exportar funciones, clases y variables entre archivos para que todo esté mejor estructurado.

# El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas.
- Cita al menos 2 de estos preprocesadores: Less y Sass.
- Cita al menos 4 ventajas que ofrecen estos preprocesadores: permiten definir variables para almacenar valores (colores, tamaños de fuente) y poderlos reutilizar; admiten operaciones matemáticas (útil para el cálculo de valores como márgenes o posiciones); se pueden anidar selectores dentro de otros selectores, y los mixins que englogan varias propiedades CSS que pueden ser reutilizadas a lo largo del código con tal solo escribir el nombre.
- Explica brevemente en qué consisten los sourcemaps: es un archivo que se utiliza para relacionar el código fuente original con el código optimizado que se utiliza en producción.
- Explica qué es un transpilador: es una herramienta de software que tranforma un código fuente en un lenguaje de programación a otro código fuente distinto, manteniendo la funcionalidad.

# El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos.
- Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos: Git y Subversion, y npm y Yarn.
- Cita y explica al menos 3 comandos de Git: git init que se utiliza para crear el repositorio en Git y los dos que usaré para subir este archivo, git add y git commit -m "", que se utilizan para añadir el archivo al repositorio de manera local (el primero) y para confirmar los cambios y subirlos (el segundo).
- Cita y explica brevemente las características más definitorias de WebPack: soporta múltiples tipos de archivo (JavaScript, HTML, CSS, imágenes, etc.), permite la instalación de plugins que añade más funcionalidades en función de las necesidades del usuario y cuenta con Webpack DevServer que nos permite tener un servidor de desarrollo en tiempo con recarga automática que nos facilita la tarea de desarrollo al visualizar los cambios.