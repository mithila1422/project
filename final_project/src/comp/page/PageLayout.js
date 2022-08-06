import PageNav from "../PageNav";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";


const PageLayout = () => {
    return (<>
        <CssBaseline />
        <PageNav />
        <Outlet />
    </>
    );
};

export default PageLayout;
