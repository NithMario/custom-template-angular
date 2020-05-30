// Smart DataTable
export var settings = {
  //columns
  columns: {
    id: {
      title: 'ITEMS NAME',
      filter: false,
    },
    name: {
      title: 'ITEMS CODE',
      filter: false,
    },
    username: {
      title: 'STATUS',
      filter: false,
    },
    qty: {
      title: 'QTY IN STOCK',
      filter: false,
    },
    unit: {
      title: 'BASE UNIT',
      filter: false,
    },
    cost: {
      title: 'MIN COSE',
      filter: false,
    },
    max_cost: {
      title: 'MAX COST',
      filter: false,
    },
    avg_cost: {
      title: 'AVG COST',
      filter: false,
    }
   
  },

  
  attr: {
    class: "table table-responsive"
  },
  edit:{
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  delete:{
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  }
};
//data
export var data = [
  {
    id: "SP-001",
    name: 'SP-001',
    username: 'Coca',
    qty: '50',
    unit:'KG',
    cost:'50$',
    max_cost:'50$',
    avg_cost:'50$',
  },
  {
    id: "SP-001",
    name: 'SP-001',
    username: 'Coca',
    qty: '50',
    unit:'KG',
    cost:'50$',
    max_cost:'50$',
    avg_cost:'50$',
  },
  {
    id: "SP-001",
    name: 'SP-001',
    username: 'Coca',
    qty: '50',
    unit:'KG',
    cost:'50$',
    max_cost:'50$',
    avg_cost:'50$',
  },
  {
    id: "SP-001",
    name: 'SP-001',
    username: 'Coca',
    qty: '50',
    unit:'KG',
    cost:'50$',
    max_cost:'50$',
    avg_cost:'50$',
  },
  {
    id: "SP-001",
    name: 'SP-001',
    username: 'Coca',
    qty: '50',
    unit:'KG',
    cost:'50$',
    max_cost:'50$',
    avg_cost:'50$',
  },
  {
    id: "SP-001",
    name: 'SP-001',
    username: 'Coca',
    qty: '50',
    unit:'KG',
    cost:'50$',
    max_cost:'50$',
    avg_cost:'50$',
  },
  {
    id: "SP-001",
    name: 'SP-001',
    username: 'Coca',
    qty: '50',
    unit:'KG',
    cost:'50$',
    max_cost:'50$',
    avg_cost:'50$',
  },
  {
    id: "SP-001",
    name: 'SP-001',
    username: 'Coca',
    qty: '50',
    unit:'KG',
    cost:'50$',
    max_cost:'50$',
    avg_cost:'50$',
  },
  
  {
    id: "SP-001",
    name: 'SP-001',
    username: 'Coca',
    qty: '50',
    unit:'KG',
    cost:'50$',
    max_cost:'50$',
    avg_cost:'50$',
  },
  {
    id: "SP-001",
    name: 'SP-001',
    username: 'Coca',
    qty: '50',
    unit:'KG',
    cost:'50$',
    max_cost:'50$',
    avg_cost:'50$',
  },
  
  
  
  
];

export var filtersettings = {
  columns: {
    id: {
      title: 'ID',
    },
    name: {
      title: 'Full Name',
      filter: {
        type: 'list',
        config: {
          selectText: 'Select...',
          list: [
            { value: 'Glenna Reichert', title: 'Glenna Reichert' },
            { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
            { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
          ],
        },
      },
    },
    email: {
      title: 'Email',
    },
    passed: {
      title: 'Passed',
      filter: {
        type: 'checkbox',
        config: {
          true: 'Yes',
          false: 'No',
          resetText: 'clear',
        },
      },
    },
  },
  attr: {
    class: "table table-responsive"
  },
  edit:{
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  delete:{
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  }
};

export var filerdata = [
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
    passed: 'Yes',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    passed: 'No',
  }
];

export var alertsettings = {
  delete: {
    confirmDelete: true,
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  },
  add: {
    confirmCreate: true,
  },
  edit: {
    confirmSave: true,
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  columns: {
    id: {
      title: 'ID',
    },
    name: {
      title: 'Full Name',
    },
    username: {
      title: 'User Name',
    },
    email: {
      title: 'Email',
    },
  },
  attr: {
    class: "table table-responsive"
  },
};

export var alertdata = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    notShownField: true,
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    notShownField: true,
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    notShownField: false,
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    notShownField: false,
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    notShownField: false,
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    notShownField: false,
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    notShownField: false,
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    notShownField: true,
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    notShownField: false,
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    notShownField: false,
  },
  {
    id: 11,
    name: 'Nicholas DuBuque',
    username: 'Nicholas.Stanton',
    email: 'Rey.Padberg@rosamond.biz',
    notShownField: true,
  }
];


export var user_settings = {
  
    hideSubHeader:true,
  
    actions: {
        position:"right",
        delete:false,
        add:false,
        columnTitle:"ACTIONS",
    },  
  
    columns: {
        photo: {
          title: 'PHOTO',
          filter: false,
          type: 'html',
          valuePrepareFunction: (img: any) => {
              return '<i class="fa fa-check"></i>'
              }
        },
        username: {
          title: 'USERNAME',
          filter: false,
        },
        email: {
          title: 'EMAIL',
          filter: false,
          width: '50px'
        },
        phone: {
          title: 'PHONE',
          filter: false,
        },
    },
      attr: {
      class: "table table-responsive"
    },
      edit:{
      editButtonContent: '<i class="fa fa-eye"></i>'
    }
  };
  
  export var data_users =[
    {
      username:'Admin',
      email:'sopha.pum@redfox.com',
      phone:'0979966777',
    },
    {
      username:'abc',
      email:'abc@gmail.com',
      phone:'012356789',
    },
    {
      username:'cba',
      email:'cba@gmail.com',
      phone:'0987654321',
    }
  ];