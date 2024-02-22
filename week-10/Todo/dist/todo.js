"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function updateTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.update({
            where: {
                id: todoId,
            },
            data: {
                done: true,
            },
        });
        console.log("Updated Todo", todo);
    });
}
updateTodo(2);
/////GET TODO
function getTodo(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todoArray = yield prisma.todo.findMany({
            where: {
                userId: userId,
            },
        });
        console.log(todoArray);
    });
}
getTodo(2);
