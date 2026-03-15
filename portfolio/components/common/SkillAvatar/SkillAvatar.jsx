import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useMediaQuery } from '@mui/material';

function SkillAvatar({ title, alt, src }) {
    const [open, setOpen] = useState(false);
    const [isMobileState, setIsMobileState] = useState(false);
    const isMobile = useMediaQuery('(max-width: 640px)');

    useEffect(() => {
        setIsMobileState(isMobile);
    }, [isMobile]);

    return (
        <ClickAwayListener onClickAway={() => !isMobileState && setOpen(false)}>
            <Tooltip
                title={title}
                arrow
                open={isMobileState || open}
                disableHoverListener={isMobileState}
                disableFocusListener={isMobileState}
                disableTouchListener={isMobileState}
            >
                <Avatar
                    alt={alt}
                    src={src}
                    sx={{ cursor: "pointer" }}
                    onMouseEnter={() => !isMobileState && setOpen(true)}
                    onMouseLeave={() => !isMobileState && setOpen(false)}
                    onClick={() => !isMobileState && setOpen((prev) => !prev)}
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