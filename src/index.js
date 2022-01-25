document.addEventListener("DOMContentLoaded", () => {



  const newTaskForm = document.getElementById ("create-task-form")
  const newTaskDescription = document.getElementById ("new-task-description")
  const newTaskPriority = document.getElementById ("new-task-priority")

  const taskUl = document.getElementById("tasks")

  newTaskForm.addEventListener("submit", createTask)
})

const createTask = e => {
  e.preventDefault()
  
  const newTaskDescription = document.getElementById("new-task-description")
  const newTask = document.createElement("li")
  newTask.innerText = newTaskDescription.value

  appendNewTask(newTask)
  e.target.reset() 
}

  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task)
  }