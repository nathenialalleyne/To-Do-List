/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeAndDetails\": () => (/* binding */ removeAndDetails)\n/* harmony export */ });\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_Manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Manipulation */ \"./src/modules/Manipulation.js\");\n/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projects */ \"./src/modules/projects.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst taskButton = document.getElementById(\"add-task\");\r\nconst bodyContainer = document.getElementsByClassName(\"body-container\")[0];\r\nconst sidebar = document.getElementsByClassName(\"sidebar\")[0];\r\nconst content = document.getElementsByClassName(\"content\")[0];\r\nconst sidebarButton = document.getElementById(\"sidebar-button\");\r\nconst createTask = document.getElementById(\"create-task\");\r\nconst createContainer = document.getElementsByClassName(\"task-create\")[0];\r\nconst background = document.getElementsByClassName(\"test\")[0];\r\nconst exitButton = document.getElementsByClassName(\"fa\")[5];\r\nconst projectAdd = document.getElementById(\"add-project\");\r\nconst projectList = document.getElementsByClassName(\"project-list\")[0];\r\nconst homeButton = document.getElementById(\"home\");\r\nconst taskEdit = document.getElementsByClassName(\"task-edit\")[0];\r\nconst detailsName = document.getElementsByClassName(\"details-header\")[0];\r\nconst detailsDesc = document.getElementsByClassName(\"details-desc\")[0];\r\nconst detailsDate = document.getElementsByClassName(\"details-date\")[0];\r\nconst detailsPrio = document.getElementsByClassName(\"prio-card\")[0];\r\n\r\nlet selectedProject = home;\r\nlet arrayTask = _modules_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray;\r\n\r\nlet creating = false;\r\nvar sidebarVisibility = true;\r\nlet creatingTask = false;\r\n\r\nfunction removeAndDetails(card, obj) {\r\n  let remove = card.querySelector(\"#remove-task\");\r\n\r\n  remove.addEventListener(\"click\", () => {\r\n    (0,_modules_Manipulation__WEBPACK_IMPORTED_MODULE_2__.deleteCard)(card, obj.num);\r\n  });\r\n\r\n  let details = card.querySelector(\"#task-details\");\r\n\r\n  const detailsContainer = document.getElementsByClassName(\r\n    \"task-details-container\"\r\n  )[0];\r\n\r\n  details.addEventListener(\"click\", () => {\r\n    (0,_modules_Manipulation__WEBPACK_IMPORTED_MODULE_2__.cardDetails)(obj);\r\n\r\n    detailsContainer.style.visibility = \"visible\";\r\n    background.style.visibility = \"visible\";\r\n  });\r\n\r\n  let detailsRemove = document.getElementById(\"detail-exit-button\");\r\n\r\n  detailsRemove.addEventListener(\"click\", () => {\r\n    detailsContainer.style.visibility = \"hidden\";\r\n    background.style.visibility = \"hidden\";\r\n  });\r\n\r\n  detailsName.addEventListener(\"click\", () => {\r\n    const nameInput = document.createElement(\"input\");\r\n    nameInput.value = detailsName.innerHTML;\r\n    const parent = detailsName.parentElement;\r\n    parent.replaceChild(nameInput, detailsName);\r\n\r\n    nameInput.addEventListener(\"keypress\", (e) => {\r\n      if (e.which == 13) {\r\n        detailsName.innerHTML = nameInput.value;\r\n        parent.replaceChild(detailsName, nameInput);\r\n        card.querySelector(\".task-name\").innerHTML = nameInput.value;\r\n        _modules_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray[obj.num].name = nameInput.value;\r\n      }\r\n    });\r\n  });\r\n\r\n  detailsDate.addEventListener(\"click\", () => {\r\n    console.log(\"test\");\r\n    const dateInput = document.createElement(\"input\");\r\n    dateInput.type = \"date\";\r\n    const parent = detailsDate.parentElement;\r\n    parent.replaceChild(dateInput, detailsDate);\r\n\r\n    dateInput.addEventListener(\"keypress\", (e) => {\r\n      if (e.which == 13) {\r\n        detailsDate.innerHTML = dateInput.value;\r\n        parent.replaceChild(detailsDate, dateInput);\r\n        card.querySelector(\".task-date\").innerHTML = dateInput.value;\r\n        _modules_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray[obj.num].date = dateInput.value;\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\ncreateTask.addEventListener(\"click\", () => {\r\n  let match = false;\r\n\r\n  const taskName = document.getElementById(\"task-name\");\r\n  let remText = taskName.value.replace(/\\s/g, \"\");\r\n\r\n  for (let p = 0; p < _modules_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray.length; p++) {\r\n    if (_modules_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray[p].name == remText) {\r\n      taskName.focus;\r\n      match = true;\r\n    }\r\n  }\r\n\r\n  if (remText.length == 0 || match == true) {\r\n    taskName.focus;\r\n    alert(\"Invalid task name\");\r\n  } else {\r\n    const taskDesc = document.getElementById(\"task-desc\");\r\n    const taskDate = document.getElementById(\"task-date\");\r\n\r\n    if (taskDate.value == undefined || taskDate.value == \"\") {\r\n      taskDate.type = \"input\";\r\n      taskDate.value = \"No Date\";\r\n    }\r\n\r\n    console.log(taskDate.value);\r\n    const prioritySelector = document.getElementsByName(\"priority\");\r\n    let selectedPrio = \"\";\r\n    for (let i = 0; i < prioritySelector.length; i++) {\r\n      if (prioritySelector[i].checked) {\r\n        selectedPrio = prioritySelector[i].value;\r\n      }\r\n    }\r\n\r\n    let taskObj = (0,_modules_task__WEBPACK_IMPORTED_MODULE_0__.createTaskObject)(\r\n      taskName.value,\r\n      taskDesc.value,\r\n      taskDate.value,\r\n      selectedPrio,\r\n      selectedProject\r\n    );\r\n    (0,_modules_storage__WEBPACK_IMPORTED_MODULE_1__.addToTask)(taskObj);\r\n\r\n    taskName.value = \"\";\r\n    taskDesc.value = \"\";\r\n    taskDate.value = \"\";\r\n    taskDate.type = \"date\";\r\n\r\n    let taskCard = (0,_modules_Manipulation__WEBPACK_IMPORTED_MODULE_2__.createCard)(taskObj);\r\n\r\n    createContainer.style.visibility = \"hidden\";\r\n    background.style.visibility = \"hidden\";\r\n\r\n    removeAndDetails(taskCard, taskObj);\r\n  }\r\n});\r\n\r\ntaskButton.addEventListener(\"click\", () => {\r\n  createContainer.style.visibility = \"visible\";\r\n  background.style.visibility = \"visible\";\r\n});\r\n\r\nexitButton.addEventListener(\"click\", () => {\r\n  createContainer.style.visibility = \"hidden\";\r\n  background.style.visibility = \"hidden\";\r\n});\r\n\r\nsidebarButton.addEventListener(\"click\", () => {\r\n  if (sidebarVisibility == true) {\r\n    let children = sidebar.children;\r\n    for (let i = 0; i < children.length; i++) {\r\n      children[i].style.transform = \"translateX(-500px)\";\r\n    }\r\n    sidebar.style.flex = \"0\";\r\n    sidebar.style.padding = \"0\";\r\n    sidebarVisibility = false;\r\n  } else {\r\n    sidebarVisibility = true;\r\n    sidebar.style.flex = \"0 0 clamp(150px, 15%, 350px)\";\r\n    sidebar.style.padding = \"1rem\";\r\n    sidebar.style.visibility = \"visible\";\r\n    let children = sidebar.children;\r\n    for (let i = 0; i < children.length; i++) {\r\n      children[i].style.transform = \"translateX(0px)\";\r\n    }\r\n    sidebar.childNodes.forEach((element) => {});\r\n  }\r\n});\r\n\r\nhomeButton.addEventListener(\"click\", () => {\r\n  if (selectedProject != home) {\r\n    (0,_modules_projects__WEBPACK_IMPORTED_MODULE_3__.clearSelected)();\r\n    home.classList.add(\"selected\");\r\n    (0,_modules_Manipulation__WEBPACK_IMPORTED_MODULE_2__.homePage)();\r\n  }\r\n});\r\n\r\nprojectAdd.addEventListener(\"click\", () => {\r\n  if (creating == false) {\r\n    creating = true;\r\n    let proj = (0,_modules_projects__WEBPACK_IMPORTED_MODULE_3__.addProject)();\r\n    let createButton = proj.querySelector(\"#project-create\");\r\n    let cancelButton = proj.querySelector(\"#project-cancel\");\r\n\r\n    cancelButton.addEventListener(\"click\", () => {\r\n      const parent = cancelButton.parentElement.parentElement;\r\n      while (parent.firstChild) {\r\n        parent.removeChild(parent.firstChild);\r\n      }\r\n      parent.remove();\r\n      creating = false;\r\n    });\r\n\r\n    createButton.addEventListener(\"click\", () => {\r\n      let nameInput = proj.querySelector(\"#project-name\");\r\n      if (nameInput == \"\") {\r\n        creating = false;\r\n      } else {\r\n        console.log(nameInput.value);\r\n        let project = (0,_modules_projects__WEBPACK_IMPORTED_MODULE_3__.createProject)(nameInput.value);\r\n        projectList.removeChild(proj);\r\n\r\n        selectedProject = nameInput.value;\r\n\r\n        (0,_modules_Manipulation__WEBPACK_IMPORTED_MODULE_2__.projectSelected)(nameInput.value);\r\n        (0,_modules_projects__WEBPACK_IMPORTED_MODULE_3__.clearSelected)();\r\n\r\n        project.classList.add(\"selected\");\r\n        creating = false;\r\n\r\n        const projectSide = document.getElementsByClassName(\"project\");\r\n\r\n        Array.from(projectSide).forEach((element) => {\r\n          element.addEventListener(\"click\", () => {\r\n            (0,_modules_projects__WEBPACK_IMPORTED_MODULE_3__.clearSelected)();\r\n            (0,_modules_Manipulation__WEBPACK_IMPORTED_MODULE_2__.projectSelected)(element.innerHTML);\r\n            element.classList.add(\"selected\");\r\n            selectedProject = element;\r\n          });\r\n        });\r\n      }\r\n    });\r\n  } else {\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Manipulation.js":
/*!*************************************!*\
  !*** ./src/modules/Manipulation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardDetails\": () => (/* binding */ cardDetails),\n/* harmony export */   \"createCard\": () => (/* binding */ createCard),\n/* harmony export */   \"deleteCard\": () => (/* binding */ deleteCard),\n/* harmony export */   \"editDetails\": () => (/* binding */ editDetails),\n/* harmony export */   \"homePage\": () => (/* binding */ homePage),\n/* harmony export */   \"projectSelected\": () => (/* binding */ projectSelected)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\r\n\r\n\r\nfunction createCard(task) {\r\n  const content = document.getElementsByClassName(\"content\")[0];\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"task-container\");\r\n  container.dataset.index = task.num;\r\n\r\n  const taskRight = document.createElement(\"div\");\r\n  taskRight.classList.add(\"task-right\");\r\n\r\n  const status = document.createElement(\"input\");\r\n  status.type = \"checkbox\";\r\n\r\n  const name = document.createElement(\"div\");\r\n  name.classList.add(\"task-name\");\r\n\r\n  const taskLeft = document.createElement(\"div\");\r\n  taskLeft.classList.add(\"task-left\");\r\n\r\n  const date = document.createElement(\"div\");\r\n  date.classList.add(\"task-date\");\r\n\r\n  const priorityCard = document.createElement(\"div\");\r\n  priorityCard.classList.add(\"prio-card\");\r\n  priorityCard.classList.add(task.priority);\r\n  priorityCard.innerHTML = task.priority.toUpperCase();\r\n\r\n  const firstButtonDiv = document.createElement(\"div\");\r\n  const secondButtonDiv = document.createElement(\"div\");\r\n\r\n  const taskDetails = document.createElement(\"button\");\r\n  const cssIconOne = document.createElement(\"i\");\r\n\r\n  cssIconOne.classList.add(\"fa\");\r\n  cssIconOne.classList.add(\"fa-info-circle\");\r\n\r\n  taskDetails.appendChild(cssIconOne);\r\n  firstButtonDiv.appendChild(taskDetails);\r\n  taskDetails.setAttribute(\"id\", \"task-details\");\r\n\r\n  const removeTask = document.createElement(\"button\");\r\n  const cssIconTwo = document.createElement(\"i\");\r\n\r\n  cssIconTwo.classList.add(\"fa\");\r\n  cssIconTwo.classList.add(\"fa-trash\");\r\n\r\n  removeTask.appendChild(cssIconTwo);\r\n  secondButtonDiv.appendChild(removeTask);\r\n  removeTask.setAttribute(\"id\", \"remove-task\");\r\n\r\n  name.innerHTML = task.name;\r\n  date.innerHTML = task.date;\r\n\r\n  container.append(taskRight, taskLeft);\r\n  taskRight.append(status, name);\r\n\r\n  taskLeft.append(date, priorityCard, firstButtonDiv, secondButtonDiv);\r\n\r\n  content.appendChild(container);\r\n\r\n  return container;\r\n}\r\n\r\nfunction deleteCard(container, number) {\r\n  const content = document.getElementsByClassName(\"content\")[0];\r\n  while (container.firstChild) {\r\n    container.removeChild(container.firstChild);\r\n  }\r\n  content.removeChild(container);\r\n  for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_1__.taskArray.length; i++) {\r\n    if (_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].num == number) {\r\n      _storage__WEBPACK_IMPORTED_MODULE_1__.taskArray.splice(i, 1);\r\n    }\r\n  }\r\n}\r\n\r\nfunction cardDetails(task) {\r\n  const taskDetailsContainer = document.getElementsByClassName(\r\n    \"task-details-container\"\r\n  )[0];\r\n  const detailsName = document.getElementsByClassName(\"details-header\")[0];\r\n  const detailsDesc = document.getElementsByClassName(\"details-desc\")[0];\r\n  const detailsDate = document.getElementsByClassName(\"details-date\")[0];\r\n  const detailsPrio = document.getElementsByClassName(\"prio-card\")[0];\r\n\r\n  detailsName.innerHTML = task.name;\r\n  detailsDesc.innerHTML = task.description;\r\n  detailsDate.innerHTML = task.date;\r\n\r\n  detailsPrio.classList.add(task.priority);\r\n  detailsPrio.innerHTML = task.priority.toUpperCase();\r\n}\r\n\r\nfunction editDetails(task) {\r\n  const detailsName = document.getElementsByClassName(\"details-header\")[0];\r\n  const detailsDesc = document.getElementsByClassName(\"details-desc\")[0];\r\n  const detailsDate = document.getElementsByClassName(\"details-date\")[0];\r\n  const detailsPrio = document.getElementsByClassName(\"prio-card\")[0];\r\n\r\n  const editName = document.getElementById(\"edit-name\");\r\n  const editDesc = document.getElementById(\"edit-desc\");\r\n  const editDate = document.getElementById(\"edit-date\");\r\n  const editPrio = document.getElementsByName(\"edit-priority\");\r\n\r\n  editName.value = detailsName.innerHTML;\r\n  editDesc.value = detailsDesc.innerHTML;\r\n  editDate.value = detailsDate.innerHTML;\r\n}\r\n\r\nfunction projectSelected(projectName) {\r\n  console.log(projectName + \" selected\");\r\n  const content = document.getElementsByClassName(\"content\")[0];\r\n\r\n  while (content.firstChild) {\r\n    if (content.removeChild(content.firstChild)) {\r\n    }\r\n  }\r\n\r\n  let newArray = [];\r\n  for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_1__.taskArray.length; i++) {\r\n    if (_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].projectAssign == projectName) {\r\n      newArray.push(_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray[i]);\r\n      for (let j = 0; j < newArray.length; j++) {\r\n        let card = createCard(newArray[j]);\r\n        (0,___WEBPACK_IMPORTED_MODULE_0__.removeAndDetails)(card, newArray[j]);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction homePage() {\r\n  const content = document.getElementsByClassName(\"content\")[0];\r\n\r\n  while (content.firstChild) {\r\n    if (content.removeChild(content.firstChild)) {\r\n    }\r\n  }\r\n\r\n  for (let i = 0; i < _storage__WEBPACK_IMPORTED_MODULE_1__.taskArray.length; i++) {\r\n    let card = createCard(_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray[i]);\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.removeAndDetails)(card, _storage__WEBPACK_IMPORTED_MODULE_1__.taskArray[i]);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/Manipulation.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"clearSelected\": () => (/* binding */ clearSelected),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\r\n\r\nfunction addProject() {\r\n  const projectList = document.getElementsByClassName(\"project-list\")[0];\r\n  const projectCreateContainter = document.createElement(\"div\");\r\n  projectList.appendChild(projectCreateContainter);\r\n\r\n  const projectNameLabel = document.createElement(\"div\");\r\n  const projectNameInput = document.createElement(\"input\");\r\n  const buttonDiv = document.createElement(\"div\");\r\n  const projectCreate = document.createElement(\"button\");\r\n  const projectCancel = document.createElement(\"button\");\r\n\r\n  projectNameLabel.innerHTML = \"Project Name\";\r\n  projectNameInput.setAttribute(\"id\", \"project-name\");\r\n  projectCreate.setAttribute(\"id\", \"project-create\");\r\n\r\n  projectCancel.setAttribute(\"id\", \"project-cancel\");\r\n\r\n  projectCancel.innerHTML = \"CANCEL\";\r\n  projectCreate.innerHTML = \"CREATE\";\r\n\r\n  buttonDiv.classList.add(\"project-button-div\");\r\n  buttonDiv.append(projectCreate, projectCancel);\r\n\r\n  projectCreateContainter.append(projectNameLabel, projectNameInput, buttonDiv);\r\n\r\n  projectCreateContainter.classList.add(\"project-create-container\");\r\n  return projectCreateContainter;\r\n}\r\n\r\nfunction createProject(projectName) {\r\n  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.addToProject)(projectName);\r\n\r\n  const projectSide = document.createElement(\"div\");\r\n  const projectList = document.getElementsByClassName(\"project-list\")[0];\r\n  projectList.classList.add(\"project-list\");\r\n  projectSide.classList.add(\"project\");\r\n\r\n  projectSide.innerHTML = projectName;\r\n\r\n  projectList.appendChild(projectSide);\r\n\r\n  return projectSide;\r\n}\r\n\r\nfunction clearSelected() {\r\n  let selected = document.getElementsByClassName(\"selected\");\r\n\r\n  for (let i = 0; i < selected.length; i++) {\r\n    selected[i].classList.remove(\"selected\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/projects.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToProject\": () => (/* binding */ addToProject),\n/* harmony export */   \"addToTask\": () => (/* binding */ addToTask),\n/* harmony export */   \"projectArray\": () => (/* binding */ projectArray),\n/* harmony export */   \"taskArray\": () => (/* binding */ taskArray)\n/* harmony export */ });\nlet taskArray = [];\r\nlet projectArray = [];\r\n\r\nfunction addToTask(task) {\r\n  taskArray.push(task);\r\n}\r\nfunction addToProject(project) {\r\n  projectArray.push(project);\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskObject\": () => (/* binding */ createTaskObject)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\r\nlet num = 0;\r\n\r\nfunction createTaskObject(taskName, taskDesc, dueDate, prio, project) {\r\n  var task = {\r\n    name: taskName,\r\n    description: taskDesc,\r\n    date: dueDate,\r\n    priority: prio,\r\n    num: num,\r\n    projectAssign: project,\r\n  };\r\n  num += 1;\r\n  return task;\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;