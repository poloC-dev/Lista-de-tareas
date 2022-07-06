// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//Tasks container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date(); 
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' }); // numeric muestra el dato en tipo numero
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' }); // long muestra el dato completo "sabado" en vez de "sab"
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' }); // short muestra el dato cortado "Sept" en vez de "Septiembre"
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText; //guardo el valor del texto ingresado
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task','roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task); //prepend agrega al principio de la lista
    event.target.reset(); // resetea el input de texto

};

const changeTaskState = event => {
    event.target.classList.toggle('done')
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el =>{ //EL puede ser cualquier nombre, es para ingresar al elemento y operar con él
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];// ... hace un spread primero del toDo para que las tareas que faltan hacer queden primeras
};

// order lo que hace es ordenar los elementos en el container de tareas
const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
};

setDate();


