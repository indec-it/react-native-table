/* eslint-disable react/no-typos */
import React from 'react';
import {CheckBox} from 'react-native-elements';

import columnPropTypes from '../util/columnPropTypes';
import datumPropTypes from '../util/datumPropTypes';

const TableCheckBox = ({column, datum}) => (
    <CheckBox
        iconRight
        checked={datum.checked ? datum.checked : false}
        onPress={() => column.onPress(datum)}
    />
);

TableCheckBox.propTypes = {
    column: columnPropTypes.isRequired,
    datum: datumPropTypes.isRequired
};

export default TableCheckBox;
