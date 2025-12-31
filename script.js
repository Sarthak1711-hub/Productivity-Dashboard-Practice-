// ================== NAVIGATION ==================
const navTasks = document.getElementById("nav-tasks");
const navExpenses = document.getElementById("nav-expenses");
const cardTasks = document.getElementById("card-tasks");
const cardExpenses = document.getElementById("card-expenses");
const sectionTasks = document.getElementById("section-tasks");
const sectionExpenses = document.getElementById("section-expenses");
const navDashboard = document.getElementById("nav-dashboard");

// ================== DATE ==================
const today = new Date();
document.getElementById("date").textContent = today.toDateString(); // NEW CONCEPT

// ================== TASK ELEMENTS ==================
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("taskbtn");
const taskCount = document.getElementById("taskCount");

// ================== EXPENSE ELEMENTS ==================
const expenseList = document.getElementById("expense-list");
const expenseInput = document.getElementById("expenseInput");
const expenseValue = document.getElementById("value");

// ================== NAVIGATION LOGIC ==================
navTasks.addEventListener("click", () => {
  clearBlur();
  cardExpenses.classList.add("blur"); // NEW CONCEPT
  sectionExpenses.classList.add("blur");
});

navExpenses.addEventListener("click", () => {
  clearBlur();
  cardTasks.classList.add("blur");
  sectionTasks.classList.add("blur");
});

navDashboard.addEventListener("click", clearBlur);

function clearBlur() {
  cardTasks.classList.remove("blur"); // NEW CONCEPT
  cardExpenses.classList.remove("blur");
  sectionTasks.classList.remove("blur");
  sectionExpenses.classList.remove("blur");
}

// ================== TASK LOGIC ==================
function updateTaskCount() {
  taskCount.textContent = `Total Tasks ${taskList.children.length}`;
}

taskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim(); // NEW CONCEPT
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;

  taskList.appendChild(li);
  taskInput.value = "";

  updateTaskCount();
});

// ================== EXPENSE LOGIC ==================
function updateExpenseTotal() {
  let total = 0;
  let items = document.querySelectorAll("#expense-list li");

  for (let i = 0; i < items.length; i++) {
    let text = items[i].textContent;
    let number = parseInt(text.replace(/\D/g, "")); // NEW CONCEPT
    total = total + number;
  }

  expenseValue.textContent = `₹${total}`;
}
let expensebtn = document.getElementById("expensebtn");
expensebtn.addEventListener("click", () => {
    const expense = expenseInput.value.trim(); 
    if (!expense) return;
  
    const li = document.createElement("li");
    li.textContent = expense;
  
    expenseList.appendChild(li);
    expenseInput.value = "";
  
    updateExpenseTotal();
  });
  

// Call once on load
updateExpenseTotal();
updateTaskCount();