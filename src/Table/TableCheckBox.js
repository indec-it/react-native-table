/* eslint-disable react/no-typos */
import React from 'react';
import {CheckBox} from 'react-native-elements';

import columnPropType from './columnPropType';
import datumPropType from './datumPropType';

const TableCheckBox = ({column, datum}) => (
    <CheckBox
        iconRight
        checked={datum.checked ? datum.checked : false}
        onPress={() => column.onPress(datum)}
    />
);

TableCheckBox.propTypes = {
    column: columnPropType.isRequired,
    datum: datumPropType.isRequired
};

export default TableCheckBox;
