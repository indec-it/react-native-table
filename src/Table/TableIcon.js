/* eslint-disable react/no-typos */
import React from 'react';
import {Icon} from 'react-native-elements';
import {getFontAwesome} from '@indec/react-native-commons/util';
import {isFunction} from 'lodash';

import columnPropType from './columnPropType';
import datumPropType from './datumPropType';

const TableIcon = ({column, datum}) => (
    <Icon
        containerStyle={column.style}
        raised
        {...getFontAwesome(
            isFunction(column.icon) ? column.icon(datum) : column.icon,
            isFunction(column.color) ? column.color(datum) : column.color
        )}
        onPress={() => column.onPress(datum)}
    />
);

TableIcon.propTypes = {
    column: columnPropType.isRequired,
    datum: datumPropType.isRequired
};

export default TableIcon;
