import React, {useState, useEffect} from 'react';
import yelp from '../apis/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');
    //REQUEST
  async  function sendReq(term='restaurants'){
            try{
                const resp = await yelp('1,2,4',term,50)
                setResults(resp)
            }
            catch(err){
                errMsg = 'Something Went Wrong'
            }

            

    }
    useEffect(() =>{
        sendReq()
//         console.log('USEEFFECT: ', results)
           }, [])
 
    return [sendReq, results, errMsg]
    
}
