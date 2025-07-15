function addTask(){
    const taskInput=document.getElementById('taskInput');
    const taskText=taskInput.value.trim();
    if(taskText==='')return;
    const li=document.createElement('li');
    li.innerHTML=`
        <span onclick="toggleTask(this)" style="cursor: pointer;">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    document.getElementById('taskList').appendChild(li);
    taskInput.value='';
}
function toggleTask(element) {
    element.classList.toggle('completed');
}
function deleteTask(element) {
    element.parentElement.remove();
}
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});