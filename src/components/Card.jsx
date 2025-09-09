import Box from './Box'
import Counter from './Counter'
import Text from './Text'

function Card({
    img,
    name,
    shortDescription,
    amount,
    ...props
}) {
    return (
        <Box className="card">
            <Box className="card__image-box">
            <img src={img} alt={name} />
            </Box>        
            <Box className="card__content m-4">
                <Box>
                    <Text as="h3">{name}</Text>
                    <Text>{shortDescription}</Text>
                </Box>
                <Box className="card__price">
                    <Box className="d-flex justify-center w-100">
                        <Counter 
                            product={{
                                img,
                                name,
                                shortDescription,
                                amount,
                                ...props
                            }}
                        />
                    </Box>
                    <hr className="w-100"/>
                    <Text as='b'>{`$ ${Number(amount).toLocaleString('es-AR')}.–`}</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Card