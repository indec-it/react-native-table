/* eslint-disable react/no-typos */
import React from 'react';
import {Icon} from 'react-native-elements';
import {getFontAwesome} from '@indec/react-native-commons';

import columnPropType from './columnPropType';
import datumPropType from './datumPropType';

const TableIcon = ({column, datum}) => (
    <Icon
        containerStyle={column.style}
        raised
        {...getFontAwesome(column.icon, column.color)}
        onPress={() => column.onPress(datum)}
    />
);

TableIcon.propTypes = {
    column: columnPropType.isRequired,
    datum: datumPropType.isRequired
};

export default TableIcon;
