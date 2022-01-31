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

function deleteTask(task) {
  if (task in list) {
    delete list[task];
  }
}

function addTask(task) {
  list[task] = DEFAULT_STATUS;
}

function changeStatus(task, status) {
  if (task in list) {
    list[task] = status;
  }
}

function showList () {
  let count = 0;

  console.log ('To Do:');
  for (task in list) {
    if (list[task] === STATUS.TO_DO) {
      console.log (` '${[task]}'`);
      count++;
    }
  }
  if (count === 0) {
    console.log (' -');
  }
  count = 0;

  console.log ('In Progress:');
  for (task in list) {
    if (list[task] === STATUS.IN_PROGRESS) {
      console.log (` '${[task]}'`);
      count++;
    }
  }
  if (count === 0) {
    console.log (' -');
  }
  count = 0;

  console.log ('Done:');
  for (task in list) {
    if (list[task] === STATUS.DONE) {
      console.log (` '${[task]}'`);
      count++;
    }
  }
  if (count === 0) {
    console.log (' -');
  }
  count = 0;
}


// console.log (addTask('have a walk') );
// console.log (deleteTask('make a bed'));
// console.log (changeStatus('write a post', 'Done'));
console.log(showList());
// console.log (list);
