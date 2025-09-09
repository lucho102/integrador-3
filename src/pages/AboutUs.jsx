import Container from '../components/Container'
import Text from '../components/Text'

function AboutUs() {
    return (
        <Container as="main">
            <Text as="h2" className="subtitle-AU" >
                ¡Bienvenidos a TOY-JUGUETES, donde la magia nunca deja de jugar!
            </Text>
                <Text as="p" className="paragraph mb-3">
                Durante 30 años, hemos sido más que una juguetería: hemos sido el epicentro de la diversión, la creatividad y la innovación en el mundo del juego. Desde nuestros primeros pasos hasta hoy, nos hemos convertido en líderes en ventas, conquistando los corazones de niños y coleccionistas con los juguetes más increíbles del mercado.
                </Text>
                <Text as="h3" className="subtitle-AU mt-4 mb-2"> 
            🌟 ¿Qué nos hace especiales?
                </Text>
                <Text as="p" className="paragraph mb-3"> 
                    - Pasión por el juego: No vendemos juguetes, ¡creamos recuerdos! Nuestro compromiso es garantizar que cada producto despierte risas, imaginación y horas de aventura.
                </Text>
                <Text as="p" className="paragraph mb-3"> 
                   - Innovación sin límites: Trabajamos de la mano con los gigantes de la tecnología para incorporar mejoras increíbles en cada juguete, desde figuras interactivas hasta robots inteligentes que sorprenden en cada movimiento 
                </Text>
                <Text as="p" className="paragraph mb-3"> 
                    - Crecimiento constante: Cada año nos superamos, exploramos nuevas tendencias y ampliamos nuestro catálogo para que siempre encuentres la última novedad en entretenimiento.
                </Text>
                <Text as="h3"className="subtitle-AU mt-4 mb-2">
                🚀 El futuro del juego está aquí
                </Text>
                <Text as="p" className="paragraph mb-3">
                    Ya no es solo cuestión de bloques y muñecos, ahora los juguetes cobran vida, reaccionan, enseñan y acompañan a los más pequeños en su desarrollo. Si pensabas que los juegos eran solo diversión, espera a descubrir cómo los nuevos avances tecnológicos están revolucionando la manera en que aprendemos jugando.
                </Text>
                <Text as="h3" className="subtitle-AU mt-4 mb-2">
                    🎲 Juguetes clásicos, tecnología futurista y miles de opciones para que cada aventura sea inolvidable. Porque en TOY-JUGUETES, jugar no tiene edad.
                </Text>
                <Text as="h3" className="subtitle-AU mt-4 mb-2">
                👾 ¡Explora nuestro <a href="index.html">catálogo</a> y encuentra la próxima gran diversión!
                </Text>             
        </Container>
    )
}

export default AboutUs