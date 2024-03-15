
import { useEffect, useState } from "react"

export const UseTodoApp = () => {
    const [progress, setProgress] = useState('To Do')

    const onProgressButton = (progressValue) => {
       if( progressValue === 'To Do') return setProgress('In Progress')
       if( progressValue === 'In Progress') return setProgress('Done')
       if( progressValue === 'Done') return setProgress('To Do')
    }

    // useEffect(() => {
    //     localStorage.setItem('progress', progress) 
    // }, [progress])
    
    
// Crear un dispatch especifico para el progress y añadirlo en el todoState
return {
    onProgressButton,
    progress,
}
}