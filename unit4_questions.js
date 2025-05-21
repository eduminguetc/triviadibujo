// unit4_questions.js
export const unit4Questions = [
  {
    id: 'u4q1',
    unit: 4,
    questionText: "¿Qué es BIM (Building Information Modeling) fundamentalmente?",
    options: [
      "Un software específico de Autodesk.",
      "Una metodología de trabajo colaborativa basada en modelos 3D con datos.",
      "Un tipo de archivo para planos 2D.",
      "Un estándar de dibujo técnico para CAD."
    ],
    correctAnswerIndex: 1,
    explanation: "BIM no es un software, sino una metodología de trabajo colaborativa que utiliza modelos 3D inteligentes que contienen información (parámetros) de los elementos constructivos."
  },
  {
    id: 'u4q2',
    unit: 4,
    questionText: "¿Cuál es una diferencia clave entre BIM y CAD tradicional?",
    options: [
      "CAD es solo para 3D y BIM para 2D.",
      "BIM imita el dibujo 2D, CAD el proceso constructivo.",
      "CAD usa modelos con datos, BIM solo líneas.",
      "BIM trabaja con un modelo único de información 3D, CAD requiere dibujar vistas por separado."
    ],
    correctAnswerIndex: 3,
    explanation: "Mientras CAD tradicional imita el dibujo 2D (requiriendo dibujar planta, alzado y sección por separado), BIM trabaja sobre un modelo único de información 3D del cual se extraen las vistas dinámicamente."
  },
  {
    id: 'u4q3',
    unit: 4,
    questionText: "El software Revit, desarrollado por Autodesk, es una aplicación para implementar la metodología:",
    options: [
      "CAD",
      "CAM (Fabricación Asistida por Ordenador)",
      "GIS (Sistemas de Información Geográfica)",
      "BIM"
    ],
    correctAnswerIndex: 3,
    explanation: "Revit es un software específico de Autodesk diseñado para trabajar con la metodología BIM (Building Information Modeling)."
  },
  {
    id: 'u4q4',
    unit: 4,
    questionText: "El acrónimo 'Revit' significa:",
    options: [
      "Realtime Visualization Tool",
      "Revise Instantly",
      "Revolutionary Engineering Vision",
      "Realistic Environment Imaging Technology"
    ],
    correctAnswerIndex: 1,
    explanation: "Revit es un acrónimo de 'Revise Instantly' (Revisar Instantáneamente), destacando la capacidad del software para actualizar los cambios en todo el modelo en tiempo real."
  },
  {
    id: 'u4q5',
    unit: 4,
    questionText: "En la interfaz de Revit, ¿dónde se organizan y acceden todas las Vistas, Planos y Familias del proyecto?",
    options: [
      "En la Cinta de Opciones.",
      "En la Ventana de Propiedades.",
      "En el Navegador de Proyectos.",
      "En la Barra de Controles de Vista."
    ],
    correctAnswerIndex: 2,
    explanation: "El Navegador de Proyectos es la estructura jerárquica (árbol) que organiza y permite acceder a todas las partes del proyecto, como Vistas, Planos, Familias, etc."
  },
  {
    id: 'u4q6',
    unit: 4,
    questionText: "Las plantillas de proyecto en Revit tienen la extensión de archivo:",
    options: [
      ".RVT",
      ".RFA",
      ".RTE",
      ".DWG"
    ],
    correctAnswerIndex: 2,
    explanation: "Las plantillas de proyecto de Revit, que sirven como base para iniciar nuevos proyectos, tienen la extensión .RTE."
  },
  {
    id: 'u4q7',
    unit: 4,
    questionText: "Al iniciar un nuevo proyecto en Revit, ¿cuál es una de las primeras configuraciones recomendadas?",
    options: [
      "Crear todas las familias cargables.",
      "Definir las Unidades de Proyecto (ej. metros, cm).",
      "Generar todas las tablas de planificación.",
      "Realizar el renderizado final."
    ],
    correctAnswerIndex: 1,
    explanation: "Una de las primeras y más importantes configuraciones al iniciar un proyecto en Revit es definir las Unidades de Proyecto (comando UN) para longitud, área, volumen, etc."
  },
  {
    id: 'u4q8',
    unit: 4,
    questionText: "En Revit, los 'Estilos de Objeto' definen:",
    options: [
      "El comportamiento paramétrico de las familias.",
      "La representación gráfica por defecto (grosor, color, patrón de línea) para cada categoría de objeto.",
      "Las propiedades de ejemplar de un elemento.",
      "La ubicación geográfica del proyecto."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Estilos de Objeto (`Gestionar > Configuración > Estilos de objeto`) controlan la apariencia gráfica por defecto (grosor de línea, color, patrón) de las categorías de objetos en vistas de proyección y corte."
  },
  {
    id: 'u4q9',
    unit: 4,
    questionText: "La herramienta 'Mover' (MV) en Revit, al activarla desde la cinta de opciones, puede ofrecer una función adicional llamada:",
    options: [
      "Agrupar",
      "Reflejar",
      "Separar (Disjoin)",
      "Bloquear"
    ],
    correctAnswerIndex: 2,
    explanation: "Al usar el comando Mover desde la cinta, existe la opción 'Separar' (Disjoin), útil si se quiere mover un elemento (ej. una ventana) sin que afecte a su anfitrión (el muro) o sus relaciones."
  },
  {
    id: 'u4q10',
    unit: 4,
    questionText: "¿Qué son las 'Familias de Sistema' en Revit?",
    options: [
      "Familias que se cargan desde archivos externos .RFA.",
      "Elementos únicos creados directamente en el proyecto.",
      "Familias predefinidas en Revit que no se cargan externamente (ej. Muros, Suelos).",
      "Conjuntos de parámetros compartidos."
    ],
    correctAnswerIndex: 2,
    explanation: "Las Familias de Sistema son componentes básicos del edificio definidos dentro de Revit y no se cargan desde archivos externos. Ejemplos incluyen muros, suelos, techos, niveles y rejillas."
  },
  {
    id: 'u4q11',
    unit: 4,
    questionText: "Las puertas y ventanas en Revit son típicamente:",
    options: [
      "Familias de Sistema.",
      "Familias Cargables (.RFA).",
      "Familias In Situ.",
      "Parámetros de Proyecto."
    ],
    correctAnswerIndex: 1,
    explanation: "Las puertas, ventanas, mobiliario, y muchos otros componentes se gestionan como Familias Cargables, que son archivos .RFA externos que se cargan en el proyecto."
  },
  {
    id: 'u4q12',
    unit: 4,
    questionText: "Los 'Parámetros de Tipo' en Revit afectan a:",
    options: [
      "Un único ejemplar seleccionado del elemento.",
      "Todos los ejemplares de ese tipo dentro de una familia en el proyecto.",
      "Solo a la vista activa.",
      "Únicamente a las familias de sistema."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Parámetros de Tipo se editan en el cuadro 'Editar Tipo' y sus cambios afectan a todos los ejemplares (instancias) de ese tipo específico dentro del proyecto."
  },
  {
    id: 'u4q13',
    unit: 4,
    questionText: "Si cambias la altura de una puerta específica en la paleta de Propiedades, estás modificando un:",
    options: [
      "Parámetro de Tipo.",
      "Parámetro de Ejemplar (Instancia).",
      "Parámetro Global.",
      "Parámetro Compartido únicamente."
    ],
    correctAnswerIndex: 1,
    explanation: "Las propiedades que se editan directamente en la paleta de Propiedades para un elemento seleccionado son Parámetros de Ejemplar (o Instancia), y solo afectan a ese elemento."
  },
  {
    id: 'u4q14',
    unit: 4,
    questionText: "La relación 'Huésped-Anfitrión' en Revit implica que:",
    options: [
      "Todos los elementos son anfitriones.",
      "Algunos elementos (huéspedes, ej. puertas) necesitan otro (anfitrión, ej. muros) para existir.",
      "Los huéspedes controlan a los anfitriones.",
      "Es una relación solo entre familias cargables."
    ],
    correctAnswerIndex: 1,
    explanation: "En Revit, ciertos elementos como puertas o ventanas (huéspedes) requieren un anfitrión (como un muro) para ser colocados. Si el anfitrión se elimina, el huésped también se elimina."
  },
  {
    id: 'u4q15',
    unit: 4,
    questionText: "Para controlar la visibilidad y apariencia gráfica de categorías de elementos en una vista específica en Revit, se usa:",
    options: [
      "El Navegador de Proyectos.",
      "La herramienta 'Alinear'.",
      "El cuadro de diálogo 'Modificaciones de Visibilidad/Gráficos' (VV o VG).",
      "La herramienta 'Estilos de Objeto' únicamente."
    ],
    correctAnswerIndex: 2,
    explanation: "El cuadro de diálogo 'Modificaciones de Visibilidad/Gráficos' (accesible con VV, VG, o desde las Propiedades de la vista) permite controlar qué categorías de elementos son visibles y cómo se representan gráficamente en esa vista en particular."
  },
  {
    id: 'u4q16',
    unit: 4,
    questionText: "Si ocultas un elemento en una vista usando 'Ocultar en vista > Elementos', ¿cómo puedes volver a verlo?",
    options: [
      "Deshaciendo la última acción (Ctrl+Z) solamente.",
      "Activando 'Mostrar elementos ocultos' (bombilla) y luego seleccionándolo para 'Mostrar en vista'.",
      "Cambiando el estilo visual de la vista.",
      "Eliminando la vista y creándola de nuevo."
    ],
    correctAnswerIndex: 1,
    explanation: "Para ver y restaurar elementos ocultos individualmente, se debe activar el modo 'Mostrar elementos ocultos' (icono de bombilla), seleccionar el elemento (que aparecerá en magenta) y usar la opción 'Mostrar en vista'."
  },
  {
    id: 'u4q17',
    unit: 4,
    questionText: "Las vistas de planta en Revit se generan asociadas a un:",
    options: [
      "Tipo de Muro.",
      "Nivel.",
      "Eje de Rejilla.",
      "Material."
    ],
    correctAnswerIndex: 1,
    explanation: "Las vistas de plano de planta, plano de techo reflejado y plano estructural se crean en referencia a los Niveles definidos en el proyecto."
  },
  {
    id: 'u4q18',
    unit: 4,
    questionText: "Una 'Plantilla de Vista' en Revit permite:",
    options: [
      "Crear nuevas familias de sistema.",
      "Definir el tipo de archivo del proyecto.",
      "Guardar y aplicar configuraciones de visibilidad y gráficos a múltiples vistas.",
      "Modelar elementos 3D complejos."
    ],
    correctAnswerIndex: 2,
    explanation: "Las Plantillas de Vista guardan configuraciones de una vista (escala, nivel de detalle, modificaciones de visibilidad/gráficos, etc.) para poder aplicarlas de forma consistente a otras vistas, estandarizando su apariencia."
  },
  {
    id: 'u4q19',
    unit: 4,
    questionText: "El comando `WT` (Window Tile) en Revit sirve para:",
    options: [
      "Crear un nuevo tipo de ventana.",
      "Mostrar todas las vistas abiertas en mosaico.",
      "Aplicar una plantilla de vista.",
      "Cerrar todas las ventanas inactivas."
    ],
    correctAnswerIndex: 1,
    explanation: "El atajo `WT` (o `Vista > Ventanas > Vistas en Mosaico`) organiza todas las ventanas de vistas abiertas para que se muestren simultáneamente en el área de dibujo."
  },
  {
    id: 'u4q20',
    unit: 4,
    questionText: "La 'Caja de Sección' (Section Box) es una herramienta útil en vistas 3D de Revit para:",
    options: [
      "Crear automáticamente vistas de sección 2D.",
      "Definir los límites de impresión de la vista 3D.",
      "Recortar la vista 3D y mostrar una porción o el interior del modelo.",
      "Añadir anotaciones y cotas a la vista 3D."
    ],
    correctAnswerIndex: 2,
    explanation: "La Caja de Sección, cuando se activa en las propiedades de una vista 3D, permite recortar interactivamente el modelo 3D para aislar partes específicas o explorar su interior."
  },
  {
    id: 'u4q21',
    unit: 4,
    questionText: "¿Qué son los 'Parámetros Compartidos' en Revit?",
    options: [
      "Parámetros que solo se pueden usar en un proyecto.",
      "Parámetros definidos en un archivo externo (.txt) que pueden cargarse en múltiples familias y proyectos.",
      "Parámetros que vienen por defecto en todas las familias.",
      "Parámetros que controlan la compartición del proyecto en la nube."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Parámetros Compartidos se definen en un archivo de texto externo y pueden ser utilizados en múltiples familias y proyectos, permitiendo que la misma información sea tabulada y etiquetada consistentemente."
  },
  {
    id: 'u4q22',
    unit: 4,
    questionText: "El comando `AL` (Alinear) en Revit es especialmente útil para:",
    options: [
      "Cambiar la escala de los objetos.",
      "Posicionar elementos de forma precisa respecto a otros.",
      "Crear matrices de objetos.",
      "Medir distancias y ángulos."
    ],
    correctAnswerIndex: 1,
    explanation: "La herramienta Alinear (`AL`) permite alinear caras o ejes de uno o más elementos con una referencia seleccionada, siendo muy potente para el posicionamiento exacto de componentes."
  },
  {
    id: 'u4q23',
    unit: 4,
    questionText: "Si eliminas un muro que actúa como anfitrión de una puerta en Revit, ¿qué sucede con la puerta?",
    options: [
      "La puerta permanece flotando en el espacio.",
      "La puerta se convierte en una familia de sistema.",
      "La puerta también se elimina.",
      "La puerta se asocia automáticamente al muro más cercano."
    ],
    correctAnswerIndex: 2,
    explanation: "Debido a la relación huésped-anfitrión, si se elimina el elemento anfitrión (el muro), el elemento huésped (la puerta) también se eliminará del modelo."
  },
  {
    id: 'u4q24',
    unit: 4,
    questionText: "El 'Nivel de Detalle' (Bajo, Medio, Alto) en una vista de Revit afecta a:",
    options: [
      "La precisión de los cálculos estructurales.",
      "La cantidad de información geométrica que muestran los elementos.",
      "El número de vistas que se pueden crear.",
      "El tamaño del archivo del proyecto."
    ],
    correctAnswerIndex: 1,
    explanation: "El Nivel de Detalle controla la complejidad gráfica con la que se representan los elementos en una vista. Por ejemplo, un muro puede mostrar solo sus contornos en nivel bajo, pero sus capas internas en nivel alto."
  },
  {
    id: 'u4q25',
    unit: 4,
    questionText: "¿Cuál de estas NO es una ficha principal de la Cinta de Opciones en Revit?",
    options: [
      "Arquitectura",
      "Estructura",
      "Renderizado",
      "Anotar"
    ],
    correctAnswerIndex: 2,
    explanation: "Si bien Revit tiene capacidades de renderizado (generalmente en la ficha Vista o a través de plugins), 'Renderizado' no es una ficha principal estándar como Arquitectura, Estructura o Anotar."
  },
  {
    id: 'u4q26',
    unit: 4,
    questionText: "Las 'Fichas Contextuales' en la Cinta de Opciones de Revit aparecen cuando:",
    options: [
      "Se inicia un nuevo proyecto.",
      "Se selecciona un elemento específico o se activa un comando de edición.",
      "Se guarda el archivo.",
      "Se cambia la unidad de medida."
    ],
    correctAnswerIndex: 1,
    explanation: "Las Fichas Contextuales (de color verde) aparecen temporalmente en la Cinta de Opciones cuando se selecciona un objeto o se inicia un comando, ofreciendo herramientas específicas para esa selección o tarea."
  },
  {
    id: 'u4q27',
    unit: 4,
    questionText: "El 'ViewCube' en Revit es una herramienta de navegación que permite:",
    options: [
      "Crear cajas de sección.",
      "Cambiar rápidamente entre vistas 3D estándar (Superior, Frontal, Isométrica) y orbitar.",
      "Ajustar el nivel de detalle de la vista.",
      "Filtrar los elementos visibles."
    ],
    correctAnswerIndex: 1,
    explanation: "El ViewCube es un cubo interactivo que facilita la orientación de la vista 3D, permitiendo hacer clic en sus caras, aristas o esquinas para obtener vistas predefinidas o para orbitar el modelo."
  },
  {
    id: 'u4q28',
    unit: 4,
    questionText: "En Revit, los elementos como cotas, textos y etiquetas son considerados:",
    options: [
      "Objetos de modelo 3D.",
      "Objetos específicos de vista (anotaciones).",
      "Familias de sistema únicamente.",
      "Parámetros de proyecto."
    ],
    correctAnswerIndex: 1,
    explanation: "Las cotas, textos, etiquetas y otros símbolos de anotación son objetos específicos de vista, lo que significa que solo son visibles en la vista en la que se colocan y su tamaño se adapta al papel."
  },
  {
    id: 'u4q29',
    unit: 4,
    questionText: "El comando `KS` (Keyboard Shortcuts) en Revit permite:",
    options: [
      "Crear una nueva familia de sistema.",
      "Revisar y personalizar los atajos de teclado para los comandos.",
      "Controlar los estilos de objeto.",
      "Iniciar una sesión de trabajo compartido."
    ],
    correctAnswerIndex: 1,
    explanation: "El atajo `KS` abre el cuadro de diálogo de Teclas de Acceso Rápido, donde los usuarios pueden ver, modificar y asignar atajos de teclado a los comandos de Revit."
  },
  {
    id: 'u4q30',
    unit: 4,
    questionText: "Una 'Llamada' (Callout) en Revit se utiliza para:",
    options: [
      "Insertar un comentario de texto en el modelo.",
      "Crear una vista ampliada de una porción de otra vista.",
      "Vincular un archivo CAD externo.",
      "Definir un nuevo nivel en el proyecto."
    ],
    correctAnswerIndex: 1,
    explanation: "Una Llamada crea una nueva vista que muestra una parte de la vista original a una escala mayor, permitiendo detallar o anotar esa zona específica con más claridad."
  },
  {
    id: 'u4q31',
    unit: 4,
    questionText: "La Directiva Europea 2014/24/EU sobre contratación pública:",
    options: [
      "Prohíbe el uso de BIM en proyectos públicos.",
      "Promueve el fomento o imposición de sistemas digitales como BIM en licitaciones públicas.",
      "Establece los formatos de archivo obligatorios para CAD.",
      "Regula únicamente el software Revit."
    ],
    correctAnswerIndex: 1,
    explanation: "La Directiva Europea 2014/24/EU anima a los Estados miembros de la UE a promover el uso de herramientas electrónicas como BIM en los procesos de licitación y diseño de obras públicas."
  },
  {
    id: 'u4q32',
    unit: 4,
    questionText: "¿Cuál es la función principal del 'Navegador de Proyectos' en Revit?",
    options: [
      "Modificar las propiedades de los elementos seleccionados.",
      "Dibujar los elementos constructivos del modelo.",
      "Organizar y permitir el acceso a todas las vistas, planos, familias y otros componentes del proyecto.",
      "Configurar las unidades y la información general del proyecto."
    ],
    correctAnswerIndex: 2,
    explanation: "El Navegador de Proyectos es la paleta principal para gestionar la estructura del proyecto, mostrando un árbol con todas las vistas, planos, tablas, leyendas, familias, grupos y vínculos."
  },
  {
    id: 'u4q33',
    unit: 4,
    questionText: "Si necesitas que un parámetro específico (ej. 'Resistencia al Fuego') aparezca en las tablas de planificación de muros y puertas, deberías usar un:",
    options: [
      "Parámetro de Tipo simple.",
      "Parámetro de Ejemplar simple.",
      "Parámetro Compartido.",
      "Parámetro Global."
    ],
    correctAnswerIndex: 2,
    explanation: "Los Parámetros Compartidos son ideales para este propósito, ya que se definen externamente y se pueden cargar en diferentes categorías de familias (como muros y puertas), permitiendo que se tabulen y etiqueten juntos."
  },
  {
    id: 'u4q34',
    unit: 4,
    questionText: "El comando `SL` (Dividir Elemento) en Revit permite:",
    options: [
      "Crear una copia simétrica de un elemento.",
      "Cortar un elemento lineal (como un muro o viga) en un punto específico.",
      "Unir dos elementos separados.",
      "Escalar un elemento proporcionalmente."
    ],
    correctAnswerIndex: 1,
    explanation: "La herramienta Dividir Elemento (`SL`) se utiliza para cortar un elemento, como un muro o una línea, en un punto seleccionado, creando dos segmentos independientes."
  },
  {
    id: 'u4q35',
    unit: 4,
    questionText: "Las 'Familias In Situ' en Revit se crean para:",
    options: [
      "Componentes estándar que se usan en muchos proyectos.",
      "Elementos únicos y específicos de un proyecto particular, que no se reutilizarán.",
      "Definir los niveles y rejillas del proyecto.",
      "Importar geometría desde otros formatos de archivo."
    ],
    correctAnswerIndex: 1,
    explanation: "Las Familias In Situ se modelan directamente dentro del contexto del proyecto y se usan para elementos personalizados que son únicos para ese diseño específico, como un mueble a medida o una forma arquitectónica particular."
  },
  {
    id: 'u4q36',
    unit: 4,
    questionText: "Al usar la herramienta 'Reflejar' (`MM` o `DM`) en Revit, ¿qué se necesita definir además del objeto a reflejar?",
    options: [
      "Un punto base.",
      "Un eje de simetría.",
      "Un factor de escala.",
      "Una trayectoria."
    ],
    correctAnswerIndex: 1,
    explanation: "La herramienta Reflejar requiere que se defina un eje de simetría (ya sea dibujándolo con dos puntos o seleccionando una línea o cara existente) alrededor del cual se creará la copia invertida del objeto."
  },
  {
    id: 'u4q37',
    unit: 4,
    questionText: "La 'Barra de Controles de Vista' en Revit, ubicada en la parte inferior de cada vista, permite ajustar rápidamente:",
    options: [
      "La información del proyecto y el nombre del cliente.",
      "La escala de la vista, el nivel de detalle y el estilo visual.",
      "Los parámetros de tipo del elemento seleccionado.",
      "El Navegador de Proyectos y la paleta de Propiedades."
    ],
    correctAnswerIndex: 1,
    explanation: "La Barra de Controles de Vista proporciona acceso rápido a configuraciones como la escala de la vista, el nivel de detalle (bajo, medio, alto), el estilo visual (línea oculta, sombreado, etc.), y otras opciones de visualización."
  },
  {
    id: 'u4q38',
    unit: 4,
    questionText: "¿Qué indica un vínculo de referencia de nivel de color azul en un alzado de Revit?",
    options: [
      "Que el nivel está bloqueado y no se puede editar.",
      "Que el nivel no tiene asociada una vista de planta.",
      "Que el nivel tiene asociada una vista de planta y se puede navegar a ella.",
      "Que el nivel es solo una cota de referencia."
    ],
    correctAnswerIndex: 2,
    explanation: "Los símbolos de nivel (y otros símbolos de referencia como secciones y alzados) de color azul indican que tienen una vista asociada. Hacer doble clic sobre ellos abre dicha vista."
  },
  {
    id: 'u4q39',
    unit: 4,
    questionText: "El objetivo de una 'Tabla de Planificación/Cantidades' en Revit es:",
    options: [
      "Crear un render fotorrealista del modelo.",
      "Dibujar detalles constructivos en 2D.",
      "Extraer información y cantidades de los elementos del modelo en formato de tabla.",
      "Gestionar las fases de construcción del proyecto."
    ],
    correctAnswerIndex: 2,
    explanation: "Las Tablas de Planificación (Schedules) son vistas que extraen datos de los parámetros de los elementos del modelo (ej. listado de puertas con sus dimensiones, áreas de habitaciones) y los presentan en formato de tabla."
  },
  {
    id: 'u4q40',
    unit: 4,
    questionText: "Para asegurar que los cambios en un elemento BIM se reflejen automáticamente en todas las vistas y documentos, es fundamental que el software BIM utilice:",
    options: [
      "Un sistema de capas avanzado.",
      "Una base de datos relacional centralizada para el modelo.",
      "Múltiples archivos independientes para cada vista.",
      "Un motor de renderizado en tiempo real."
    ],
    correctAnswerIndex: 1,
    explanation: "La capacidad de BIM para coordinar cambios instantáneamente en todo el proyecto se basa en que el modelo es una base de datos relacional. Todas las vistas y documentos son representaciones de esta base de datos única."
  },
  // Nuevas 20 preguntas para la Unidad 4
  {
    id: 'u4q41',
    unit: 4,
    questionText: "El 'Modelado Paramétrico' en BIM significa que los elementos:",
    options: [
      "Son estáticos y difíciles de modificar.",
      "Se definen por parámetros y relaciones que permiten cambios coordinados.",
      "Solo pueden ser formas geométricas básicas.",
      "No contienen información adicional más allá de su geometría."
    ],
    correctAnswerIndex: 1,
    explanation: "El modelado paramétrico es clave en BIM. Los elementos se definen con parámetros (dimensiones, materiales) y reglas que, al modificarse, actualizan el modelo de forma inteligente y coordinada."
  },
  {
    id: 'u4q42',
    unit: 4,
    questionText: "Una plantilla de proyecto Revit (.RTE) NO suele incluir por defecto:",
    options: [
      "Familias cargadas (puertas, ventanas).",
      "Configuración de unidades y estilos de línea.",
      "El modelo 3D completo de un proyecto anterior.",
      "Vistas de plano y alzado predefinidas."
    ],
    correctAnswerIndex: 2,
    explanation: "Una plantilla .RTE contiene configuraciones, familias y vistas base, pero no el modelo 3D completo de un proyecto específico terminado, ya que su propósito es ser un punto de partida."
  },
  {
    id: 'u4q43',
    unit: 4,
    questionText: "El comando `UN` en Revit abre el cuadro de diálogo para configurar:",
    options: [
      "La interfaz de usuario.",
      "Las unidades del proyecto.",
      "Las opciones de deshacer (Undo).",
      "La información del norte real."
    ],
    correctAnswerIndex: 1,
    explanation: "El atajo de teclado `UN` en Revit accede directamente al cuadro de diálogo 'Unidades de proyecto', donde se configuran las unidades de medida para diferentes disciplinas."
  },
  {
    id: 'u4q44',
    unit: 4,
    questionText: "En Revit, si se cierra accidentalmente la Ventana de Propiedades o el Navegador de Proyectos, ¿cómo se pueden reabrir?",
    options: [
      "Reiniciando el programa Revit.",
      "Desde la ficha 'Vista' > grupo 'Ventanas' > 'Interfaz de usuario'.",
      "Pulsando Ctrl+P y Ctrl+N respectivamente.",
      "Modificando un archivo de configuración."
    ],
    correctAnswerIndex: 1,
    explanation: "Si se cierran, la Ventana de Propiedades y el Navegador de Proyectos se pueden volver a activar desde la ficha 'Vista', en el grupo 'Ventanas', submenú 'Interfaz de usuario'."
  },
  {
    id: 'u4q45',
    unit: 4,
    questionText: "La 'Barra de Estado' en la interfaz de Revit generalmente muestra:",
    options: [
      "Una lista de todas las familias cargadas.",
      "Ayuda contextual e indicaciones sobre el comando activo o la selección.",
      "Las propiedades del elemento seleccionado.",
      "Herramientas para crear nuevos niveles."
    ],
    correctAnswerIndex: 1,
    explanation: "La Barra de Estado, en la parte inferior de la interfaz, proporciona información útil sobre el comando actual, lo que Revit espera que hagas a continuación, o información sobre los elementos resaltados."
  },
  {
    id: 'u4q46',
    unit: 4,
    questionText: "El comando `RO` (Rotar) en Revit, al aplicarse a un elemento en una vista 2D, lo gira en torno a:",
    options: [
      "Un eje horizontal.",
      "Un eje vertical definido por el usuario.",
      "Un eje perpendicular al plano de la vista.",
      "El centro geométrico del proyecto."
    ],
    correctAnswerIndex: 2,
    explanation: "En vistas 2D (como plantas o alzados), la herramienta Rotar gira los elementos alrededor de un eje que es perpendicular al plano de esa vista."
  },
  {
    id: 'u4q47',
    unit: 4,
    questionText: "La herramienta 'Matriz' (`AR`) en Revit permite crear copias de elementos en patrones:",
    options: [
      "Solo rectangulares.",
      "Solo circulares.",
      "Lineales y Radiales (circulares).",
      "Únicamente a lo largo de una trayectoria."
    ],
    correctAnswerIndex: 2,
    explanation: "La herramienta Matriz en Revit permite crear múltiples ejemplares de elementos organizados en patrones lineales (filas y columnas) o radiales (alrededor de un centro)."
  },
  {
    id: 'u4q48',
    unit: 4,
    questionText: "Bloquear un elemento (`PN`) en Revit sirve para:",
    options: [
      "Ocultarlo en todas las vistas.",
      "Impedir su modificación o movimiento accidental.",
      "Convertirlo en una familia de sistema.",
      "Asignarle un parámetro de solo lectura."
    ],
    correctAnswerIndex: 1,
    explanation: "Bloquear (Pin) un elemento en Revit fija su posición, evitando que sea movido o eliminado accidentalmente. Es útil para elementos de referencia como rejillas o vínculos."
  },
  {
    id: 'u4q49',
    unit: 4,
    questionText: "Los 'Parámetros de Proyecto' en Revit son creados por el usuario y se pueden asignar a:",
    options: [
      "Solo a un único elemento en todo el proyecto.",
      "Múltiples categorías de elementos (ej. muros, puertas, ventanas).",
      "Únicamente a las plantillas de vista.",
      "Solo a las familias cargables."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Parámetros de Proyecto son parámetros personalizados que el usuario crea dentro de un proyecto y puede asignar a una o varias categorías de elementos para añadir información específica."
  },
  {
    id: 'u4q50',
    unit: 4,
    questionText: "Un archivo .RFA en el contexto de Revit corresponde a:",
    options: [
      "Un archivo de proyecto principal.",
      "Un archivo de plantilla de proyecto.",
      "Un archivo de familia cargable.",
      "Un archivo de parámetros compartidos."
    ],
    correctAnswerIndex: 2,
    explanation: "Los archivos con extensión .RFA son archivos de Familias Cargables de Revit, que contienen los datos y la geometría de componentes como puertas, ventanas, mobiliario, etc."
  },
  {
    id: 'u4q51',
    unit: 4,
    questionText: "El 'filtrado de selección' en Revit es útil cuando:",
    options: [
      "Se quiere cambiar el color de fondo de la vista.",
      "Hay muchos objetos superpuestos y se necesita seleccionar solo algunos específicos.",
      "Se desea aplicar una plantilla de vista.",
      "Se va a crear un nuevo tipo de familia."
    ],
    correctAnswerIndex: 1,
    explanation: "La herramienta Filtro permite refinar una selección múltiple, desmarcando categorías o tipos de elementos no deseados cuando hay muchos objetos juntos o superpuestos."
  },
  {
    id: 'u4q52',
    unit: 4,
    questionText: "Las 'Vistas de Diseño' en Revit son útiles para:",
    options: [
      "Crear perspectivas 3D fotorrealistas.",
      "Generar tablas de planificación de materiales.",
      "Dibujar detalles 2D estándar o insertar información que no forma parte del modelo 3D.",
      "Definir los niveles principales del edificio."
    ],
    correctAnswerIndex: 2,
    explanation: "Las Vistas de Diseño son vistas 2D que no están directamente vinculadas al modelo 3D. Se usan para crear detalles 2D típicos, leyendas o para importar dibujos de CAD."
  },
  {
    id: 'u4q53',
    unit: 4,
    questionText: "Si un símbolo de sección o alzado en Revit aparece de color negro en lugar de azul, generalmente significa que:",
    options: [
      "La vista asociada está bloqueada.",
      "Aún no se ha creado la vista correspondiente a ese símbolo.",
      "La vista asociada contiene errores.",
      "El símbolo pertenece a una fase anterior del proyecto."
    ],
    correctAnswerIndex: 1,
    explanation: "Los símbolos de referencia (secciones, alzados, llamadas) aparecen en negro si todavía no se ha generado la vista a la que hacen referencia. Una vez creada la vista, el símbolo se vuelve azul e hipervinculado."
  },
  {
    id: 'u4q54',
    unit: 4,
    questionText: "La herramienta 'Cámara' en Revit se utiliza para crear:",
    options: [
      "Vistas de planta acotadas.",
      "Secciones transversales del modelo.",
      "Vistas en perspectiva 3D.",
      "Alzados ortogonales."
    ],
    correctAnswerIndex: 2,
    explanation: "La herramienta Cámara permite al usuario definir un punto de vista y una dirección de mirada para generar una vista en perspectiva 3D del modelo."
  },
  {
    id: 'u4q55',
    unit: 4,
    questionText: "Modificar la propiedad 'Escala de vista' en la paleta de Propiedades de una vista de planta en Revit afectará a:",
    options: [
      "El tamaño real de los objetos del modelo 3D.",
      "El tamaño con el que se representarán las anotaciones (texto, cotas) y la densidad de los patrones de línea en esa vista.",
      "Únicamente el tamaño de la ventana de la vista en pantalla.",
      "El número de niveles visibles en el proyecto."
    ],
    correctAnswerIndex: 1,
    explanation: "La escala de una vista en Revit afecta principalmente a cómo se visualizan y se imprimen los elementos de anotación (texto, cotas, etiquetas) y la apariencia de los patrones de línea, para que sean legibles en el plano final."
  },
  {
    id: 'u4q56',
    unit: 4,
    questionText: "Al utilizar el comando 'Reflejar - Seleccionar Eje' (`MM`) en Revit, el eje de simetría es:",
    options: [
      "Automáticamente el eje X global.",
      "Un eje que se dibuja especificando dos puntos.",
      "Un elemento lineal o un plano de referencia existente que se selecciona.",
      "Siempre el centro geométrico del objeto a reflejar."
    ],
    correctAnswerIndex: 2,
    explanation: "Con 'Reflejar - Seleccionar Eje' (`MM`), el usuario selecciona una línea, un borde o un plano de referencia existente en el modelo para que actúe como eje de simetría."
  },
  {
    id: 'u4q57',
    unit: 4,
    questionText: "La principal ventaja de la metodología BIM sobre CAD en términos de coordinación es:",
    options: [
      "La mayor cantidad de colores disponibles para las capas.",
      "Que los cambios realizados en una vista se actualizan automáticamente en todas las demás.",
      "La facilidad para dibujar líneas y arcos.",
      "La compatibilidad con más formatos de archivo."
    ],
    correctAnswerIndex: 1,
    explanation: "Una ventaja fundamental de BIM es la coordinación automática: al trabajar sobre un modelo centralizado, cualquier modificación en un elemento se refleja instantáneamente en todas las vistas y documentos relacionados."
  },
  {
    id: 'u4q58',
    unit: 4,
    questionText: "Los 'Niveles' en Revit son elementos de referencia fundamentales para:",
    options: [
      "Definir los tipos de materiales del proyecto.",
      "Establecer alturas y crear vistas de planta asociadas a diferentes plantas del edificio.",
      "Controlar la visibilidad de las familias cargables.",
      "Gestionar los parámetros compartidos."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Niveles son planos horizontales de referencia cruciales en Revit que definen las alturas de las diferentes plantas de un edificio y sirven como base para crear vistas de planta y techo."
  },
  {
    id: 'u4q59',
    unit: 4,
    questionText: "Si se desea crear un componente de mobiliario muy específico que solo se usará en un proyecto, la opción más adecuada sería crear una:",
    options: [
      "Familia de Sistema.",
      "Familia Cargable nueva y guardarla en la librería.",
      "Familia In Situ.",
      "Plantilla de Vista."
    ],
    correctAnswerIndex: 2,
    explanation: "Para elementos únicos y personalizados que no se prevé reutilizar en otros proyectos, la creación de una Familia In Situ directamente en el proyecto es la opción más directa."
  },
  {
    id: 'u4q60',
    unit: 4,
    questionText: "La 'Ventana de Propiedades' en Revit muestra los parámetros de:",
    options: [
      "Todo el proyecto de forma global.",
      "La vista activa (si no hay nada seleccionado) o del elemento(s) actualmente seleccionado(s).",
      "Únicamente las familias de sistema.",
      "Solo los parámetros de tipo de las familias."
    ],
    correctAnswerIndex: 1,
    explanation: "La Ventana de Propiedades es contextual: si no hay nada seleccionado, muestra las propiedades de la vista activa. Si se selecciona un elemento, muestra los parámetros de ejemplar de ese elemento."
  }
];
