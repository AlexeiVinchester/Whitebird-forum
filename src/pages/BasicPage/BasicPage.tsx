import { Outlet } from "react-router-dom"

const BasicPage = () => {
    return (
        <>
            <header>Header</header>
            <main>
                <Outlet />
            </main>
            <footer>
                
            </footer>
        </>
    );
};

export { BasicPage };
