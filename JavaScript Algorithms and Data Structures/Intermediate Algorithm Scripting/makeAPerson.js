var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = () => {
    return firstAndLast;
  };

  this.getFirstName = () => {
    return firstAndLast.split(" ")[0];
  };

  this.getLastName = () => {
    return firstAndLast.split(" ")[1];
  };

  this.setFirstName = (name) => {
    firstAndLast = name + " " + firstAndLast.split(" ")[1];
  };

  this.setLastName = (name) => {
    firstAndLast = firstAndLast.split(" ")[0] + " " + name;
  };

  this.setFullName = (name) => {
    firstAndLast = name;
  };

  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();
