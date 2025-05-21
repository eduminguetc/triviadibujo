// unit6_questions.js
export const unit6Questions = [
  {
    id: 'u6q1',
    unit: 6,
    questionText: "En AutoCAD, el 'Espacio Presentación' (Layout) se utiliza principalmente para:",
    options: [
      "Modelar objetos 3D complejos.",
      "Definir las propiedades de las capas.",
      "Componer la hoja de impresión con cajetín y ventanas gráficas.",
      "Escribir scripts de comandos."
    ],
    correctAnswerIndex: 2,
    explanation: "El Espacio Presentación (o Espacio Papel) es un entorno 2D donde se configura la hoja final para impresión, incluyendo el cuadro de rotulación y las ventanas gráficas que muestran vistas del modelo."
  },
  {
    id: 'u6q2',
    unit: 6,
    questionText: "Al imprimir desde una Presentación en AutoCAD, ¿cuál es la escala de trazado que se suele utilizar para la presentación en sí?",
    options: [
      "1:100",
      "1:50",
      "1:1",
      "Ajustar hasta encajar (Scale to fit)"
    ],
    correctAnswerIndex: 2,
    explanation: "Normalmente, al trazar desde una Presentación, la escala de la propia presentación se establece en 1:1, ya que la escala del dibujo se controla dentro de las ventanas gráficas."
  },
  {
    id: 'u6q3',
    unit: 6,
    questionText: "Una 'Tabla de Estilos de Trazado' (.ctb) en AutoCAD define:",
    options: [
      "Los tipos de letra a utilizar en el plano.",
      "Cómo se imprimen los objetos según su color en pantalla.",
      "Las escalas predeterminadas para las ventanas gráficas.",
      "Los bloques dinámicos disponibles."
    ],
    correctAnswerIndex: 1,
    explanation: "Las Tablas de Estilos de Trazado dependientes del color (.ctb) especifican cómo se representarán los objetos al imprimir (color, grosor, tipo de línea) basándose en el color que tienen en el dibujo."
  },
  {
    id: 'u6q4',
    unit: 6,
    questionText: "El comando `EXTRUSION` (EXT) en AutoCAD 3D sirve para:",
    options: [
      "Girar un perfil 2D alrededor de un eje.",
      "Crear un sólido o superficie dando altura a un perfil 2D.",
      "Unir dos sólidos.",
      "Cortar un sólido con otro."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `EXTRUSION` permite crear un objeto 3D (sólido o superficie) a partir de un perfil 2D cerrado, al que se le asigna una altura o trayectoria de extrusión."
  },
  {
    id: 'u6q5',
    unit: 6,
    questionText: "¿Cuál de las siguientes es una operación Booleana en modelado 3D de sólidos?",
    options: [
      "Revolución",
      "Barrido",
      "Solevación",
      "Unión"
    ],
    correctAnswerIndex: 3,
    explanation: "Unión, Diferencia (Sustracción) e Intersección son las operaciones Booleanas fundamentales que permiten combinar o modificar sólidos existentes para crear formas más complejas."
  },
  {
    id: 'u6q6',
    unit: 6,
    questionText: "El comando `PRESIONARTIRAR` (PRESSPULL) en AutoCAD 3D es útil para:",
    options: [
      "Definir la presión de los neumáticos de un vehículo modelado.",
      "Extruir áreas cerradas 2D o caras de sólidos de forma interactiva.",
      "Comprimir archivos de dibujo para reducir su tamaño.",
      "Ajustar la configuración de la impresora."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `PRESIONARTIRAR` es una herramienta intuitiva que permite crear sólidos extruyendo áreas 2D cerradas o modificar sólidos existentes empujando o tirando de sus caras."
  },
  {
    id: 'u6q7',
    unit: 6,
    questionText: "Un modelo 3D que representa el objeto solo mediante líneas y curvas que definen sus aristas se llama:",
    options: [
      "Modelo de Sólidos",
      "Modelo de Superficies",
      "Modelo de Mallas",
      "Modelo de Estructura Alámbrica (Wireframe)"
    ],
    correctAnswerIndex: 3,
    explanation: "Un modelo de estructura alámbrica (wireframe) representa la geometría 3D utilizando únicamente líneas y curvas para las aristas, sin definir superficies."
  },
  {
    id: 'u6q8',
    unit: 6,
    questionText: "La tecnología de modelado 3D que representa el objeto como un volumen completo y macizo, permitiendo operaciones booleanas, es:",
    options: [
      "Modelado de Estructura Alámbrica",
      "Modelado de Sólidos",
      "Modelado de Superficies",
      "Modelado de Mallas"
    ],
    correctAnswerIndex: 1,
    explanation: "El modelado de sólidos trata los objetos como volúmenes macizos, lo que permite realizar operaciones booleanas y calcular propiedades físicas como el volumen."
  },
  {
    id: 'u6q9',
    unit: 6,
    questionText: "El 'Sistema de Coordenadas Usuario' (UCS o SCP) en AutoCAD permite al usuario:",
    options: [
      "Cambiar el idioma de la interfaz.",
      "Definir un sistema de coordenadas móvil y orientable para facilitar el dibujo 3D.",
      "Acceder a las coordenadas geográficas del proyecto.",
      "Limitar el número de usuarios que pueden editar un dibujo."
    ],
    correctAnswerIndex: 1,
    explanation: "El UCS (User Coordinate System) o SCP (Sistema de Coordenadas Personal) permite al usuario definir un origen y orientación de los ejes X, Y, Z de forma temporal para facilitar el trabajo en diferentes planos o caras de un modelo 3D."
  },
  {
    id: 'u6q10',
    unit: 6,
    questionText: "Para visualizar un modelo 3D desde diferentes puntos de vista simultáneamente en el Espacio Modelo de AutoCAD, se utiliza la función de:",
    options: [
      "Capas",
      "Ventanas Gráficas Múltiples (`VENTANAS` / `VPORTS`)",
      "Bloques Dinámicos",
      "Estilos de Trazado"
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `VENTANAS` (VPORTS) permite dividir el área de dibujo del Espacio Modelo en múltiples ventanas gráficas, cada una con una vista diferente del modelo."
  },
  {
    id: 'u6q11',
    unit: 6,
    questionText: "Los 'Gizmos' en el modelado 3D de AutoCAD son:",
    options: [
      "Tipos de sombreado especiales.",
      "Ayudas visuales interactivas para mover, rotar o escalar sub-objetos 3D.",
      "Comandos para crear geometrías primitivas.",
      "Filtros de selección de objetos."
    ],
    correctAnswerIndex: 1,
    explanation: "Los Gizmos son herramientas interactivas que aparecen al seleccionar objetos o sub-objetos (caras, aristas, vértices) en 3D y facilitan su manipulación (mover, rotar, escalar) a lo largo de los ejes."
  },
  {
    id: 'u6q12',
    unit: 6,
    questionText: "¿Cuál es el propósito principal de utilizar software de edición de imágenes (como Photoshop) en la presentación de proyectos de construcción?",
    options: [
      "Crear los modelos 3D desde cero.",
      "Realizar cálculos estructurales.",
      "Mejorar y complementar las imágenes generadas desde CAD/BIM (renders).",
      "Gestionar el presupuesto del proyecto."
    ],
    correctAnswerIndex: 2,
    explanation: "El software de edición de imágenes se usa para retocar renders, añadir elementos (personas, vegetación), crear fotomontajes y mejorar la calidad visual general de las imágenes para la presentación."
  },
  {
    id: 'u6q13',
    unit: 6,
    questionText: "El proceso de generar una imagen 2D fotorrealista a partir de un modelo 3D, simulando materiales e iluminación, se llama:",
    options: [
      "Croquizado",
      "Acotación",
      "Renderizado (Rendering)",
      "Extrusión"
    ],
    correctAnswerIndex: 2,
    explanation: "El renderizado es el proceso computacional que convierte un modelo 3D en una imagen 2D con apariencia fotorrealista, aplicando texturas, iluminación y sombras."
  },
  {
    id: 'u6q14',
    unit: 6,
    questionText: "La 'Fotocomposición' en la presentación de proyectos consiste en:",
    options: [
      "Tomar fotografías del proceso de construcción.",
      "Componer una presentación de diapositivas.",
      "Integrar un render del modelo 3D en una fotografía real del entorno.",
      "Analizar la composición química de los materiales."
    ],
    correctAnswerIndex: 2,
    explanation: "La fotocomposición o fotomontaje es la técnica de combinar una imagen renderizada del proyecto propuesto con una fotografía del sitio real para mostrar cómo se integrará en su entorno."
  },
  {
    id: 'u6q15',
    unit: 6,
    questionText: "Adobe Photoshop es un software utilizado principalmente para:",
    options: [
      "Modelado 3D paramétrico.",
      "Edición de vídeo y animación.",
      "Retoque fotográfico y composición de imágenes rasterizadas.",
      "Creación de planos técnicos 2D."
    ],
    correctAnswerIndex: 2,
    explanation: "Adobe Photoshop es el estándar de la industria para la edición y manipulación de imágenes basadas en píxeles (rasterizadas), incluyendo retoque fotográfico, composición y pintura digital."
  },
  {
    id: 'u6q16',
    unit: 6,
    questionText: "El comando `REVOLUCION` (REV) en AutoCAD 3D crea un sólido o superficie al:",
    options: [
      "Extruir un perfil a lo largo de una trayectoria.",
      "Girar un perfil 2D alrededor de un eje.",
      "Conectar varias secciones transversales.",
      "Aplicar un bisel a las aristas de un sólido."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `REVOLUCION` genera un objeto 3D rotando un perfil 2D (abierto o cerrado) alrededor de un eje especificado."
  },
  {
    id: 'u6q17',
    unit: 6,
    questionText: "El modelado de mallas (Mesh Modeling) es especialmente útil para:",
    options: [
      "Crear planos de planta precisos.",
      "Formas libres, escultura digital y suavizado de superficies.",
      "Calcular propiedades de masa exactas.",
      "Definir parámetros de impresión."
    ],
    correctAnswerIndex: 1,
    explanation: "El modelado de mallas ofrece flexibilidad para crear formas orgánicas y complejas, permitiendo esculpir, plegar y suavizar superficies, siendo muy usado en diseño de personajes y formas libres."
  },
  {
    id: 'u6q18',
    unit: 6,
    questionText: "Al configurar la iluminación en una escena 3D para renderizado, ¿qué elementos se suelen simular?",
    options: [
      "Solo la luz del sol.",
      "Solo luces artificiales interiores.",
      "Luz solar, luz del cielo (ambiente) y luces artificiales.",
      "Únicamente el brillo de los materiales."
    ],
    correctAnswerIndex: 2,
    explanation: "Una buena iluminación en renderizado simula diversas fuentes de luz, incluyendo la luz natural (sol y cielo) y las luces artificiales (lámparas, focos) para lograr realismo."
  },
  {
    id: 'u6q19',
    unit: 6,
    questionText: "El comando `SOLEVACION` (LOFT) en AutoCAD 3D sirve para:",
    options: [
      "Crear un sólido extruyendo un perfil.",
      "Crear un sólido o superficie conectando suavemente varios perfiles 2D.",
      "Aplicar un material a un objeto 3D.",
      "Dividir un sólido en varias partes."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `SOLEVACION` (Loft) crea una forma 3D generando una transición suave entre una serie de perfiles o secciones transversales 2D."
  },
  {
    id: 'u6q20',
    unit: 6,
    questionText: "¿Cuál es la principal diferencia entre un gráfico 3D y uno 2D en términos de su creación?",
    options: [
      "Los gráficos 2D siempre son en blanco y negro.",
      "Los gráficos 3D se originan por cálculos sobre entidades geométricas tridimensionales.",
      "Los gráficos 2D no se pueden imprimir.",
      "Los gráficos 3D no utilizan coordenadas."
    ],
    correctAnswerIndex: 1,
    explanation: "Los gráficos 3D se generan mediante procesos matemáticos sobre modelos tridimensionales definidos en el ordenador, mientras que los gráficos 2D se representan directamente en un plano."
  },
  {
    id: 'u6q21',
    unit: 6,
    questionText: "En AutoCAD, el 'WCS' se refiere al:",
    options: [
      "Sistema de Control de Ventanas (Window Control System).",
      "Sistema de Coordenadas Mundo (World Coordinate System).",
      "Estándar de Cableado de Sólidos (Wireframe Cabling Standard).",
      "Configuración de Sombreado Web (Web Shading Configuration)."
    ],
    correctAnswerIndex: 1,
    explanation: "WCS son las siglas de World Coordinate System (Sistema de Coordenadas Mundo), que es el sistema de referencia cartesiano fijo y absoluto en un dibujo de AutoCAD."
  },
  {
    id: 'u6q22',
    unit: 6,
    questionText: "El comando `ORBITA3D` (3DO) en AutoCAD permite:",
    options: [
      "Crear órbitas planetarias en un modelo del sistema solar.",
      "Visualizar dinámicamente un modelo 3D rotando la vista alrededor de él.",
      "Insertar objetos con forma orbital.",
      "Calcular la trayectoria orbital de un satélite."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `ORBITA3D` y sus variantes permiten al usuario rotar interactivamente el punto de vista alrededor del modelo 3D para observarlo desde diferentes ángulos."
  },
  {
    id: 'u6q23',
    unit: 6,
    questionText: "La conversión de un objeto de malla a un sólido 3D en AutoCAD puede ser útil para:",
    options: [
      "Reducir el número de polígonos de la malla.",
      "Aplicar operaciones booleanas o funciones de edición de sólidos.",
      "Mejorar su capacidad de escultura digital.",
      "Convertirlo en una imagen 2D."
    ],
    correctAnswerIndex: 1,
    explanation: "Convertir una malla a un sólido 3D permite utilizar herramientas de modelado de sólidos, como las operaciones booleanas (unión, diferencia, intersección), que no están disponibles directamente para mallas."
  },
  {
    id: 'u6q24',
    unit: 6,
    questionText: "Para crear una vista en perspectiva de un modelo 3D en AutoCAD, se puede utilizar el comando `VISTADIN` (DVIEW) con la opción:",
    options: [
      "Paralela",
      "Ortogonal",
      "Distancia (para perspectiva)",
      "Zoom Extensión"
    ],
    correctAnswerIndex: 2,
    explanation: "El comando `VISTADIN` (DVIEW) permite activar un modo de perspectiva ajustando la 'Distancia' al objetivo. El comando `CAMARA` crea un objeto cámara que define una vista en perspectiva."
  },
  {
    id: 'u6q25',
    unit: 6,
    questionText: "GIMP es una alternativa gratuita y de código abierto a:",
    options: [
      "AutoCAD",
      "Revit",
      "Adobe Photoshop",
      "Microsoft Word"
    ],
    correctAnswerIndex: 2,
    explanation: "GIMP (GNU Image Manipulation Program) es un potente software de edición de imágenes rasterizadas, considerado una alternativa gratuita y de código abierto a Adobe Photoshop."
  },
  {
    id: 'u6q26',
    unit: 6,
    questionText: "El modelado de superficies es especialmente adecuado para:",
    options: [
      "Crear muros y forjados simples.",
      "Definir el volumen exacto de un objeto para análisis de masa.",
      "Diseñar formas curvas complejas y orgánicas con precisión.",
      "Generar planos de planta 2D."
    ],
    correctAnswerIndex: 2,
    explanation: "El modelado de superficies ofrece un control detallado sobre las caras de un objeto, siendo ideal para crear formas fluidas, aerodinámicas y complejas como carrocerías de automóviles o diseños de productos."
  },
  {
    id: 'u6q27',
    unit: 6,
    questionText: "El 'Shading' (sombreado) en el proceso de renderizado se refiere a:",
    options: [
      "La creación de sombras proyectadas por los objetos.",
      "La determinación del color y brillo de un píxel en función de la luz y el material.",
      "La selección del tipo de cámara para la vista.",
      "La aplicación de un patrón de sombreado 2D."
    ],
    correctAnswerIndex: 1,
    explanation: "El shading es el proceso por el cual se calcula cómo la superficie de un objeto refleja o emite luz, determinando el color y la intensidad de cada píxel en la imagen renderizada."
  },
  {
    id: 'u6q28',
    unit: 6,
    questionText: "Al imprimir un plano CAD en PDF, ¿cuál es una ventaja importante de este formato?",
    options: [
      "Permite la edición completa del modelo 3D.",
      "Mantiene la apariencia y estructura del documento original sin necesidad de tener AutoCAD.",
      "Reduce significativamente la calidad de las líneas para ahorrar espacio.",
      "Convierte automáticamente todas las fuentes a Arial."
    ],
    correctAnswerIndex: 1,
    explanation: "El formato PDF (Portable Document Format) es ideal para compartir documentos finalizados porque preserva el diseño, las fuentes y los gráficos del archivo original, pudiendo ser visualizado en casi cualquier dispositivo."
  },
  {
    id: 'u6q29',
    unit: 6,
    questionText: "El comando `BARRIDO` (SWEEP) en AutoCAD 3D crea un objeto:",
    options: [
      "Girando un perfil alrededor de un eje.",
      "Extruyendo un perfil 2D a lo largo de una trayectoria.",
      "Uniendo múltiples perfiles en diferentes planos.",
      "Creando un muro 3D con altura y grosor definidos."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `BARRIDO` genera un sólido o superficie al 'barrer' un perfil 2D a lo largo de una curva o trayectoria 2D o 3D."
  },
  {
    id: 'u6q30',
    unit: 6,
    questionText: "El 'montaje de la presentación' de un proyecto implica:",
    options: [
      "Ensamblar físicamente una maqueta.",
      "Organizar las imágenes (renders, planos) y textos en un formato final para comunicar el proyecto.",
      "Configurar los parámetros de la impresora.",
      "Realizar la instalación eléctrica del edificio."
    ],
    correctAnswerIndex: 1,
    explanation: "El montaje de la presentación es la fase final donde se recopilan y organizan todos los elementos visuales y textuales (planos, renders, fotomontajes, descripciones) en un formato cohesivo para su exposición."
  },
  {
    id: 'u6q31',
    unit: 6,
    questionText: "El comando `POLISOLIDO` (POLYSOLID) en AutoCAD es útil para crear rápidamente:",
    options: [
      "Superficies curvas complejas.",
      "Objetos 3D similares a muros con altura y grosor.",
      "Mallas poligonales para escultura.",
      "Regiones 2D a partir de contornos."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `POLISOLIDO` permite dibujar objetos 3D con forma de muro, especificando su altura, grosor y justificación, de manera similar a dibujar una polilínea."
  },
  {
    id: 'u6q32',
    unit: 6,
    questionText: "La operación booleana `DIFERENCIA` (SU) se utiliza para:",
    options: [
      "Combinar dos sólidos en uno solo.",
      "Crear un sólido a partir del volumen común de dos sólidos.",
      "Restar el volumen de un conjunto de sólidos de otro.",
      "Suavizar las aristas de un sólido."
    ],
    correctAnswerIndex: 2,
    explanation: "La operación `DIFERENCIA` (Sustraer) elimina el volumen de un conjunto de sólidos (los que se sustraen) del volumen de otro conjunto de sólidos (de los que se sustrae), útil para crear huecos o rebajes."
  },
  {
    id: 'u6q33',
    unit: 6,
    questionText: "Adobe Illustrator es un software de edición de gráficos de tipo:",
    options: [
      "Raster (mapa de bits)",
      "Vectorial",
      "Paramétrico 3D",
      "De simulación física"
    ],
    correctAnswerIndex: 1,
    explanation: "Adobe Illustrator es una aplicación de edición de gráficos vectoriales, lo que significa que las imágenes se componen de objetos geométricos definidos matemáticamente, permitiendo escalarlos sin pérdida de calidad."
  },
  {
    id: 'u6q34',
    unit: 6,
    questionText: "El 'Espacio Papel' en AutoCAD es otro nombre para referirse al:",
    options: [
      "Espacio Modelo",
      "Espacio Presentación (Layout)",
      "Área de la paleta de herramientas",
      "Entorno de renderizado"
    ],
    correctAnswerIndex: 1,
    explanation: "El 'Espacio Papel' es el término más antiguo para lo que hoy se conoce como 'Espacio Presentación' o 'Layout' en AutoCAD, donde se prepara el plano para la impresión."
  },
  {
    id: 'u6q35',
    unit: 6,
    questionText: "Al crear una vista en perspectiva con el comando `CAMARA` en AutoCAD, ¿qué se define?",
    options: [
      "Solo el punto de mira.",
      "La posición del observador (cámara) y el punto hacia donde mira (objetivo).",
      "Únicamente la distancia focal de la lente.",
      "El tipo de papel para imprimir la vista."
    ],
    correctAnswerIndex: 1,
    explanation: "Al usar el comando `CAMARA`, se especifican la ubicación de la cámara (punto de vista del observador) y el punto objetivo (hacia dónde está mirando la cámara) para definir la vista en perspectiva."
  },
  {
    id: 'u6q36',
    unit: 6,
    questionText: "¿Qué tipo de archivo se utiliza comúnmente para la impresión 3D?",
    options: [
      ".DWG",
      ".PDF",
      ".STL",
      ".DOCX"
    ],
    correctAnswerIndex: 2,
    explanation: "El formato de archivo .STL (Estereolitografía) es uno de los más comunes para describir la geometría de la superficie de un objeto 3D y es ampliamente utilizado por las impresoras 3D."
  },
  {
    id: 'u6q37',
    unit: 6,
    questionText: "El 'Modelado Paramétrico', como el que se usa en Revit, implica que los objetos:",
    options: [
      "Son estáticos y no se pueden modificar una vez creados.",
      "Se definen por parámetros y reglas que permiten modificaciones inteligentes.",
      "Solo pueden tener formas geométricas simples.",
      "Se basan exclusivamente en mallas poligonales."
    ],
    correctAnswerIndex: 1,
    explanation: "El modelado paramétrico significa que los objetos se crean con parámetros (dimensiones, propiedades) y relaciones que permiten que, al modificar un parámetro, el objeto se actualice inteligentemente manteniendo sus relaciones."
  },
  {
    id: 'u6q38',
    unit: 6,
    questionText: "La principal ventaja de usar 'Ventanas Gráficas Múltiples' en el Espacio Modelo es:",
    options: [
      "Reducir el tamaño del archivo.",
      "Imprimir diferentes escalas en una misma hoja.",
      "Visualizar y trabajar en el modelo 3D desde diferentes ángulos simultáneamente.",
      "Crear animaciones del modelo."
    ],
    correctAnswerIndex: 2,
    explanation: "Las ventanas gráficas múltiples en el Espacio Modelo permiten ver el objeto desde distintos puntos de vista (planta, alzado, isométrico, etc.) al mismo tiempo, facilitando el diseño y la comprensión del modelo 3D."
  },
  {
    id: 'u6q39',
    unit: 6,
    questionText: "La operación booleana `INTERSECCION` (IN) crea un nuevo sólido a partir de:",
    options: [
      "La suma de los volúmenes de los sólidos originales.",
      "El volumen de un sólido menos el otro.",
      "El volumen común o solapado entre los sólidos originales.",
      "Una copia exacta de uno de los sólidos."
    ],
    correctAnswerIndex: 2,
    explanation: "La operación `INTERSECCION` genera un nuevo sólido que consiste únicamente en el volumen que es común (donde se solapan) a todos los sólidos seleccionados."
  },
  {
    id: 'u6q40',
    unit: 6,
    questionText: "¿Cuál es el propósito de la 'Vista Preliminar' antes de trazar un dibujo en AutoCAD?",
    options: [
      "Guardar automáticamente el archivo.",
      "Convertir el dibujo a un formato 3D.",
      "Comprobar cómo se verá el dibujo impreso o exportado.",
      "Seleccionar los objetos que se van a imprimir."
    ],
    correctAnswerIndex: 2,
    explanation: "La Vista Preliminar muestra una previsualización de cómo quedará el dibujo en el papel o archivo de salida según la configuración de trazado actual, permitiendo detectar errores antes de la impresión final."
  },
  // Nuevas 20 preguntas para la Unidad 6
  {
    id: 'u6q41',
    unit: 6,
    questionText: "Al imprimir un plano desde AutoCAD, la opción 'Configuraciones de página' permite:",
    options: [
      "Cambiar el tipo de licencia de AutoCAD.",
      "Guardar y reutilizar conjuntos de parámetros de impresión.",
      "Ajustar la velocidad del procesador.",
      "Seleccionar el color de la interfaz de AutoCAD."
    ],
    correctAnswerIndex: 1,
    explanation: "Las configuraciones de página permiten guardar colecciones de parámetros de trazado (impresora, tamaño de papel, estilo de trazado, etc.) para reutilizarlos fácilmente."
  },
  {
    id: 'u6q42',
    unit: 6,
    questionText: "El modelado de sólidos en AutoCAD se basa en la tecnología CSG, que significa:",
    options: [
      "Curvas Suaves Geométricas.",
      "Control de Superficies Generales.",
      "Geometría de Construcción de Sólidos.",
      "Sistema de Coordenadas Globales."
    ],
    correctAnswerIndex: 2,
    explanation: "CSG (Constructive Solid Geometry) es una técnica de modelado de sólidos donde formas complejas se crean combinando primitivas geométricas simples mediante operaciones booleanas."
  },
  {
    id: 'u6q43',
    unit: 6,
    questionText: "Si se desea crear un objeto 3D con forma de tubería o pasamanos en AutoCAD, ¿qué comando sería adecuado?",
    options: [
      "SOLEVACION (LOFT)",
      "BARRIDO (SWEEP)",
      "EXTRUSION (EXT)",
      "REVOLUCION (REV)"
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `BARRIDO` (SWEEP) es ideal para crear formas como tuberías, ya que permite extruir un perfil (ej. un círculo) a lo largo de una trayectoria (ej. una línea o curva)."
  },
  {
    id: 'u6q44',
    unit: 6,
    questionText: "La principal diferencia entre un modelo de sólidos y uno de superficies es que el de sólidos:",
    options: [
      "No puede tener formas curvas.",
      "Define un volumen macizo con propiedades de masa.",
      "Es menos preciso para la fabricación.",
      "Solo se puede ver en estructura alámbrica."
    ],
    correctAnswerIndex: 1,
    explanation: "Un modelo de sólidos representa un volumen completo y cerrado, lo que permite calcular propiedades como masa y volumen, a diferencia de un modelo de superficies que solo define las caras exteriores."
  },
  {
    id: 'u6q45',
    unit: 6,
    questionText: "El comando `SOLPROF` en AutoCAD se utiliza para:",
    options: [
      "Crear perfiles de suelo para análisis geotécnico.",
      "Proyectar el perfil de sólidos 3D en un plano 2D, separando líneas visibles y ocultas.",
      "Editar las propiedades de los sólidos.",
      "Convertir un sólido en una superficie."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `SOLPROF` (Perfil de Sólido) crea una representación 2D del perfil de un objeto 3D en la vista actual, generando automáticamente capas para las líneas visibles y ocultas."
  },
  {
    id: 'u6q46',
    unit: 6,
    questionText: "Al utilizar software de edición de imágenes para mejorar un render, una tarea común es:",
    options: [
      "Modificar la geometría 3D del modelo.",
      "Añadir o mejorar elementos como cielos, vegetación o personas.",
      "Recalcular las sombras proyectadas.",
      "Cambiar las unidades de medida del proyecto."
    ],
    correctAnswerIndex: 1,
    explanation: "El software de edición de imágenes como Photoshop se usa frecuentemente para añadir elementos de entorno (cielos, vegetación, personas) a los renders, mejorando su realismo y contexto."
  },
  {
    id: 'u6q47',
    unit: 6,
    questionText: "La 'escultura digital' es una técnica de modelado 3D que se asocia más comúnmente con:",
    options: [
      "Modelado de sólidos CSG.",
      "Modelado de mallas (Mesh Modeling).",
      "Dibujo de planos 2D.",
      "Creación de diagramas de flujo."
    ],
    correctAnswerIndex: 1,
    explanation: "La escultura digital, que permite modelar formas orgánicas de manera similar a la arcilla, se realiza típicamente sobre modelos de mallas poligonales."
  },
  {
    id: 'u6q48',
    unit: 6,
    questionText: "Un 'array de primitivas' y un 'scene graph' son conceptos relacionados con:",
    options: [
      "La impresión de planos en AutoCAD.",
      "La estructura y composición de una escena 3D para renderizado.",
      "La gestión de capas en dibujos 2D.",
      "La configuración de estilos de cota."
    ],
    correctAnswerIndex: 1,
    explanation: "Estos términos se refieren a cómo se estructuran y organizan los objetos geométricos (primitivas) dentro de una escena 3D para su posterior procesamiento y renderizado."
  },
  {
    id: 'u6q49',
    unit: 6,
    questionText: "¿Cuál de los siguientes NO es un tipo de tecnología de modelado 3D mencionado en la unidad?",
    options: [
      "Modelado de sólidos.",
      "Escultura digital.",
      "Modelado paramétrico.",
      "Modelado de texturas procedurales."
    ],
    correctAnswerIndex: 3,
    explanation: "Si bien las texturas procedurales son parte del renderizado, 'modelado de texturas procedurales' no se menciona como una tipología principal de modelación geométrica 3D en la unidad, a diferencia de sólidos, escultura y paramétrico."
  },
  {
    id: 'u6q50',
    unit: 6,
    questionText: "El comando `CONVASOLIDO` en AutoCAD permite convertir:",
    options: [
      "Un sólido en una imagen 2D.",
      "Objetos como superficies o mallas gruesas en sólidos 3D.",
      "Un archivo PDF en un dibujo DWG.",
      "Un texto en un objeto de sombreado."
    ],
    correctAnswerIndex: 1,
    explanation: "El comando `CONVASOLIDO` (CONVTOSOLID) intenta convertir objetos elegibles como superficies cerradas o mallas gruesas en objetos sólidos 3D."
  },
  {
    id: 'u6q51',
    unit: 6,
    questionText: "Al obtener perspectivas de modelos 3D, ¿qué característica visual principal las diferencia de las vistas ortogonales?",
    options: [
      "Todas las líneas paralelas permanecen paralelas.",
      "Los objetos lejanos parecen más pequeños y las líneas paralelas fugan.",
      "No se pueden mostrar materiales ni texturas.",
      "Solo se pueden ver en blanco y negro."
    ],
    correctAnswerIndex: 1,
    explanation: "Las vistas en perspectiva simulan la visión humana, donde los objetos más distantes se ven más pequeños y las líneas paralelas que se alejan del observador parecen converger en puntos de fuga."
  },
  {
    id: 'u6q52',
    unit: 6,
    questionText: "El software Corel Draw es conocido principalmente por ser una aplicación de:",
    options: [
      "Retoque fotográfico.",
      "Dibujo vectorial.",
      "Modelado 3D de sólidos.",
      "Edición de audio."
    ],
    correctAnswerIndex: 1,
    explanation: "Corel Draw es un software de diseño gráfico ampliamente utilizado para la creación y edición de gráficos vectoriales."
  },
  {
    id: 'u6q53',
    unit: 6,
    questionText: "Una 'maqueta virtual' en 3D se refiere a:",
    options: [
      "Una simulación física de la resistencia de la maqueta.",
      "Un modelo 3D detallado del proyecto visualizado en el ordenador.",
      "Una fotografía de una maqueta física.",
      "Un conjunto de planos 2D impresos a escala."
    ],
    correctAnswerIndex: 1,
    explanation: "Una maqueta virtual es un modelo tridimensional completo y detallado del proyecto, creado y visualizado mediante software, que permite explorarlo interactivamente."
  },
  {
    id: 'u6q54',
    unit: 6,
    questionText: "La 'iluminación global' o 'GI' en renderizado 3D simula:",
    options: [
      "Únicamente la luz directa de las fuentes de luz.",
      "La forma en que la luz rebota e ilumina indirectamente las superficies en una escena.",
      "El efecto de las luces de neón.",
      "La iluminación de emergencia de un edificio."
    ],
    correctAnswerIndex: 1,
    explanation: "La Iluminación Global (Global Illumination - GI) es un conjunto de algoritmos que simulan cómo la luz interactúa de forma realista con las superficies, incluyendo los rebotes de luz indirecta, lo que produce sombras más suaves y una iluminación más natural."
  },
  {
    id: 'u6q55',
    unit: 6,
    questionText: "El objetivo de 'maquetar un proyecto' con software de autoría multimedia es:",
    options: [
      "Crear el modelo 3D del edificio.",
      "Integrar todos los recursos (imágenes, vídeos, interactividad) para la presentación final.",
      "Realizar el cálculo de costes de la presentación.",
      "Imprimir los planos en formato físico."
    ],
    correctAnswerIndex: 1,
    explanation: "En el contexto de presentaciones multimedia, 'maquetar' se refiere a ensamblar e integrar todos los recursos (textos, imágenes, vídeos, sonidos, interactividad) en una aplicación o documento final, siguiendo un guion."
  },
  {
    id: 'u6q56',
    unit: 6,
    questionText: "Si al imprimir un plano 2D desde AutoCAD, las líneas discontinuas aparecen continuas, ¿qué se debería revisar primero?",
    options: [
      "El color de las líneas.",
      "La escala del tipo de línea (`LTSCALE`).",
      "El tipo de papel seleccionado.",
      "La versión de AutoCAD."
    ],
    correctAnswerIndex: 1,
    explanation: "Si las líneas discontinuas no se ven correctamente, es muy probable que la variable `LTSCALE` (o la escala del tipo de línea del objeto) no esté ajustada adecuadamente para la escala de impresión."
  },
  {
    id: 'u6q57',
    unit: 6,
    questionText: "La operación booleana que crea un sólido a partir del volumen que dos o más sólidos tienen en común es:",
    options: [
      "Unión",
      "Diferencia",
      "Intersección",
      "Solevación"
    ],
    correctAnswerIndex: 2,
    explanation: "La operación de Intersección crea un nuevo sólido que representa el volumen donde los sólidos originales se superponen o intersecan."
  },
  {
    id: 'u6q58',
    unit: 6,
    questionText: "El modelado de superficies en CAD es preferible al de sólidos cuando se necesita:",
    options: [
      "Calcular el peso exacto del objeto.",
      "Un control muy preciso sobre formas curvas y fluidas.",
      "Crear rápidamente volúmenes prismáticos simples.",
      "Aplicar operaciones booleanas complejas."
    ],
    correctAnswerIndex: 1,
    explanation: "El modelado de superficies ofrece mayor flexibilidad y control para crear y manipular formas curvas complejas y orgánicas, como las que se encuentran en el diseño industrial o de automoción."
  },
  {
    id: 'u6q59',
    unit: 6,
    questionText: "Al preparar una presentación de proyecto, ¿por qué es útil la fotocomposición?",
    options: [
      "Para verificar la resistencia estructural del diseño.",
      "Para mostrar cómo se verá el proyecto integrado en su entorno real.",
      "Para generar automáticamente los planos de construcción.",
      "Para reducir el tiempo de renderizado del modelo 3D."
    ],
    correctAnswerIndex: 1,
    explanation: "La fotocomposición permite visualizar de manera realista cómo el edificio o la obra propuesta se integrará en su emplazamiento real, combinando el render con una fotografía del sitio."
  },
  {
    id: 'u6q60',
    unit: 6,
    questionText: "El comando `ESPESOR` (THICKEN) en AutoCAD se aplica a objetos de tipo:",
    options: [
      "Sólido, para hacerlos más delgados.",
      "Texto, para darles relieve.",
      "Superficie, para convertirlas en sólidos con un grosor determinado.",
      "Línea, para convertirlas en polilíneas."
    ],
    correctAnswerIndex: 2,
    explanation: "El comando `ESPESOR` (THICKEN) se utiliza para dar grosor a objetos de superficie, convirtiéndolos así en objetos sólidos 3D."
  }
];
