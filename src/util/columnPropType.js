import {Component} from 'react';
import PropTypes from 'prop-types';

const funcOrStringPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
]);

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    showValue: PropTypes.func,
    hideValue: PropTypes.func,
    componentClass: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.instanceOf(Component)
    ]),
    icon: funcOrStringPropType,
    color: funcOrStringPropType,
    style: PropTypes.shape({})
});
