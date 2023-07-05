import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/Router';
import { DefaultLayout } from '~/Component/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, key) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={key}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
