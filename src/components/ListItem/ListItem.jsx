import PropTypes from 'prop-types';
import './styles.css'

const ListItem = ({children, index, handleUp, handleDown, link}) => {
    // const content = link ? <a>{children}</a> : {children};
    return (
        <div className='item'>
            <div style={{padding: "10px", color: "#F7F7F7F7"}}>
                <a href={link ? link : null}>{children}</a>
            </div>
            
            <div className='button-container'>
                <button style={{transform: "rotate(180deg)"}} id={index} onClick={handleUp}>V</button>
                <button id={index} onClick={handleDown}>V</button>
            </div>
        </div>
    );
};

export default ListItem;

ListItem.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number,
    handleUp: PropTypes.func,
    handleDown: PropTypes.func,
    link: PropTypes.bool
};