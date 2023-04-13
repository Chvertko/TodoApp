import { Box } from "@mui/system";
import { Container } from "./Container";
import { Button, Stack, Typography } from "@mui/material";
import { TodoItem } from "./TodoItem";
import { useTodoContext } from "../provider/provider";
import { SelectInput } from "./SelectInput";
import { useEffect } from "react";

export const TodoList = () => {
  const { todoList,setTodoList,filter} = useTodoContext();



  const completedTodos = todoList.filter(todo => todo.completed === true);
  const unCompletedTodos = todoList.filter(todo => todo.completed === false);
  const activeTodos = todoList.filter(todo => !todo.completed);
  useEffect(()=>{
    
  },)
  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Typography variant="h3" sx={{ marginTop: "30px", marginBottom: "30px" }}>
          TodoList
        </Typography>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          <Box sx={{}}>
            <SelectInput/>
          </Box>
          <Box className="todos" sx={{ height: "50%", maxHeight: "400px", width:'100%' }}>
          {(() => {
            switch (filter) {
              case 'all':
                return todoList.map((todo) => (
                  <TodoItem key={todo.id} id={todo.id} {...todo}/>
                  ))
              case 'done':
                return completedTodos.map((todo) => (
                  <TodoItem key={todo.id} id={todo.id} {...todo}/>
                )
                  )
              case 'todo':
                return unCompletedTodos.map((todo) => (
                  <TodoItem key={todo.id} id={todo.id} {...todo}/>
                ))
              default:
                return <div>Значение не определено</div>;
          }
          })()}
          </Box>
          <Stack sx={{margin:'0 auto',paddingTop:'30px'}} direction="row" spacing={2}>
            <Button onClick={() => setTodoList([])}>Delete all</Button>
            <Button onClick={() => setTodoList(activeTodos)}>Delete add done</Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
