import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Box from '../components/Box'
import Container from '../components/Container'
import Text from '../components/Text'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <Box as='footer' className="footer__container">
            <Container className="footer__text">
                <Text as="h4">Todos los juguetes al alcance de tu bolsillo. Envíos a todo el país. Descuentos y cuotas sin interés. Juguetes, Rodados, Juegos de Mesa, Rodados de Bebés.</Text>
                <Box>
                    <FontAwesomeIcon className="footer__socialmedia-links" icon={faFacebook} />
                    <FontAwesomeIcon className="footer__socialmedia-links" icon={faInstagram} />
                    <FontAwesomeIcon className="footer__socialmedia-links" icon={faYoutube} />
                </Box>
                
            </Container>
            <Box className="Copyright">
                <Text as="span">Copyright © 2025 TOY-JUGUETES. Diseño y desarrollo por LFM. Todos los derechos reservados.</Text>
                </Box>
        </Box>
        
    )
}

export default Footer