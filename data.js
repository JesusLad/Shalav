// ==========================================
// CONFIGURACIÓN INICIAL
// ==========================================
// ¡IMPORTANTE! Pon aquí tu número real con código de país (ej: 521...)
const MI_WHATSAPP = "5219711769145"; 


// ==========================================
// BASE DE DATOS DE TUS PRODUCTOS
// ==========================================
const productos = [

    // =========================================
    // SECCIÓN DE GORRAS (6 Modelos)
    // =========================================
    {
        id: 'gorra-1',
        categoria: 'gorra',
        nombre: "Gorra Premium Cadillac",
        agotado: true,
        descripcion: `
Gorra Premium Cadillac - Ajustable Snapback y Estilo Distinguido.

Eleva tu estilo con esta gorra exclusiva de Cadillac, diseñada para los entusiastas de la elegancia automotriz. Confeccionada en un sofisticado color negro intenso, esta gorra presenta el emblemático logo de Cadillac bordado con un acabado de altísima calidad en blanco y negro, destacando su distinción.

Ofrece un ajuste perfecto y personalizado gracias a su sistema Snapback (cierre de broche ajustable de plástico), garantizando comodidad para cualquier talla. Su construcción premium asegura durabilidad y un tacto superior, convirtiéndola en el accesorio ideal para complementar un look casual o para mostrar tu pasión por la marca Cadillac.
        `,
        tallas: ["Unitalla Ajustable"],
        fotos: ["img/gorra1_main.jpg", "img/gorra1_flat.jpg", "img/gorra1_zoom.jpg", "img/gorra1_back.jpg"]
    },
    {
        id: 'gorra-2',
        categoria: 'gorra',
        nombre: "Gorra Premium Los Angeles Dodgers",
        descripcion: `
Gorra Premium Los Angeles Dodgers: unisex y ajustable, snapback.

Lleva el orgullo de Los Ángeles con esta gorra unisex de calidad premium. Presentada en un profundo azul rey, cuenta con el icónico logo "Dodgers" bordado en relieve con un acabado impecable.

Diseñada para un ajuste perfecto y seguro, incorpora el sistema Snapback (cierre de broche ajustable) que permite adaptar la talla a cualquier medida. Su confección de excelente calidad garantiza durabilidad, comodidad y un estilo que nunca pasa de moda. ¡Es la pieza esencial para cualquier fan!
        `,
        tallas: ["Unitalla Ajustable"],
        fotos: ["img/gorra2_main.jpg", "img/gorra2_flat.jpg", "img/gorra2_zoom.jpg", "img/gorra2_back.jpg"]
    },
    {
        id: 'gorra-3',
        categoria: 'gorra',
        nombre: "Gorra Hello Kitty Premium",
        descripcion: `
Gorra Hello Kitty Premium - Negra y Rosa, Ajustable Snapback

Añade un toque de dulzura y estilo a tu look con esta gorra de alta gama con el emblemático logo de Hello Kitty bordado en un encantador color rosa sobre un fondo negro.

Fabricada con materiales de exquisita calidad para una durabilidad y comodidad superiores, esta gorra cuenta con el sistema de ajuste Snapback (cierre de broche de plástico) que permite personalizar la talla a la perfección. Es el accesorio ideal, divertido y con un toque moderno para cualquier fan.
        `,
        tallas: ["Unitalla Ajustable"],
        fotos: ["img/gorra3_main.jpg", "img/gorra3_flat.jpg", "img/gorra3_zoom.jpg", "img/gorra3_back.jpg"]
    },
    {
        id: 'gorra-4',
        categoria: 'gorra',
        nombre: "Gorra Premium Super Mario",
        descripcion: `
Gorra Premium Super Mario - Ajustable Snapback

¡Sal de la tubería y lleva el estilo de la estrella del Reino Champiñón! Esta gorra de calidad premium presenta el icónico logo circular de la "M" de Mario bordado en relieve sobre un vibrante color rojo.

Perfecta para fans de Nintendo, su fabricación premium garantiza una excelente durabilidad y comodidad. Cuenta con el práctico sistema de ajuste Snapback (cierre de broche de plástico) que permite una adaptación sencilla y segura a cualquier medida. Un accesorio esencial para revivir la nostalgia gamer.
        `,
        tallas: ["Unitalla Ajustable"],
        fotos: ["img/gorra4_main.jpg", "img/gorra4_flat.jpg", "img/gorra4_zoom.jpg", "img/gorra4_back.jpg"]
    },
    {
        id: 'gorra-5',
        categoria: 'gorra',
        nombre: "Gorra Naruto Akatsuki Premium",
        descripcion: `
Gorra Akatsuki Premium - Diseño Bicolor, Ajustable Snapback

Representa a la organización Akatsuki con esta gorra de alta calidad. Presenta un diseño bicolor llamativo (negro y rojo) y lleva el icónico logo de la Nube Roja bordado en relieve con un acabado premium y duradero.

Ideal para fans de Naruto, esta gorra no solo ofrece un estilo audaz, sino también un ajuste perfecto. Su sistema Snapback (cierre de broche ajustable) permite adaptar la talla con facilidad para garantizar una comodidad óptima en todo momento. Un accesorio de colección para cualquier ninja renegado.
        `,
        tallas: ["Unitalla Ajustable"],
        fotos: ["img/gorra5_main.jpg", "img/gorra5_flat.jpg", "img/gorra5_zoom.jpg", "img/gorra5_back.jpg"]
    },
    {
        id: 'gorra-6',
        categoria: 'gorra',
        nombre: "Gorra Premium Piratas One Piece",
        descripcion: `
Gorra Premium One Piece: Unisex, ajustable con snapback.

¡Zarpa en tu propia aventura con esta gorra de alta calidad inspirada en One Piece! Presenta el emblemático logo Jolly Roger de los Piratas de One Piece bordado en colores vivos sobre una base negra elegante.

Esta gorra, ideal para cualquier fanático del anime, está construida con materiales de calidad premium para garantizar durabilidad. Su sistema de ajuste Snapback (cierre de broche de plástico) permite una personalización rápida y sencilla de la talla, ofreciendo un calce cómodo y seguro. ¡Un accesorio indispensable para el Rey de los Piratas moderno!
        `,
        tallas: ["Unitalla Ajustable"],
        fotos: ["img/gorra6_main.jpg", "img/gorra6_flat.jpg", "img/gorra6_zoom.jpg", "img/gorra6_back.jpg"]
    },


    // =========================================
    // SECCIÓN DE PLAYERAS (18 Modelos)
    // =========================================
    {
        id: 'playera-1',
        categoria: 'playera',
        nombre: "Playera Nike Astronauta",
        descripcion: `
Esta es una playera de algodón premium. Ideal para salir de noche.

Camiseta unisex Nike “Space Dreamer” en un moderno color gris 100% algodón, que llevará tu estilo fuera de este mundo; combina un diseño divertido y un toque de arte urbano. Es la pieza perfecta para quienes sueñan en grande. Ideal para un uso cómodo y casual. ¡Atrévete a soñar en el espacio con el estilo de Nike!
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera1_main.jpg", "img/playera1_flat.jpg", "img/playera1_zoom.jpg", "img/playera1_sleeve.jpg"]
    },
    {
        id: 'playera-2',
        categoria: 'playera',
        nombre: "Playera Adidas Mariposas",
        descripcion: `
Captura la esencia de la naturaleza y el espíritu deportivo con nuestra impresionante camiseta 100% algodón en un elegante color negro. Esta prenda única de Adidas reinventa su icónico logo con un delicado contorno blanco, adornado con mariposas doradas que revolotean, simbolizando transformación y libertad. Su diseño distintivo añade un toque de encanto natural a cualquier conjunto.

¡Libertad y estilo con la esencia de Adidas!
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera2_main.jpg", "img/playera2_flat.jpg", "img/playera2_zoom.jpg", "img/playera2_sleeve.jpg"]
    },
    {
        id: 'playera-3',
        categoria: 'playera',
        nombre: "Playera Chicas Superpoderosas",
        descripcion: `
¡Trae la energía y la diversión de las Chicas Superpoderosas a tu guardarropa con nuestra increíble camiseta 100% algodón en color blanco! Esta camiseta presenta a Bombón, Burbuja y Bellota en un diseño vibrante y lleno de acción, listas para salvar el día y añadir un toque de nostalgia y estilo a tu look.

Perfecta para los fans de todas las edades, te permitirá mostrar tu amor por estas heroínas icónicas con un estilo fresco y divertido. ¡Es la prenda ideal para quienes quieren combinar comodidad y un toque de superpoder en su día a día!

¡Despierta tu poder con las Chicas Superpoderosas!
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera3_main.jpg", "img/playera3_flat.jpg", "img/playera3_zoom.jpg", "img/playera3_sleeve.jpg"]
    },
    {
        id: 'playera-4',
        categoria: 'playera',
        nombre: "Playera GAP Flores",
        descripcion: `
Descubre nuestra exclusiva camiseta 100% algodón en un impecable color blanco, diseñada para ofrecerte la máxima comodidad y un toque de estilo único. Inspirada en la icónica marca GAP, esta camiseta presenta un estampado floral delicado y moderno que revitaliza el clásico logo, convirtiéndola en una pieza imprescindible para cualquier amante de la moda.

¡Frescura y estilo floral en tu guardarropa!
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera4_main.jpg", "img/playera4_flat.jpg", "img/playera4_zoom.jpg", "img/playera4_sleeve.jpg"]
    },
    {
        id: 'playera-5',
        categoria: 'playera',
        nombre: "Playera Goku",
        descripcion: `
No necesitas buscar las 7 esferas del dragón para encontrar la playera perfecta, ¡ya está aquí! Lleva al guerrero más fuerte del universo con este diseño minimalista y potente con esta playera blanca impecable que grita “fan”, pero con un detalle premium en la manga. Ajuste cómodo y fresco, 100% algodón.
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera5_main.jpg", "img/playera5_flat.jpg", "img/playera5_zoom.jpg", "img/playera5_sleeve.jpg"]
    },
    {
        id: 'playera-6',
        categoria: 'playera',
        nombre: "Playera Guess Los Angeles",
        descripcion: `
Eleva tu estilo con nuestra exclusiva camiseta 100% algodón en un impecable color blanco, inspirada en la sofisticación y el glamour de Guess. Esta prenda esencial presenta un llamativo corazón con estampado animal print de leopardo, enmarcando el icónico logo de GUESS Los Angeles. Es la fusión perfecta entre la audacia de la moda y la comodidad diaria.

¡Marca tendencia con estilo y pasión animal print!
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera6_main.jpg", "img/playera6_flat.jpg", "img/playera6_zoom.jpg", "img/playera6_sleeve.jpg"]
    },
    {
        id: 'playera-7',
        categoria: 'playera',
        nombre: "Playera Hello Kitty",
        descripcion: `
Camiseta Hello Kitty - 100% Algodón Premium

Disfruta de la máxima suavidad y frescura con nuestra camiseta de alta calidad confeccionada en 100% algodón. El color blanco impecable destaca el diseño adorable de Hello Kitty y su tipografía, impresos en vibrantes tonos de rosa. Esta prenda es sinónimo de confort y durabilidad, ideal para uso diario o para coleccionistas. ¡Una pieza esencial y suave al tacto que amarás usar!
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera7_main.jpg", "img/playera7_flat.jpg", "img/playera7_zoom.jpg", "img/playera7_sleeve.jpg"]
    },
    {
        id: 'playera-8',
        categoria: 'playera',
        nombre: "Playera Air Jordan",
        descripcion: `
Camiseta Air Jordan, prenda esencial para cualquier aficionado a la cultura pop y del baloncesto. Esta camiseta Jordan combina estilo y comodidad.

Una prenda suave en color negro y transpirable, 100% algodón, ideal para uso diario o para ir a la cancha.
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera8_main.jpg", "img/playera8_flat.jpg", "img/playera8_zoom.jpg", "img/playera8_sleeve.jpg"]
    },
    {
        id: 'playera-9',
        categoria: 'playera',
        nombre: "Playera Jordan Michael Jordan",
        descripcion: `
Dicen que las leyendas nunca mueren, se reinician. Lleva la mentalidad ganadora con esta playera de color negro de Michael Jordan. El diseño es una locura: fusiona al MJ clásico de los Chicago Bulls con una estructura geométrica digital. Es la pieza perfecta para armar un outfit impecable y cómodo, 100% algodón.
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera9_main.jpg", "img/playera9_flat.jpg", "img/playera9_zoom.jpg", "img/playera9_sleeve.jpg"]
    },
    {
        id: 'playera-10',
        categoria: 'playera',
        nombre: "Playera Disney Mickey Mouse",
        descripcion: `
Lleva la magia contigo a todas partes con esta playera de Mickey Mouse. Con un diseño tipo collage que captura las expresiones más icónicas del ratón más icónico del mundo, combina comodidad y estilo con un estampado único de Mickey Mouse. Diseño original unisex de 3 paneles. Detalle exclusivo en la manga. Perfecta para cualquier temporada, hecha de 100% algodón.
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera10_main.jpg", "img/playera10_flat.jpg", "img/playera10_zoom.jpg", "img/playera10_sleeve.jpg"]
    },
    {
        id: 'playera-11',
        categoria: 'playera',
        nombre: "Playera GAP Snoopy",
        descripcion: `
Camiseta GAP Snoopy - 100% algodón de alta calidad.

Disfruta del confort clásico con esta camiseta blanca premium, una colaboración especial de GAP con Snoopy y Woodstock. Confeccionada en 100% algodón suave, garantiza una comodidad superior y transpirable, ideal para el uso diario. El tejido de alta calidad asegura un ajuste duradero y mantiene la viveza del estampado tras cada lavado. Perfecta para quienes buscan estilo y la máxima frescura.
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera11_main.jpg", "img/playera11_flat.jpg", "img/playera11_zoom.jpg", "img/playera11_sleeve.jpg"]
    },
    {
        id: 'playera-12',
        categoria: 'playera',
        nombre: "Playera Nike Snoopy",
        descripcion: `
Expectativa: Just do it. Realidad: Snoopy durmiendo. 

La playera definitiva para los que amamos el estilo sport, pero amamos más dormir. Gris, cómoda y con la vibra más chill de todas. El diseño fusiona lo mejor del estilo deportivo con la ternura de Snoopy. En un tono gris supercombinable y 100% algodón. ¿Conoces esa sensación de querer ser productivo, pero la cama te atrapa? Esta playera te entiende.
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera12_main.jpg", "img/playera12_flat.jpg", "img/playera12_zoom.jpg", "img/playera12_sleeve.jpg"]
    },
    {
        id: 'playera-13',
        categoria: 'playera',
        nombre: "Playera GAP Snoopy Love",
        descripcion: `
Camiseta GAP x Snoopy Love - 100% Algodón Premium 

Celebra el estilo y el confort con esta camiseta de alta calidad de la colaboración GAP x Snoopy. Confeccionada en suave 100% algodón, garantiza una sensación fresca y ligera. El color blanco puro resalta el diseño de Snoopy rodeado de corazones. Es una prenda duradera, cómoda y con un toque romántico, perfecta para un estilo único y casual.
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera13_main.jpg", "img/playera13_flat.jpg", "img/playera13_zoom.jpg", "img/playera13_sleeve.jpg"]
    },
    {
        id: 'playera-14',
        categoria: 'playera',
        nombre: "Playera Levi's Snoopy",
        descripcion: `
Si “descansar” fuera un deporte olímpico, Snoopy se llevaría el oro. 


Lleva esa vibra relajada a todas partes con esta playera gris. Es la fusión perfecta entre el estilo clásico y casual de Levi’s que grita “buen gusto”. La playera perfecta para el fin de semana (o para fingir que no es lunes) ha llegado. Base gris suave. Etiqueta roja en la manga para ese toque premium. 100% algodón.
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera14_main.jpg", "img/playera14_flat.jpg", "img/playera14_zoom.jpg", "img/playera14_sleeve.jpg"]
    },
    {
        id: 'playera-15',
        categoria: 'playera',
        nombre: "Playera Vans Snoopy",
        descripcion: `
Snoopy encontró el lugar perfecto para descansar… ¡Y se ve increíble! 

Esta playera gris trae lo mejor de dos mundos: el rojo intenso y rebelde del logo de VANS, suavizado por Snoopy y Emilio, echando la siesta más cómoda del mundo sobre las letras. Es la prenda unisex definitiva para esos días donde quieres verte cool sin perder el confort. Tela gris suave y fresca. Logo clásico en rojo vibrante. El toque tierno que le faltaba a tu outfit. 100% algodón. 
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera15_main.jpg", "img/playera15_flat.jpg", "img/playera15_zoom.jpg", "img/playera15_sleeve.jpg"]
    },
    {
        id: 'playera-16',
        categoria: 'playera',
        nombre: "Playera Disney Stitch",
        descripcion: `
¿Quién dijo que el experimento 626 solo causa problemas? Esta vez, Stitch llega en su versión más tierna para robarte el corazón. 

Esta playera unisex color blanco es el lienzo perfecto para resaltar esos tonos azules vibrantes y el toque rosa pastel que nos encanta. Con un diseño súper cute y un corte cómodo de 100% algodón, es el recordatorio diario de que Ohana significa familia, y la familia nunca te abandona. 
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera16_main.jpg", "img/playera16_flat.jpg", "img/playera16_zoom.jpg", "img/playera16_sleeve.jpg"]
    },
    {
        id: 'playera-17',
        categoria: 'playera',
        nombre: "Playera Nike Stitch",
        descripcion: `
Olvídate de “solo hacerlo”… ¡Mejor hazlo con estilo! 

El experimento 626 decidió invadir el logo deportivo más famoso del mundo y el resultado nos encanta. 

Esta playera en gris destaca por sus increíbles tonos azules: ¿Quién necesita un entrenador cuando tienes a Stitch? Nos obsesiona cómo resalta el diseño azul sobre el fondo gris suave. Es una playera unisex que se siente fresca y superdivertida. Tipografía estilo “College”. Stitch integrado en el logo. Base gris supercombinable. 100% algodón. 
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera17_main.jpg", "img/playera17_flat.jpg", "img/playera17_zoom.jpg", "img/playera17_sleeve.jpg"]
    },
    {
        id: 'playera-18',
        categoria: 'playera',
        nombre: "Playera Tommy Hilfiger",
        descripcion: `
Elegancia, historia y estilo en una sola prenda. El look limpio que tu armario necesita.

Con su tipografía serif superelegante y el icónico logo de la bandera en el centro y en la manga, eleva instantáneamente cualquier look. Te pones esto y automáticamente te ves más arreglado/a. Esta playera blanca unisex no es una playera cualquiera; tiene ese toque de distinción que buscas. 

Detalle en la manga con el logo que marca la diferencia. Corte limpio que queda bien a todos. Tipografía clásica. 100% algodón. 
        `,
        tallas: ["M", "G", "EG"],
        fotos: ["img/playera18_main.jpg", "img/playera18_flat.jpg", "img/playera18_zoom.jpg", "img/playera18_sleeve.jpg"]
    }
];