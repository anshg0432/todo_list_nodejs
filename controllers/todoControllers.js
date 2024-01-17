const Tasks = require("../models/tasks");


const todo_list = (req,res)=>{
  
  Tasks.find().sort({createdAt: -1})
  .then((result)=>{
      
      res.render('index',{yourName: 'Ansh Gupta', tasks: result});
  })
  .catch((err)=>{
      console.log(err);
  })

}

const create_task = (req,res)=>{
 
  const task = new Tasks(req.body);
    task.save()
    .then((result)=>{
        res.redirect('/todo-list');
    })
    .catch((err)=>{
        console.log(err);
    });
}
module.exports ={
  todo_list,
  create_task
}