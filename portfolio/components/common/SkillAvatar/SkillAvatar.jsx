import { useState } from "react";
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function SkillAvatar({title, alt, src}) {
    const [open, setOpen] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Tooltip
            title={title}
            arrow
            open={open}
            disableHoverListener
            disableFocusListener
            disableTouchListener
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