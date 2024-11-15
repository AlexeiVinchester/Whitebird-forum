import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <main className="min-h-[calc(100vh-160px)]">
            <Container maxWidth='md' className="mb-8 !py-8 rounded-xl h-full" >
                <Outlet />
            </Container>
        </main>
    );
};

export { Main }; 
