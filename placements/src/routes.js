import PreviewBar from './components/previewSection/previewBar.js';
import CompList from './components/compniesHomepage/companyPage';
import Sidebar from './components/SideBar/sidebar'



export const mainRoute = [
    {
        path: "/home",
        exact: true,
        component : Sidebar
    }
    // {
    //     path: "/home",
    //     exact: true,
    //     component : PreviewBar
    // },
    // {
    //     path: "/home",
    //     exact: true,
    //     component : CompList
    // }

]