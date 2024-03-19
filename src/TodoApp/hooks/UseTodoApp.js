
import { useContext, useState } from "react"
import { TodoContext } from "../../core/context/TodoContext"

export const UseTodoApp = () => {
    const [progress, setProgress] = useState('To Do')
    const {progressAction} = useContext(TodoContext)

    const onProgressButton = (progressValue, id) => {
        console.log(id)
       if( progressValue === 'To Do') return setProgress('In Progress')
       if( progressValue === 'In Progress') return setProgress('Done')
       if( progressValue === 'Done') return setProgress('To Do')

    //    progressAction(id)
    }

    

return {
    onProgressButton,
    progress,
}
}