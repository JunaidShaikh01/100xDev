import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, name: string) {
  const user = await prisma.user.create({
    data: {
      username,
      password,
      name,
    },
    select: {
      id: true,
      password: true,
    },
  });
  console.log("User", user);
}

insertUser("yunus123", "1234", "Yunus");
