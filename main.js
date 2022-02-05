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

// const STATUS = {
//   TO_DO: 'To Do',
//   IN_PROGRESS: 'In Progress',
//   DONE: 'Done',
// }
//
// const DEFAULT_STATUS = STATUS.TO_DO;

// const list = {
//  "create a new practice task": STATUS.TO_DO,
//  "make a bed": STATUS.TO_DO,
//  "write a post": STATUS.IN_PROGRESS,
// }
//
// function deleteTask(task) {
//   if (task in list) {
//     delete list[task];
//   }
// }
//
// function addTask(task) {
//   list[task] = DEFAULT_STATUS;
// }
//
// function changeStatus(task, status) {
//   if (task in list) {
//     list[task] = status;
//   }
// }
//
// function showList() {
//   const tasks = {
//     [STATUS.TO_DO]: '',
//     [STATUS.IN_PROGRESS]: '',
//     [STATUS.DONE]: '',
//   }
//
//   for (let task in list) {
//     tasks[list[task]] += ` '${task}'` + '\n';
//   }
//
//   console.log('To do: \n' + (tasks[STATUS.TO_DO] || ' -') +
//             '\nIn progress: \n' + (tasks[STATUS.IN_PROGRESS] || ' -') +
//             '\nDone: \n' + (tasks[STATUS.DONE] || ' -'));
// }
//
//
// // addTask('have a walk') ;
// // deleteTask('make a bed');
// // changeStatus('write a post', 'Done');
// showList();
// // console.log (list);
//

