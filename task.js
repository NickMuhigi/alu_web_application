// script.js
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var taskText = taskInput.value;
    var listItem = document.createElement("li");
    var taskInfo = document.createElement("div");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    label.textContent = taskText;
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    taskInfo.appendChild(checkBox);
    taskInfo.appendChild(label);
    listItem.appendChild(taskInfo);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";

    checkBox.addEventListener("change", function() {
      if (checkBox.checked) {
        label.classList.add("completed");
      } else {
        label.classList.remove("completed");
      }
    });

    deleteButton.addEventListener("click", function() {
      listItem.remove();
    });
  }
}
