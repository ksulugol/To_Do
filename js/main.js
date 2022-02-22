let list = [ ]

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
  const findTask = list.findIndex(item => item.name = task);
  list.splice(findTask, 1);
  //при удалении мы фильтруем исходный массив, забирая только то, что нам нужно, без удаляемого элемента
  list = list.filter(item => item.name !== task);
}

function changeStatus(task, status) {
  // list.filter( function (item) {
  //   if (item.name === task) {
  //     return item.status = status;
  //   }
  // при добавлении статуса - находим индекс элемента, достаем его из списка и меняем ему статус
  // list[findStatus].status - это статус твоего найденного элемента,
  //     ему присваивается пришедший в аргументах status
  const findStatus = list.findIndex( item => item.name === task);
  list[findStatus].status = status;
}

function changePriority(task, priority) {
  const findPriority = list.findIndex(item => item.name === task);
  list[findPriority].priority = priority;
}

function showBy(filter) {
  let filterKey;

  if (filter === 'status') {
    filter = STATUS;
    filterKey = 'status';
  } else if (filter === 'priority') {
    filter = PRIORITY;
    filterKey = 'priority';
  }

    for (let key in filter) {
      console.log(filter[key] + ':');
      const filterTask = list.filter(item => item[filterKey] === filter[key]);
      console.log(filterTask);
      if (filterTask.length === 0) {
        console.log(' -');
      } else {
        console.log(filterTask);
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
showBy('status');
showBy('priority');


