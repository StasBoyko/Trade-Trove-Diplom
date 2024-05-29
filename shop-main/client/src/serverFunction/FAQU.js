import axios from 'axios'

const url='http://localhost:5000/tradeTrove'

export async function getAllFAQU(setFunc,setIsLoading,setIsError,length,setErrorMassage){
    try{
        setIsLoading(true)
        const res= await axios.get(`${url}/FAQU/`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        setIsError(true)
        alert(e.response.data.message)
        setErrorMassage(e.response.data.message)
    }
}