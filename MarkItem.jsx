import PropTypes from 'prop-types';
const MarkItem = ({country}) => {
    const {name,flags} = country;
    return (
        <li className='text-2xl font-medium'>
            {name.common} <img className='mt-2' src={flags.png} alt="" />
        </li>
    );
};
MarkItem.propTypes = {
    country: PropTypes.object
}
export default MarkItem;