import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <main className="min-h-[calc(100vh-160px)]">
            <Container maxWidth='md' className="my-8 py-4 rounded-xl">
                <Outlet />
            </Container>
        </main>
    );
};

export { Main }; 
