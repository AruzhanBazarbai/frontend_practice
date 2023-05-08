This is ToDo App, where you can:
-add todo
-mark the todo as completed
-clear completed todos
-reset todo list
-delete todo
-view the number of completed todos

To write this project I used Ts, Next.js and Tailwind. And include adaptive design

The Main page is HomePage, where I added all the other components and wrote the main logic of the application as adding, deleting todo, etc. 

There are components like:
-Layout, which includes the rest of the components on the page that I passed as the children property and Meta information for seo
-Todos components that contain different separate logic. TodoAction- two buttons that reset todo list and clear completed todos; Tododetail- info about each todo; TodoForm- form that will give the chance create new todo; TodoList- list of the todos that contain components TodoDetail

And there is ui element like Button, that wrappers TodoAction icons

And interfaces like Meta, which describes props that FC of react will accept. I also created another interface-todo.interface.ts, but in the end it was not needed and I used the Props type to describe the accepted props by FC

There is only one page. Because ToDo app contain only one page
