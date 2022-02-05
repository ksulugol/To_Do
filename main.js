const list = [ ]

const STATUS = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
}

const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
}

function addTask(task) {
  list.push({
    name: task,
    status: STATUS.TO_DO,
    priority: PRIORITY.LOW,
  })
}

function deleteTask(task) {
  let findTask = list.findIndex(item => item.name = task);
  list.splice(findTask, 1);
}

function changeStatus(task, status) {
  list.filter( function (item) {
    if (item.name === task) {
      return item.status = status;
    }
  })
}

function changePriority(task, priority) {
  list.filter( function(item) {
    if (item.name === task) {
      return item.priority = priority;
    }
  })
}

function showList() {

  for (let key in STATUS) {
    console.log(STATUS[key] + ':');
    let StatusFilter = list.filter(item => item.status === STATUS[key]);
    console.log(StatusFilter);

    if (StatusFilter.length === 0 ) {
      console.log(' -');
    }
  }
}

addTask('have a walk');
addTask('make a dinner');
addTask('write a post');
// deleteTask('have a walk');
changeStatus('write a post', STATUS.DONE);
changePriority('make a dinner', PRIORITY.HIGH );
// console.log (list);
showList();
