const employee = [
  {
  "id": 1,
  "name": "Ahmed Khan",
  "email": "employee1@example.com",
  "password": "123",
  "taskStats": {
    "total": 3,
    "active": 2,
    "new": 1,
    "completed": 1,
    "failed": 0
  },
  "tasks": [
    {
      "taskId": 101,
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
      "taskId": 102,
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
      "taskId": 103,
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
},{
    "id": 8,
    "name": "Ahmed Khan",
    "email": "employee1@example.com",
    "password": "123",
    "taskStats": {
      "total": 3,
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskId": 101,
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
        "taskId": 102,
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
        "taskId": 103,
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
  {
    "id": 2,
    "name": "Fatima Ali",
    "email": "fatima.ali@example.com",
    "password": "123",
    "taskStats": {
      "total": 4,
      "active": 3,
      "new": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskId": 201,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Implement user authentication",
        "description": "Create JWT authentication system",
        "date": "2024-06-18",
        "category": "Security"
      },
      {
        "taskId": 202,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Design database schema",
        "description": "Create MongoDB collections for new feature",
        "date": "2024-06-16",
        "category": "Database"
      },
      {
        "taskId": 203,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Code review",
        "description": "Review junior developer's pull request",
        "date": "2024-06-12",
        "category": "Quality Assurance"
      },
      {
        "taskId": 204,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Client demo",
        "description": "Present new features to client",
        "date": "2024-06-08",
        "category": "Presentation"
      }
    ]
  },
  {
    "id": 3,
    "name": "Bilal Ahmed",
    "email": "bilal.ahmed@example.com",
    "password": "123",
    "taskStats": {
      "total": 3,
      "active": 1,
      "new": 3,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "taskId": 301,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Redesign dashboard UI",
        "description": "Create Figma prototypes for new dashboard",
        "date": "2024-06-20",
        "category": "Design"
      },
      {
        "taskId": 302,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "User research",
        "description": "Conduct usability testing sessions",
        "date": "2024-06-14",
        "category": "Research"
      },
      {
        "taskId": 303,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Style guide update",
        "description": "Document new color palette and typography",
        "date": "2024-06-07",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 4,
    "name": "Ayesha Rahman",
    "email": "ayesha.rahman@example.com",
    "password": "123",
    "taskStats": {
      "total": 5,
      "active": 2,
      "new": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskId": 401,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Setup CI/CD pipeline",
        "description": "Configure GitHub Actions for automated deployment",
        "date": "2024-06-22",
        "category": "Infrastructure"
      },
      {
        "taskId": 402,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Server monitoring",
        "description": "Implement New Relic monitoring",
        "date": "2024-06-17",
        "category": "Monitoring"
      },
      {
        "taskId": 403,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Database backup",
        "description": "Setup automated MongoDB backups",
        "date": "2024-06-11",
        "category": "Database"
      },
      {
        "taskId": 404,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Security audit",
        "description": "Review server security configurations",
        "date": "2024-06-09",
        "category": "Security"
      },
      {
        "taskId": 405,
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Docker migration",
        "description": "Migrate legacy services to containers",
        "date": "2024-06-04",
        "category": "Infrastructure"
      }
    ]
  },
  {
    "id": 5,
    "name": "Usman Malik",
    "email": "usman.malik@example.com",
    "password": "123",
    "taskStats": {
      "total": 4,
      "active": 3,
      "new": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskId": 501,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Product roadmap",
        "description": "Create Q3 product development plan",
        "date": "2024-06-25",
        "category": "Planning"
      },
      {
        "taskId": 502,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Competitor analysis",
        "description": "Research competitor product features",
        "date": "2024-06-19",
        "category": "Research"
      },
      {
        "taskId": 503,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Stakeholder meeting",
        "description": "Present progress to investors",
        "date": "2024-06-13",
        "category": "Meeting"
      },
      {
        "taskId": 504,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Sprint planning",
        "description": "Prepare tasks for next development sprint",
        "date": "2024-06-06",
        "category": "Planning"
      }
    ]
  }

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