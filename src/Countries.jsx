import PropTypes from 'prop-types';
import CountriesBtn from './CountriesBtn';
import { useState } from 'react';
import CountriesDetails from './CountriesDetails';
const Countries = ({country,handelMarkList}) => {
    const {name,capital,flags} = country;
    const [visited,setVisited] = useState(true);
    const handelVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className={
            visited? `p-4 border border-purple-800 rounded-lg bg-[#ffff]`:
            `p-4 border border-purple-800 rounded-lg bg-[#fcf1f1]`
            }>
            <img src={flags.png} alt="" />
            <h1 className="text-2xl font-bold mt-4">{name.common}</h1>
            <p><small>Capital: {capital}</small></p>
            <CountriesBtn handelVisited={handelVisited} visited={visited} country={country} handelMarkList={handelMarkList}></CountriesBtn>
            <hr/>
            <CountriesDetails country={country}></CountriesDetails>
        </div>
    );
};
Countries.propTypes = {
    country: PropTypes.object,
    handelMarkList: PropTypes.func
}
export default Countries;