import { RouteInfo } from './sidebar.metadata'; 

console.log("sidebar working");
// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] =
    [
        {
            path: '/home', title: "Dashboard", icon:'ft-home', class: '', badge: '', badgeClass:'', hide: false, isExternalLink: false, submenu: []
        },
        {
            path: '/lead', title: 'Lead', icon: 'fas fa-book-reader', class: '', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[]
        },
        // {
        //     path: '/owner', title: 'Owner', icon: 'fas fa-hands-helping', class: '', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[]
        // },
        {
            path: '/opportunity', title: 'Opportunity', icon: 'fas fa-hands-helping', class: '', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[]
        },
        {
            path: '/company', title: 'Company', icon: 'fas fa-industry', class: '', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[]
        },
        {
            path: '/contact', title: 'Contact', icon: 'far fa-address-card', class: '', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[]
        },
        {
            path: '/product', title: 'Product', icon: 'icon-basket-loaded', class: '', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[]
        },
        {
            path: '/report', title: 'Report', icon: 'icon-screen-desktop', class: '', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[]
        },
        
        {
            path: '', title: 'Users', icon: 'ft-user', class: 'has-sub', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[
                // { path: '/users/list', title: 'Admin', icon: 'fas fa-user-cog', class: '', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[]},
                { path: '/users/roles/list', title: 'All User', icon: 'icon-users', class: '', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[]}
            ]
        },
        // {
        //     path: '/table', title: 'Table', icon: 'ft-list', class: '', badge: '', badgeClass: '', hide: false, isExternalLink: false, submenu:[]
        // },
    ];
