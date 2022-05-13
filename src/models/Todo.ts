import Subtask from "./SubTask"



export default class Todo {
    title: string
    done = false // tydligen behöver man inte typa boolean här, då blir det error "trivial"
    subtasks:Subtask[] = []

    constructor(title: string, description?: string) {
        this.title = title
    }
}