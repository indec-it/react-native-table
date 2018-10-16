/* eslint-disable react/no-typos */
import React from 'react';
import {Icon} from 'react-native-elements';
import {getFontAwesome} from '@indec/react-native-commons/util';
import {isFunction} from 'lodash';

import columnPropTypes from '../util/columnPropTypes';
import datumPropTypes from '../util/datumPropTypes';

const TableIcon = ({column, datum}) => (
    <Icon
        reverse
        raised
        {...getFontAwesome(
            isFunction(column.icon) ? column.icon(datum) : column.icon,
            isFunction(column.color) ? column.color(datum) : column.color,
            column.size
        )}
        onPress={isFunction(column.onPress) ? (() => column.onPress(datum)) : undefined}
    />
);

TableIcon.propTypes = {
    column: columnPropTypes.isRequired,
    datum: datumPropTypes.isRequired
};

export default TableIcon;
