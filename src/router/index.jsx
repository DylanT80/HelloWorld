import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, TtR } from '../pages';
import { HomeLayout } from '../layout';

const Router = () => {
    return (
        <BrowserRouter basename='/HelloWorld'>
            <Routes>
                <Route path='/' element={<HomeLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path="/things-to-read" element={<TtR />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;