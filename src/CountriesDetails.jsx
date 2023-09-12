import PropTypes from 'prop-types';
const CountriesDetails = ({country}) => {
    const {name,capital,independent,cca3,population,area,startOfWeek} = country
    return (
        <div>
            <h2 className='text-2xl font-bold underline mt-4 mb-2'>Country Details</h2>
            <div className='grid grid-cols-1'>
                <small className='font-medium'>Common Name: {name.common}</small>
                <small className='font-medium'>Capital: {capital}</small>
                <small className='font-medium'>{independent? 'Independent Country':'Not independent Country'}</small>
                <small className='font-medium'>Population: {population}</small>
                <small className='font-medium'>Area: {area} Square K.M.</small>
                <small className='font-medium'>Country code: {cca3}</small>
                <small className='font-medium'>Start of week day: {startOfWeek}</small>
            </div>
        </div>
    );
};
CountriesDetails.propTypes = {
    country: PropTypes.object
}
export default CountriesDetails;