import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useMediaQuery } from '@mui/material';

function SkillAvatar({ title, alt, src }) {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 640px)');

    return (
        <ClickAwayListener onClickAway={() => !isMobile && setOpen(false)}>
            <Tooltip
                title={title}
                arrow
                open={isMobile || open}
                disableHoverListener={isMobile}
                disableFocusListener={isMobile}
                disableTouchListener={isMobile}
            >
                <Avatar
                    alt={alt}
                    src={src}
                    sx={{ cursor: "pointer" }}
                    onMouseEnter={() => !isMobile && setOpen(true)}
                    onMouseLeave={() => !isMobile && setOpen(false)}
                    onClick={() => !isMobile && setOpen((prev) => !prev)}
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