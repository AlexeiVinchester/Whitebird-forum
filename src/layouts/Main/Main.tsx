import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { LoginPage } from '../../pages/LoginPage/LoginPage';

const Main = () => {
    return (
        <main className="min-h-[calc(100vh-160px)]">
            <Container maxWidth='md' className="mb-8 !py-8 rounded-xl h-full" >
                <LoginPage />
            </Container>
        </main>
    );
};

export { Main }; 
