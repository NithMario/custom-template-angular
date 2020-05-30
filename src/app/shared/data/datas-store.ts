import { autoClose } from './sweet-alerts';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

export var headers = {
  
    hideSubHeader:true,

    actions: {
        position:"right",
        add:false,
        columnTitle:"Actions",
    },  
    pager:{
        display:false,
        perPage:false,
    },

    columns: {
        id: {
            title: 'ID',
            filter: false,
            type: 'html',
            //valuePrepareFunction: (img: any) => {
            //   return '<i class="fa fa-check"></i>'
            // }//set icon here
        },
        name: {
            title: 'Name',
            filter: false,
        },
        gender: {
            title: 'Gender',
            filter: false,
            width: '50px'
        },
        age: {
            title: 'Age',
            filter: false,
        },
        email: {
            title: 'Email',
            filter: false,
        },
        phone: {
            title: 'Phone',
            filter: false,
        },
        position: {
            title: 'Position',
            filter: false,
        },
    },
      attr: {
      class: "table table-responsive"
    },
    edit:{
        editButtonContent: '<i class="ft-edit-2 font-meduim-1"></i>'
    },
    delete:{
        deleteButtonContent: '<i class="ft-trash danger font-small-3"></i>'
      }
  };
  
  export var datas =[
    {
      id:'1',
      name:'Admin',
      gender:'male',
      age:'24',
      email:'sopha.pum@redfox.com',
      phone:'0979966777',
      position:'Manager'
    },
    {
        id:'2',
        name:'Admin',
        gender:'male',
        age:'24',
        email:'sopha.pum@redfox.com',
        phone:'0979966777',
        position:'Manager'
    },
    {
        id:'3',
        name:'Admin',
        gender:'male',
        age:'24',
        email:'sopha.pum@redfox.com',
        phone:'0979966777',
        position:'Manager'
    },
    {
        id:'4',
        name:'Admin',
        gender:'male',
        age:'24',
        email:'sopha.pum@redfox.com',
        phone:'0979966777',
        position:'Manager'
      },
      {
          id:'5',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
          id:'6',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
        id:'7',
        name:'Admin',
        gender:'male',
        age:'24',
        email:'sopha.pum@redfox.com',
        phone:'0979966777',
        position:'Manager'
      },
      {
          id:'8',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
          id:'9',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
        id:'10',
        name:'Admin',
        gender:'male',
        age:'24',
        email:'sopha.pum@redfox.com',
        phone:'0979966777',
        position:'Manager'
      },
      {
          id:'12',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
          id:'13',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
        id:'14',
        name:'Admin',
        gender:'male',
        age:'24',
        email:'sopha.pum@redfox.com',
        phone:'0979966777',
        position:'Manager'
      },
      {
          id:'15',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
        id:'16',
        name:'Admin',
        gender:'male',
        age:'24',
        email:'sopha.pum@redfox.com',
        phone:'0979966777',
        position:'Manager'
      },
      {
          id:'17',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
          id:'18',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      ,
      {
        id:'19',
        name:'Admin',
        gender:'male',
        age:'24',
        email:'sopha.pum@redfox.com',
        phone:'0979966777',
        position:'Manager'
      },
      {
          id:'20',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
          id:'21',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
        id:'22',
        name:'Admin',
        gender:'male',
        age:'24',
        email:'sopha.pum@redfox.com',
        phone:'0979966777',
        position:'Manager'
      },
      {
          id:'23',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
        id:'24',
        name:'Admin',
        gender:'male',
        age:'24',
        email:'sopha.pum@redfox.com',
        phone:'0979966777',
        position:'Manager'
      },
      {
          id:'25',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      },
      {
          id:'26',
          name:'Admin',
          gender:'male',
          age:'24',
          email:'sopha.pum@redfox.com',
          phone:'0979966777',
          position:'Manager'
      }
  ];