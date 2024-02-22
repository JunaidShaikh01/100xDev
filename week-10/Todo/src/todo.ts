import { PrismaClient } from "@prisma/client";
import { todo } from "node:test";
const prisma = new PrismaClient();

//////CREATE TODO

// async function createTodo(userId: number, title: string, description: string) {
//   const todo = await prisma.todo.create({
//     data: {
//       userId,
//       title,
//       description,
//     },
//   });
//   console.log("Todo", todo);
// }

// createTodo(2, "Go to college", "I have to go collage");

/////UPDATE TODO

async function updateTodo(todoId: number) {
  const todo = await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      done: true,
    },
  });
  console.log("Updated Todo", todo);
}

updateTodo(2);

/////GET TODO

async function getTodo(userId: number) {
  const todoArray = await prisma.todo.findMany({
    where: {
      userId: userId,
    },
  });
  console.log(todoArray);
}

getTodo(2);
