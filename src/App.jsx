import { useEffect, useState } from 'react';
import './App.css'
import Countries from './Countries'
import MarkItem from '../MarkItem';

function App() {
  const [countries, setCountries] = useState([]); // Use state to store the fetched data

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        alert("something is wrong");
      }
    }

    fetchData();
  }, []);

  const [markList,setMarkList] =useState([]);
  const handelMarkList = (country) =>{
    const finalList = [...markList,country]
    console.log(finalList)
    setMarkList(finalList)
  }
  return (
    <>
    <div className='w-11/12 mx-auto'>
      <h1 className='my-4 text-6xl font-bold'>React Awesome World Tour!!!</h1>
      <p className='font-bold my-5'>Total countries {countries.length}</p>
      <div className='mb-10'>
        <h2 className='text-3xl font-semibold mb-4'>Mark countries for visit: {markList.length}</h2>
        <ul className='list-decimal list-inside space-y-4'>
          {
            markList.map((country,inx)=><MarkItem key={inx} country={country}></MarkItem> )
          }
        </ul>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          countries.map(country => <Countries
            key={country.ccn3} 
            country={country}
            handelMarkList={handelMarkList}
            ></Countries>)
        }
      </div>
    </div>
      
    </>
  )
}

export default App
