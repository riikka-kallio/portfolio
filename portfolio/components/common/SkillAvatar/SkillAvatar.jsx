import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function SkillAvatar({ title, alt, src }) {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return;

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        checkMobile();
        
        const timer = setTimeout(() => {
            window.addEventListener('resize', checkMobile);
        }, 0);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // On mobile, show tooltip always
    if (isMobile) {
        return (
            <Tooltip title={title} arrow>
                <Avatar
                    alt={alt}
                    src={src}
                    sx={{ cursor: "pointer" }}
                    className="avatar-icon" />
            </Tooltip>
        );
    }

    // On desktop, use interactive tooltip
    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Tooltip
                title={title}
                arrow
                open={open}
                disableHoverListener={false}
                disableFocusListener={true}
                disableTouchListener={true}
            >
                <Avatar
                    alt={alt}
                    src={src}
                    sx={{ cursor: "pointer" }}
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    onClick={() => setOpen((prev) => !prev)}
                    className="avatar-icon" />
            </Tooltip>
        </ClickAwayListener>
    );
}

SkillAvatar.propTypes = {
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default SkillAvatar;