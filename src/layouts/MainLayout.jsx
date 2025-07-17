import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-light text-dark">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
