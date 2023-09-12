import PropTypes from 'prop-types';
const CountriesBtn = ({handelVisited,visited,handelMarkList,country}) => {
    return (
        <div>
            <button onClick={handelVisited} className='bg-purple-500 py-2 px-3 mr-2 text-white font-bold rounded-lg my-4'>{visited? 'Want to Visit' : 'Visited'}</button>
            <button onClick={()=>handelMarkList(country)} className='bg-purple-500 py-2 px-3 text-white font-bold rounded-lg my-4'>{visited? 'Add to mark' : 'Visited'}</button>
        </div>
    );
};
CountriesBtn.propTypes = {
    handelVisited: PropTypes.func,
    visited: PropTypes.bool,
    country: PropTypes.object,
    handelMarkList: PropTypes.func
}
export default CountriesBtn;