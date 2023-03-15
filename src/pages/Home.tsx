import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material'
import { useState } from 'react';
import Sidebar from '../components/SideBar';

const Home = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <>
            <IconButton
                onClick={() => {
                    setOpenDrawer(true)
                }}>
                <Menu
                    sx={{
                        fontSize: "50px",
                        fontWeight: "100",
                        cursor: "pointer"
                    }}
                />
            </IconButton>
            <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
        </>
    )
}

export default Home