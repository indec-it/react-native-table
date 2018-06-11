import {Component} from 'react';
import PropTypes from 'prop-types';
import {stylePropType} from '@indec/react-native-commons/util';

const funcOrStringPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
]);

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string,
    field: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    onPress: PropTypes.func,
    showValue: PropTypes.func,
    hideValue: PropTypes.func,
    componentClass: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.instanceOf(Component)
    ]),
    icon: funcOrStringPropType,
    color: funcOrStringPropType,
    style: stylePropType
});
