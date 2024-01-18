// import { useState } from "react"

// export const UseTodoApp = () => {
//     const [progress, setProgress] = useState('To Do')

//     const [progressCircle, setProgressCircle] = useState(0)


//     const onProgressButton = (progressValue) => {
//        if( progressValue === 'To Do') return setProgress('In Progress') & setProgressCircle(50)
//        if( progressValue === 'In Progress') return setProgress('Done') & setProgressCircle(100)
//        if( progressValue === 'Done') return setProgress('To Do') & setProgressCircle(0)

//     }


// return {
//     onProgressButton,
//     progress,
//     progressCircle
    
// }
// }
import { useState } from "react"

export const UseTodoApp = () => {
    const [progress, setProgress] = useState('To Do')

    const onProgressButton = (progressValue) => {
       if( progressValue === 'To Do') return setProgress('In Progress')
       if( progressValue === 'In Progress') return setProgress('Done')
       if( progressValue === 'Done') return setProgress('To Do')
    }

    

return {
    onProgressButton,
    progress,
}
}