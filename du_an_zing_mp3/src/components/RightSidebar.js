import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

const RightSidebar = () => {
    const [open, setOpen] = useState(false);
    const [a, setA] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const m1 = () => {
        setA(true)
    }

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer autoFocus={false} title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export default RightSidebar;
