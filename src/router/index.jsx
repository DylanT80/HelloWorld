import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages';
import { HomeLayout } from '../layout';

const Router = () => {
    return (
        <BrowserRouter basename='/HelloWorld'>
            <Routes>
                <Route path='/' element={<HomeLayout />}>
                    <Route path='/' element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;