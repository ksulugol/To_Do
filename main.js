const list = {
 "create a new practice task": "In Progress",
 "make a bed": "To Do",
 "write a post": "To Do",
}

function deleteTask(task) {
  delete list[task];
}

function addTask(task) {
  list[task] = 'To Do';
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
    if (list[task] === 'To Do') {
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
    if (list[task] === 'In Progress') {
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
    if (list[task] === 'Done') {
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


