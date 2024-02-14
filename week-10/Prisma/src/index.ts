import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

///// INSERTIING THE DATA

// async function insertUser(
//   username: string,
//   password: string,
//   firstname: string,
//   lastname: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       email: username,
//       password,
//       firstname,
//       lastname,
//     },
//     select: {
//       id: true,
//       email: true,
//       firstname: true,
//       lastname: true,
//     },
//   });

//   console.log(res);
// }
// insertUser("Xyz1@gamil.com", "passsword1", "xyx1", "abc1");

////// UPDATING THE DATA

interface UpdateParams {
  firstname: string;
  lastname: string;
}

async function updateUser(
  username: string,
  { firstname, lastname }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstname,
      lastname,
    },
  });
  console.log(res);
}

updateUser("Xyz@gamil.com", {
  firstname: "abc",
  lastname: "xyz",
});
