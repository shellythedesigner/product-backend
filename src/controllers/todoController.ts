import Todo from "../models/todoModel";

export const getAllTodos = async (req: any, res: any) => {
  try {
    const todos = await Todo.find();

    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const addTodo = async (req: any, res: any) => {
  try {
    const newTodo = await Todo.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};


// const todos = [
//   { id: 1, title: "coding" },
//   { id: 2, title: "cleaning" }
// ];

// // GET /todos: Returns an array of all todo objects.
// app.get("/todos", (req, res) => {
//   res.status(200).send(todos);
// });

// // POST /todos: Adds a new todo to the list.
// app.post("/todos", (req, res) => {
//   const newTodo ={
//     id: todos.length + 1,
//     title: req.body.title
//   };
//   todos.push(newTodo);
//   res.status(201).send({ message: 'Added Successfully', todos: todos });
// });

// // DELETE /todos/:id: Removes a todo from the list by its id.
// app.delete("/todos/:id", (req, res) => {
//   const { id } = req.params;

//   res.status(200).send({ message: 'Deleted Successfully' });
// });






// // GET /todos/:id: Retrieves a single todo by its id.
// app.get("/todos/:id", (req, res) => {
//   const { id } = req.params;
//   const todo = todos.find(t => t.id === parseInt(id));
  
//   if (todo){
//     res.status(200).send(todo);
//   } else {
//     res.status(404).send('Todo not found');
//   }
// });

// // Update an item name
// app.put("/todos/:id", (req, res) => {
//   const { id } = req.params;
//   const newTitle = req.body.title;
//   const todoId = parseInt(id, 10);
//   const index = todos.findIndex(t => t.id === todoId);
//   if (index !== -1) {
//     todos[index].title = newTitle;
//     res.status(200).send({ message: 'Todo updated successfully', todos: todos });
//  } else {
//     res.status(404).send({ message: 'Todo not found' });
//  }
// });