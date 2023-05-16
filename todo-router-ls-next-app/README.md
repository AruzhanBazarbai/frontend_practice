This is ToDo App, where you can: 
-add categories
-delete category
-add todo by category
-mark the todo as completed 
-clear completed todos 
-reset todo list 
-delete todo 
-view the number of completed todos
-and all these data will be stored in localstorage, so data will not be delete after you close the window 

To write this project I used Ts, Next.js and Tailwind. And include adaptive design. And work with localstorage and Link component

The Main page is CategoryPage, where I added all the other components and wrote the main logic of the application as adding, deleting category, and link to category detail page where you can see the todo list of this category etc.

There are components like:
-Layout, which includes the rest of the components on the page that I passed as the children property and Meta information for seo 
-ctgDetail- info about each category
-ctgHeader- where you can see that you are in category page and sign plus, which if you click the form will be visible and you can add new category. There I reused todoForm component
-ctgList- list of categories

There are components like: 
-Layout, which includes the rest of the components on the page that I passed as the children property and Meta information for seo 
-Todos components that contain different separate logic. 
-TodoAction- two buttons that reset todo list and clear completed todos; 
-Tododetail- info about each todo; 
-TodoForm- form that will give the chance create new todo; 
-TodoList- list of the todos that contain components TodoDetail

And there is ui element like Button, that wrappers TodoAction icons

And interfaces like Meta, which describes props that FC of react will accept. I also created another interface-todo.interface.ts, but in the end it was not needed and I used the Props type to describe the accepted props by FC. Also created a category interface

There are two pages