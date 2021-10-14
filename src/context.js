import React,{useState,useEffect,useContext} from 'react'

const AppContext = React.createContext()
//full api aders to hard
//https://api.tvmaze.com/schedule/full
//priv_api_key=''
const AppProvider = ({children}) => {
const [carcter,setCarecter]=useState([])
const [loading,setLoading]=useState(true)
const [ text , setText]=useState('')
//const [query,setQuery]=useState('')

const handleSubmit=(e)=>{
    setText(e)
}

let url = `https://breakingbadapi.com/api/characters?name=${text}`

const gitMaze =async ()=>{
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setLoading(false)
    setCarecter(data)
}


useEffect(()=>{
    gitMaze()
   
},[text])
    return (
        <AppContext.Provider value={{carcter,loading,text,setText,handleSubmit}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
