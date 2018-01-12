import {Component} from 'react';
import PropTypes from 'prop-types';

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    componentClass: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.instanceOf(Component)
    ]),
    icon: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.shape({})
});
