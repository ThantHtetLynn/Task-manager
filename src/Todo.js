import initialRender from "./initialRender.js";
import listener from "./listeners.js";
import observer from "./observer.js";

class Todo{
    init(){
        console.log("To do app start");
        initialRender();
        listener();
        observer();
    }
}

export default Todo;