import PropTypes from 'prop-types';
import './styles.css'

const Star = ({size, x, y}) => {
    return (
        <div className='star' style={{ left: x, top: y, width: size, height: size, transform: `rotate(${(Math.random() * 100) * 360}deg)` }} />
    );
};

export default Star;

Star.propTypes = {
    size: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
};