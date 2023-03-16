import { Player } from '@lottiefiles/react-lottie-player';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useRef, } from 'react'

interface SideBarProps {
    openDrawer: boolean,
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const listItem = [
    {
        label: "Home",
        icon: "homeDark",
    },
    {
        label: "About me",
        icon: "avatarDark",
    },
    {
        label: "Expertise",
        icon: "skillsDark",
    },
    {
        label: "Contact me",
        icon: "contactMeDark",
    }
]

const iconStyles = {
    height: "40px",
}

const Sidebar = ({ openDrawer, setOpenDrawer }: SideBarProps) => {
    const icons = useRef<Player[]>([])

    const closeDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
        setOpenDrawer(false);
        listItem.map((item, index) => {
            icons.current[index].stop()
        })
    };


    const addIcon = (element: Player) => {
        icons.current.push(element);
    };

    const changeStatusOfIcon = (index: number, order: "play" | "stop") => {
        if (order == "play") {
            icons.current[index].play()
        } else {
            icons.current[index].stop()
        }
    }

    return (
        <>

            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={closeDrawer()}
            >

                <List disablePadding sx={{backgroundColor:"primary.dark" , height : "100%"}}>
                    <ListItem sx={{ padding: "10px" }}  >
                        <img src="/src/assets/images/profile.png" style={{
                            width : "220px",
                            height : "220px",
                        }}/>
                    </ListItem>
                    {listItem.map((item, index) => (
                        <ListItem sx={{ padding: 0 }} key={index}
                            onMouseOver={() => {
                                changeStatusOfIcon(index, "play")
                            }}
                            onClick={closeDrawer()}
                        >
                            <ListItemButton sx={{ padding: "25px 35px" }}  >
                                <ListItemIcon>
                                    <Player                                    
                                        src={`/src/assets/lottie/${item.icon}.json`}
                                        style={iconStyles}
                                        keepLastFrame
                                        ref={addIcon}
                                        onEvent={(event) => {
                                            if (event == "complete") {
                                                changeStatusOfIcon(index, "stop")
                                            }
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}

                </List>
            </Drawer>
        </>
    )

}

export default Sidebar