// super_user','administrator','employee','student','parent', 'guest;
const allRoles = {
  super_user: ["getUsers", "manageUsers"],
  administrator: ["getUsers", "manageUsers"],
  employee: [],
  parent:[],
  student:[],
  guest: [],
};



const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
