import PropTypes from 'prop-types';
import './styles.css'

const Card = ({children}) => {
    return (
        <div className='card-container'>
            {children}
        </div>
    );
}

export default Card;

Card.propTypes = {
    children: PropTypes.node
};