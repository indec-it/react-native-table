import PropTypes from 'prop-types';

export default PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
});
