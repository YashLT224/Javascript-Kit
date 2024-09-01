const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  });
  
  const user1 = createUser({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com"
  });
  
  const user2 = createUser({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@doe.com"
  });
  