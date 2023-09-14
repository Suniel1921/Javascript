let todo = [];

let req = prompt('Enter your requrest');

while(true){
    if(req === 'quite'){
        console.log('Quitting app !');
        break;
    }

    if(req === 'list'){
        console.log('--------------')
       for(let i=0; i<todo.length; i++){
        console.log(i, todo[i]);
        }
           
        
        console.log('--------------')
    }
    else if(req === 'add'){
        let task = prompt('Enter your task you want to add');
        todo.push(task);
        console.log('Task Added ')
    }
    else if(req === 'delete'){
        todo.shift();
        console.log('Task deleted ')
    }
    else if (req === 'delete'){
        let index = prompt('Enter the task index');
        todo.splice(index, 1);
        console.log('task deleted')
    }
    else{
        console.log('wrong request!')
    }

    req = prompt('Enter your request');

}