import { useState , useEffect } from "react";

const useFetch = (url) => {
    const [data , setData] = useState(null);
    const [isPending , setIspending] = useState(true);
    const [error , setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>{
            fetch(url , { signal : abortCont.signal})
        .then(res => {
            if(!res.ok){
                setIspending(true);
                throw Error('Could not fetch the data for that resource !!');
            }
            console.log(res);
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            setData(data);
            setIspending(false);
            setError(null);
        })
        .catch( err => {
            if(err.name === 'AbortError'){
                console.log('fetch Aborted');
            }else{
                setError(err.message);
                setIspending(false);
            }
        })
    },1000);
    return ()=> abortCont.abort();
} , [url]);
    return  {data , isPending , error};
}
 
export default useFetch;