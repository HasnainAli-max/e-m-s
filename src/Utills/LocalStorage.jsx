const employee = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Complete project proposal",
        "description": "Draft and submit the client project proposal",
        "date": "2024-06-15",
        "category": "Documentation"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Fix login bug",
        "description": "Resolve authentication issue on mobile devices",
        "date": "2024-06-10",
        "category": "Development"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Team meeting",
        "description": "Attend weekly team sync",
        "date": "2024-06-05",
        "category": "Meeting"
      }
    ]
  },


// admin data 

];

const admin = [{
  "id": 100,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = () => {
  localStorage.setItem('admin', JSON.stringify(admin));
  localStorage.setItem('employees', JSON.stringify(employee));
};

export const getLocalStorage = () => {
  const employeesdata = JSON.parse(localStorage.getItem('employees'));
  const adminsdata = JSON.parse(localStorage.getItem('admin'));
 return{employeesdata, adminsdata};
};