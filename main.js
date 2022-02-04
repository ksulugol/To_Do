const STATUS = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
}

const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
 "create a new practice task": STATUS.TO_DO,
 "make a bed": STATUS.TO_DO,
 "write a post": STATUS.IN_PROGRESS,
}

function deleteTask(name) {
  if (name in list) {
    delete list[name];
  }
}

function addTask(name) {
  list[name] = DEFAULT_STATUS;
}

function changeStatus(name, status) {
  if (name in list) {
    list[name] = status;
  }
}

function showList() {
  const tasks = {
    [STATUS.TO_DO]: '',
    [STATUS.IN_PROGRESS]: '',
    [STATUS.DONE]: '',
  }

  for (let name in list) {
    tasks[list[name]] += ` '${name}'` + '\n';
  }

  console.log('To do: \n' + (tasks[STATUS.TO_DO] || ' -') +
            '\nIn progress: \n' + (tasks[STATUS.IN_PROGRESS] || ' -') +
            '\nDone: \n' + (tasks[STATUS.DONE] || ' -'));
}


// addTask('have a walk') ;
// deleteTask('make a bed');
// changeStatus('write a post', 'Done');
showList();
// console.log (list);

``

