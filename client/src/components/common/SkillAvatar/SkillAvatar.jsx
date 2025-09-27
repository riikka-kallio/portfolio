import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

function SkillAvatar({title, alt, src}) {
    return (
        <Tooltip title={title} arrow>
            <Avatar alt={alt} src={src} className="avatar-icon" />
        </Tooltip>
    );
}

SkillAvatar.propTypes = {
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default SkillAvatar;
