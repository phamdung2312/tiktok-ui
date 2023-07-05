import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import OnlyHeader from '~/Component/Layout/OnlyHeader';
import Search from '~/pages/Search';
import routerConfig from '~/config/router';
const publicRoutes = [
    { path: routerConfig.home, component: Home },
    { path: routerConfig.following, component: Following },
    { path: routerConfig.profile, component: Profile },
    { path: routerConfig.upload, component: Upload, layout: OnlyHeader },
    { path: routerConfig.search, component: Search, layout: null },
];
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
