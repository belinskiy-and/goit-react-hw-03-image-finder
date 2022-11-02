import PropTypes from 'prop-types';
import Box from 'components/Box';

export const Error = ({caption}) => {
    return (
        <Box
              m={0}
              pt={32}
              fontSize="24px"
              fontWeight="500"
              textAlign="center"
              color="red"
              as="p"
            >
                {caption}
        </Box>
    );
}

export default Error;

Error.propTypes = {  
    caption: PropTypes.string.isRequired,      
};