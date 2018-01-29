let array: Array<string> = [];

function addTask(task:string): number{

    let count:number;
    array.push(task);

    console.log(`New Task "${task}" added to the array`);
    count = array.length

    return count;
}

function listAllTasks()
{
    array.forEach(function(task){
        console.log(task)
    })

}

function deleteTasks(task:string): number{
let key: string = task;

let index: number = array.indexOf(key,0);

if(index > -1)
{
    array.splice(index, 1);
}

return array.length;

}


addTask('task 1')
listAllTasks()
deleteTasks('task 2');
