// unit3_questions.js
export const unit3Questions = [
  {
    id: 'u3q1',
    unit: 3,
    questionText: "¿Qué significa CAD en el contexto del diseño y la construcción?",
    options: [
      "Construcción Asistida Digitalmente",
      "Cálculo Avanzado de Diseño",
      "Diseño Asistido por Ordenador",
      "Documentación Arquitectónica Detallada"
    ],
    correctAnswerIndex: 2,
    explanation: "CAD son las siglas de 'Computer-Aided Design', que se traduce como Diseño Asistido por Ordenador. Se refiere al uso de software para crear, modificar y analizar diseños técnicos."
  },
  {
    id: 'u3q2',
    unit: 3,
    questionText: "AutoCAD es un software desarrollado por la empresa:",
    options: [
      "Microsoft",
      "Adobe",
      "Apple",
      "Autodesk"
    ],
    correctAnswerIndex: 3,
    explanation: "AutoCAD es un software de diseño CAD desarrollado y comercializado por la empresa Autodesk desde 1982."
  },
  {
    id: 'u3q3',
    unit: 3,
    questionText: "¿Cuál es uno de los principales usos de AutoCAD en arquitectura e ingeniería?",
    options: [
      "Edición de video profesional.",
      "Creación de música y sonido.",
      "Dibujo 2D y modelado 3D de precisión.",
      "Gestión de bases de datos complejas."
    ],
    correctAnswerIndex: 2,
    explanation: "AutoCAD se utiliza ampliamente para crear dibujos técnicos precisos en 2D (planos, secciones, alzados) y para el modelado de objetos en 3D."
  },
  {
    id: 'u3q4',
    unit: 3,
    questionText: "La interfaz de AutoCAD que contiene pestañas como Inicio, Insertar, Anotar, etc., se denomina:",
    options: [
      "Barra de Estado",
      "Ventana de Comandos",
      "Cinta de Opciones (Ribbon)",
      "Paleta de Propiedades"
    ],
    correctAnswerIndex: 2,
    explanation: "La Cinta de Opciones (Ribbon) es la barra superior en la interfaz de AutoCAD que organiza los comandos en pestañas y grupos funcionales."
  },
  {
    id: 'u3q5',
    unit: 3,
    questionText: "En AutoCAD, ¿dónde se introducen comandos directamente y se visualizan mensajes y opciones?",
    options: [
      "En la Barra de Herramientas de Acceso Rápido.",
      "En la Ficha Inicio.",
      "En el ViewCube.",
      "En la Ventana de Comandos."
    ],
    correctAnswerIndex: 3,
    explanation: "La Ventana de Comandos, usualmente en la parte inferior, permite escribir comandos y muestra solicitudes, opciones y mensajes del programa."
  },
  {
    id: 'u3q6',
    unit: 3,
    questionText: "Un archivo de plantilla en AutoCAD, con extensión .dwt, sirve para:",
    options: [
      "Guardar el dibujo finalizado como imagen.",
      "Iniciar nuevos dibujos con parámetros preconfigurados.",
      "Almacenar únicamente bloques.",
      "Realizar copias de seguridad automáticas."
    ],
    correctAnswerIndex: 1,
    explanation: "Las plantillas (.dwt) son archivos que contienen configuraciones predefinidas (unidades, capas, estilos, cajetín) para estandarizar e iniciar nuevos dibujos rápidamente."
  },
  {
    id: 'u3q7',
    unit: 3,
    questionText: "Al dibujar en el Espacio Modelo de AutoCAD, ¿a qué escala se trabaja generalmente?",
    options: [
      "1:100",
      "1:50",
      "1:1 (tamaño real)",
      "A la escala de impresión final"
    ],
    correctAnswerIndex: 2,
    explanation: "En el Espacio Modelo de AutoCAD se dibuja siempre a escala 1:1, es decir, a tamaño real. La escala de impresión se define posteriormente en el Espacio Presentación."
  },
  {
    id: 'u3q8',
    unit: 3,
    questionText: "¿Qué función cumple la Referencia a Objetos (REFENT / OSNAP) en AutoCAD?",
    options: [
      "Crear referencias externas a otros dibujos.",
      "Permitir designar puntos precisos en objetos existentes.",
      "Gestionar las propiedades de los objetos.",
      "Cambiar el sistema de coordenadas."
    ],
    correctAnswerIndex: 1,
    explanation: "La Referencia a Objetos (OSNAP o F3) permite seleccionar puntos geométricos exactos de los objetos ya dibujados (ej. punto final, centro, intersección), lo cual es esencial para la precisión."
  },
  {
    id: 'u3q9',
    unit: 3,
    questionText: "El comando `CAPA` (LA) en AutoCAD abre el:",
    options: [
      "Cuadro de diálogo de Propiedades.",
      "Administrador de Estilos de Cota.",
      "Administrador de Propiedades de Capa.",
      "Editor de Bloques."
    ],
    correctAnswerIndex: 2,
    explanation: "El comando `CAPA` (o `LA` por su alias en inglés Layer) abre el Administrador de Propiedades de Capa, donde se pueden crear, gestionar y modificar las capas del dibujo."
  },
  {
    id: 'u3q10',
    unit: 3,
    questionText: "¿Cuál es la principal ventaja de usar capas en AutoCAD?",
    options: [
      "Aumentar el tamaño del archivo.",
      "Organizar el dibujo agrupando objetos y controlando su visibilidad/propiedades.",
      "Limitar el número de objetos que se pueden dibujar.",
      "Convertir automáticamente dibujos 2D a 3D."
    ],
    correctAnswerIndex: 1,
    explanation: "Las capas permiten organizar el dibujo de forma lógica, agrupando objetos por función o tipo, y facilitando el control de su visibilidad, color, tipo de línea, etc."
  },
  {
    id: 'u3q11',
    unit: 3,
    questionText: "Si un objeto en AutoCAD tiene sus propiedades definidas como 'PorCapa' (ByLayer), significa que:",
    options: [
      "Sus propiedades son fijas e inmodificables.",
      "Toma las propiedades (color, tipo de línea) definidas en la capa a la que pertenece.",
      "Solo es visible en la capa activa.",
      "Se imprimirá siempre en color negro."
    ],
    correctAnswerIndex: 1,
    explanation: "Cuando las propiedades de un objeto están configuradas como 'PorCapa', este hereda automáticamente el color, tipo de línea, grosor de línea, etc., definidos para la capa en la que se encuentra."
  },
  {
    id: 'u3q12',
    unit: 3,
    questionText: "El comando `DESFASE` (O) en AutoCAD se utiliza para:",
    options: [
      "Crear objetos simétricos.",
      "Unir dos líneas en una esquina.",
      "Crear objetos paralelos a una distancia especificada.",
      "Recortar partes de un objeto."
    ],
    correctAnswerIndex: 2,
    explanation: "El comando `DESFASE` (Offset) crea una copia paralela de un objeto (línea, polilínea, círculo, etc.) a una distancia determinada."
  },
  {
    id: 'u3q13',
    unit: 3,
    questionText: "Para redondear una esquina entre dos líneas con un arco de radio específico en AutoCAD, se usa el comando:",
    options: [
      "CHAFLAN (CHA)",
      "RECORTA (TR)",
      "EMPALME (F)",
      "MATRIZ (AR)"
    ],
    correctAnswerIndex: 2,
    explanation: "El comando `EMPALME` (Fillet) se utiliza para conectar dos objetos con un arco de radio especificado. Si el radio es 0, crea una esquina viva."
  },
  {
    id: 'u3q14',
    unit: 3,
    questionText: "Los 'Pinzamientos' (Grips) en AutoCAD son:",
    options: [
      "Herramientas para medir distancias.",
      "Pequeños cuadrados que aparecen al seleccionar un objeto y permiten editarlo.",
      "Tipos de línea especiales.",
      "Comandos para crear texto."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Pinzamientos (Grips) son pequeños cuadrados azules que aparecen en puntos clave de un objeto seleccionado y permiten realizar modificaciones directas como mover, estirar, escalar o rotar."
  },
  {
    id: 'u3q15',
    unit: 3,
    questionText: "La variable de sistema `LTSCALE` en AutoCAD controla:",
    options: [
      "La escala de los bloques insertados.",
      "La escala global de todos los tipos de línea discontinuos.",
      "El tamaño del texto de las cotas.",
      "La escala de impresión por defecto."
    ],
    correctAnswerIndex: 1,
    explanation: "`LTSCALE` (Escala de Tipo de Línea) es un factor de escala global que afecta la apariencia (tamaño de trazos y espacios) de todos los tipos de línea discontinuos en el dibujo."
  },
  {
    id: 'u3q16',
    unit: 3,
    questionText: "Para crear texto de múltiples líneas como un solo objeto con formato avanzado en AutoCAD, se recomienda usar:",
    options: [
      "TEXTO (TEXT)",
      "DIRECTRIZ (LEADER)",
      "TEXTOM (MTEXT)",
      "ATRIBUTO (ATTDEF)"
    ],
    correctAnswerIndex: 2,
    explanation: "El comando `TEXTOM` (MTEXT o Texto Múltiple) permite crear párrafos de texto como un único objeto, con opciones de formato enriquecido (columnas, viñetas, fuentes, etc.)."
  },
  {
    id: 'u3q17',
    unit: 3,
    questionText: "Un 'Estilo de Cota' (`ACOESTIL` / `DIMSTYLE`) en AutoCAD define:",
    options: [
      "Solo la altura del texto de la cota.",
      "El tipo de objeto que se puede acotar.",
      "Una colección guardada de parámetros que controlan la apariencia de las cotas.",
      "La capa donde se deben dibujar las cotas."
    ],
    correctAnswerIndex: 2,
    explanation: "Un Estilo de Cota es un conjunto de configuraciones guardadas (tipo de flecha, tamaño de texto, formato de unidades, etc.) que determinan cómo se ven y se comportan las cotas."
  },
  {
    id: 'u3q18',
    unit: 3,
    questionText: "El 'Espacio Presentación' (Layout) en AutoCAD se utiliza principalmente para:",
    options: [
      "Dibujar el modelo 3D del proyecto.",
      "Configurar la hoja de papel final, insertar cajetín y ventanas gráficas para imprimir.",
      "Almacenar las definiciones de bloques.",
      "Realizar cálculos de áreas y volúmenes."
    ],
    correctAnswerIndex: 1,
    explanation: "El Espacio Presentación (o Espacio Papel) simula la hoja de impresión. En él se compone el plano final, insertando el cajetín y creando ventanas gráficas que muestran vistas del Espacio Modelo a la escala deseada."
  },
  {
    id: 'u3q19',
    unit: 3,
    questionText: "Una 'Ventana Gráfica' (Viewport) en una Presentación de AutoCAD es:",
    options: [
      "Un tipo de bloque dinámico.",
      "Un objeto que actúa como una 'ventana' para mostrar vistas del Espacio Modelo.",
      "Una herramienta para cambiar el color de fondo.",
      "Un archivo de imagen insertado."
    ],
    correctAnswerIndex: 1,
    explanation: "Las Ventanas Gráficas son objetos creados en el Espacio Presentación que muestran vistas específicas del contenido del Espacio Modelo, pudiendo cada una tener una escala y orientación diferente."
  },
  {
    id: 'u3q20',
    unit: 3,
    questionText: "Al trazar (imprimir) desde una Presentación en AutoCAD, la escala de trazado se suele configurar a:",
    options: [
      "1:100",
      "1:50",
      "Ajustar hasta ajustar (Scale to fit)",
      "1:1"
    ],
    correctAnswerIndex: 3,
    explanation: "Cuando se imprime desde una Presentación, la escala de trazado se configura normalmente a 1:1, ya que la escala real del dibujo se define dentro de las ventanas gráficas."
  },
  {
    id: 'u3q21',
    unit: 3,
    questionText: "¿Qué es un archivo .CTB en AutoCAD?",
    options: [
      "Un archivo de plantilla de dibujo.",
      "Un archivo de definición de bloques.",
      "Una Tabla de Estilos de Trazado dependiente del color.",
      "Un archivo de comandos personalizados (script)."
    ],
    correctAnswerIndex: 2,
    explanation: "Un archivo .CTB (Color-Dependent Plot Style Table) es una Tabla de Estilos de Trazado que define cómo se imprimen los objetos basándose en su color en pantalla (ej. el color rojo se imprime en negro con grosor 0.35mm)."
  },
  {
    id: 'u3q22',
    unit: 3,
    questionText: "El comando `UNIDADES` (UN) en AutoCAD permite controlar:",
    options: [
      "El número máximo de objetos en un dibujo.",
      "El formato y precisión de visualización de longitudes y ángulos.",
      "Las unidades de medida de los bloques insertados únicamente.",
      "La escala de los tipos de línea."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `UNIDADES` controla varios parámetros de visualización de unidades, como el formato (decimal, pies y pulgadas) y la precisión para longitudes y ángulos."
  },
  {
    id: 'u3q23',
    unit: 3,
    questionText: "La paleta `PROPIEDADES` (PR o Ctrl+1) en AutoCAD sirve para:",
    options: [
      "Dibujar objetos geométricos básicos.",
      "Ver y modificar las propiedades del objeto(s) seleccionado(s).",
      "Cargar tipos de línea y estilos de texto.",
      "Configurar los parámetros de impresión."
    ],
    correctAnswerIndex: 1,
    explanation: "La paleta Propiedades es una herramienta fundamental que muestra y permite editar todos los parámetros importantes (capa, color, tipo de línea, geometría específica, etc.) de los objetos seleccionados."
  },
  {
    id: 'u3q24',
    unit: 3,
    questionText: "¿Cuál de las siguientes NO es una operación booleana en modelado 3D de sólidos?",
    options: [
      "Unión",
      "Diferencia (Sustracción)",
      "Intersección",
      "Extrusión"
    ],
    correctAnswerIndex: 3,
    explanation: "Extrusión es un comando para crear sólidos a partir de perfiles 2D. Unión, Diferencia e Intersección son operaciones booleanas que combinan o modifican sólidos existentes."
  },
  {
    id: 'u3q25',
    unit: 3,
    questionText: "El comando `SOMBREA` (H) en AutoCAD se utiliza para:",
    options: [
      "Cambiar el color de fondo del dibujo.",
      "Aplicar efectos de iluminación a modelos 3D.",
      "Rellenar áreas cerradas con patrones o colores sólidos.",
      "Crear cotas automáticas."
    ],
    correctAnswerIndex: 2,
    explanation: "El comando `SOMBREA` (Hatch) permite rellenar áreas delimitadas por contornos cerrados con patrones predefinidos, definidos por el usuario, o colores sólidos."
  },
  {
    id: 'u3q26',
    unit: 3,
    questionText: "Para guardar un dibujo de AutoCAD como plantilla, se debe elegir la extensión:",
    options: [
      ".dwg",
      ".dxf",
      ".dwt",
      ".bak"
    ],
    correctAnswerIndex: 2,
    explanation: "Los archivos de plantilla de dibujo en AutoCAD se guardan con la extensión .dwt (Drawing Template)."
  },
  {
    id: 'u3q27',
    unit: 3,
    questionText: "La función `Ctrl+0` (LIMPIAR PANTALLA) en AutoCAD sirve para:",
    options: [
      "Borrar todos los objetos del dibujo.",
      "Cerrar AutoCAD sin guardar.",
      "Maximizar el área de dibujo ocultando elementos de la interfaz.",
      "Restablecer la vista por defecto."
    ],
    correctAnswerIndex: 2,
    explanation: "La combinación `Ctrl+0` (o el comando `LIMPIARPANTALLAON` / `LIMPIARPANTALLAOFF`) alterna la visibilidad de elementos de la interfaz como la cinta de opciones y la ventana de comandos para expandir el área de dibujo."
  },
  {
    id: 'u3q28',
    unit: 3,
    questionText: "Al cargar tipos de línea en AutoCAD, se suelen usar archivos con extensión:",
    options: [
      ".shx (archivos de forma/fuente)",
      ".pat (archivos de patrón de sombreado)",
      ".lin (archivos de definición de tipo de línea)",
      ".ctb (archivos de estilo de trazado)"
    ],
    correctAnswerIndex: 2,
    explanation: "Los tipos de línea se definen en archivos de texto con extensión .lin, como `acad.lin` o `acadiso.lin`."
  },
  {
    id: 'u3q29',
    unit: 3,
    questionText: "El comando `ACOLINEAL` (DIMLINEAR) crea cotas:",
    options: [
      "Paralelas a una línea inclinada.",
      "Radiales o de diámetro.",
      "Estrictamente horizontales o verticales.",
      "Angulares."
    ],
    correctAnswerIndex: 2,
    explanation: "El comando `ACOLINEAL` se utiliza para crear cotas que miden distancias horizontales o verticales exactas."
  },
  {
    id: 'u3q30',
    unit: 3,
    questionText: "Si se desactiva (Off) una capa en AutoCAD:",
    options: [
      "Los objetos de esa capa se borran permanentemente.",
      "Los objetos de esa capa se ocultan en todo el dibujo y no se imprimen.",
      "Los objetos de esa capa solo se ocultan en la ventana gráfica actual.",
      "Los objetos de esa capa cambian a color gris."
    ],
    correctAnswerIndex: 1,
    explanation: "Desactivar una capa (`Off`) hace que todos los objetos contenidos en ella se vuelvan invisibles en todas las vistas del dibujo y no se tracen (impriman)."
  },
  {
    id: 'u3q31',
    unit: 3,
    questionText: "¿Qué es el 'texto anotativo' en AutoCAD?",
    options: [
      "Texto que solo se puede leer, no editar.",
      "Texto que ajusta automáticamente su tamaño en el papel para ser legible a diferentes escalas de ventana.",
      "Texto que siempre se muestra con la misma fuente.",
      "Texto que se crea usando un comando especial de anotación 3D."
    ],
    correctAnswerIndex: 1,
    explanation: "El texto anotativo (y otros objetos de anotación) tiene la propiedad de ajustar su tamaño automáticamente en el espacio papel para mantener una altura legible, independientemente de la escala de la ventana gráfica en la que se muestre."
  },
  {
    id: 'u3q32',
    unit: 3,
    questionText: "El comando `MATRIZ` (AR) permite crear:",
    options: [
      "Regiones a partir de polilíneas cerradas.",
      "Múltiples copias de objetos en patrones rectangulares, polares o de camino.",
      "Líneas auxiliares infinitas.",
      "Bloques con atributos."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `MATRIZ` (Array) se utiliza para crear múltiples copias de uno o varios objetos, organizándolos en patrones rectangulares (filas y columnas), polares (alrededor de un centro) o a lo largo de una trayectoria."
  },
  {
    id: 'u3q33',
    unit: 3,
    questionText: "La variable `PSLTSCALE` en AutoCAD, si está establecida en 1:",
    options: [
      "Aplica la misma escala de tipo de línea a todas las capas.",
      "Hace que los tipos de línea se vean igual en el espacio papel independientemente de la escala de la ventana gráfica.",
      "Desactiva la visualización de tipos de línea.",
      "Define la escala de los tipos de línea solo para el espacio modelo."
    ],
    correctAnswerIndex: 1,
    explanation: "Cuando `PSLTSCALE` se establece en 1, la escala de los tipos de línea en el espacio papel (presentaciones) se ajusta para que los patrones se vean con la misma densidad en todas las ventanas gráficas, sin importar la escala de cada ventana."
  },
  {
    id: 'u3q34',
    unit: 3,
    questionText: "El comando `SIMETRIA` (MI) en AutoCAD crea:",
    options: [
      "Una copia girada del objeto.",
      "Una copia escalada del objeto.",
      "Una copia reflejada del objeto respecto a un eje.",
      "Una copia desfasada del objeto."
    ],
    correctAnswerIndex: 2,
    explanation: "El comando `SIMETRIA` (Mirror) crea una copia de los objetos seleccionados que es un reflejo especular de los originales a través de un eje de simetría definido por dos puntos."
  },
  {
    id: 'u3q35',
    unit: 3,
    questionText: "Para bloquear una ventana gráfica en una presentación y evitar cambios accidentales en su escala o encuadre, se debe:",
    options: [
      "Borrar la ventana gráfica y crear una nueva.",
      "Seleccionar la ventana y activar la opción 'Inmovilizar vista' o el candado.",
      "Cambiar la capa de la ventana gráfica a una capa bloqueada.",
      "Convertir la ventana gráfica en un bloque."
    ],
    correctAnswerIndex: 1,
    explanation: "Para evitar que la escala o el encuadre de una ventana gráfica se modifiquen accidentalmente, se puede seleccionar y elegir la opción 'Inmovilizar visualización' (Display Locked) o usar el icono del candado asociado."
  },
  {
    id: 'u3q36',
    unit: 3,
    questionText: "El comando `RECORTA` (TR) en AutoCAD sirve para:",
    options: [
      "Dividir un objeto en dos partes.",
      "Eliminar porciones de objetos que se extienden más allá de una arista de corte.",
      "Unir dos objetos discontinuos.",
      "Cambiar la longitud de un objeto."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `RECORTA` (Trim) se utiliza para cortar y eliminar las partes de los objetos que sobrepasan los límites definidos por otras aristas de corte seleccionadas."
  },
  {
    id: 'u3q37',
    unit: 3,
    questionText: "Al usar el comando `ACOTA` (DIM) de forma general, AutoCAD intenta:",
    options: [
      "Crear siempre una cota lineal horizontal.",
      "Inferir el tipo de cota más adecuado según el objeto seleccionado y cómo se mueva el cursor.",
      "Abrir el administrador de estilos de cota.",
      "Crear solo cotas de radio o diámetro."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `ACOTA` (DIM) es inteligente y puede crear diferentes tipos de cotas (lineal, alineada, angular, radio, diámetro) automáticamente, dependiendo del objeto que se designe y de la posición del cursor."
  },
  {
    id: 'u3q38',
    unit: 3,
    questionText: "El 'grosor de línea' es una propiedad de objeto que:",
    options: [
      "Solo afecta a cómo se ve el objeto en el espacio modelo.",
      "Define el grosor con el que se muestra en pantalla y/o se imprime una línea.",
      "Solo se puede asignar a través de los estilos de trazado (.ctb).",
      "Cambia automáticamente con la escala de la vista."
    ],
    correctAnswerIndex: 1,
    explanation: "La propiedad de grosor de línea permite asignar un ancho específico a los objetos, que se reflejará en la impresión y, si está activada la opción, también en la visualización en pantalla."
  },
  {
    id: 'u3q39',
    unit: 3,
    questionText: "¿Cuál es el propósito de la 'Vista preliminar' en el cuadro de diálogo Trazar de AutoCAD?",
    options: [
      "Guardar la configuración de página actual.",
      "Seleccionar el área de trazado.",
      "Mostrar cómo quedará el dibujo impreso o exportado antes de confirmar.",
      "Cambiar la impresora o trazador."
    ],
    correctAnswerIndex: 2,
    explanation: "La opción 'Vista preliminar' permite visualizar en pantalla una simulación de cómo se verá el dibujo una vez impreso o exportado, ayudando a verificar la configuración antes de gastar papel o generar el archivo final."
  },
  {
    id: 'u3q40',
    unit: 3,
    questionText: "Si se inutiliza una capa en una ventana gráfica específica de una presentación (`Inutilizar VP`):",
    options: [
      "La capa se oculta en todo el dibujo, incluyendo el espacio modelo.",
      "La capa se borra del dibujo.",
      "La capa se oculta solo en esa ventana gráfica, pero permanece visible en otras ventanas y en el modelo.",
      "La capa se convierte en no imprimible en todas las ventanas."
    ],
    correctAnswerIndex: 2,
    explanation: "La opción 'Inutilizar en ventana gráfica actual' (VP Freeze) oculta los objetos de una capa únicamente en la ventana gráfica activa de una presentación, sin afectar su visibilidad en el espacio modelo u otras ventanas gráficas."
  }
];
