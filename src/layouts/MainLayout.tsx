import React, { useState } from 'react';

interface LayoutProps {
    children: typeof React.Children | JSX.Element;
}

const MainLayout = (props: LayoutProps) => {

    return (
            <>
                {props.children}
            </>
    );
};

export default MainLayout;
