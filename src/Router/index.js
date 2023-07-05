import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import OnlyHeader from '~/Component/Layout/OnlyHeader';
import Search from '~/pages/Search';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: OnlyHeader },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
