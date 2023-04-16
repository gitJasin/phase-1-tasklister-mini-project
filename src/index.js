// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

/* 
==============
|Deliverables|
====================================================================
    [X] As a user, I should be able to type a task into the input field. 
    [X] As a user, I should be able to click some form of a submit button. 
    [X] As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated. 


======================
|Stretch Deliverables|
====================================================================
Once you've got the required deliverables working, you may want to try to implement one or more of the following:

    [X] A delete function that will remove tasks from your list
    [X] A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low) 
        As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
    [X] An additional input field (e.g. user, duration, date due) 
    Ability to edit tasks
    Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
*/

const form = document.querySelector('#createTaskForm')
const tasks = document.querySelector('#tasks')

form.addEventListener('submit', (e) => {
  // prevent unseeemly loops
  e.preventDefault()

  const describeTask = e.target.taskDescription.value
  const choosePriority = e.target.priority.value
  const theFirstName = e.target.firstName.value
  const theLastName = e.target.lastName.value
  const theDate = e.target.date.value

  const task = {
    describeTask,
    choosePriority,
    theFirstName,
    theLastName,
    theDate,
  }

  // function to display task details
  displayTaskDetails(task)
  form.reset()
})

function displayTaskDetails(task) {
  const fieldset = document.createElement('fieldset')
  const deleteBtn = document.createElement('deleteBtn')

  fieldset.textContent = `Hey ${task.theFirstName} ${task.theLastName}! Please complete the following: ${task.describeTask} by ${task.theDate}. It is a ${task.choosePriority} priority. Thank you! When complete, please delete:   `
  deleteBtn.innerHTML = '🗑️'

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    e.target.parentNode.parentNode.remove()
  })

  fieldset.style.color = changePriorityColor(task.choosePriority)
  console.log(fieldset)
  fieldset.appendChild(deleteBtn)
  tasks.appendChild(fieldset)
}

function changePriorityColor(choosePriority) {
  if (choosePriority === 'low') {
    return 'green'
  } else if (choosePriority === 'medium') {
    return 'blue'
  } else {
    return 'red'
  }
}