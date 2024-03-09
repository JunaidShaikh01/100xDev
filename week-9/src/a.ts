interface User {
  firstname: string;
  lastname: string;
  age: number;
  email?: string;
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}
