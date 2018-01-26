import React from 'react';
import {Text} from 'react-native';
import {Col} from '@indec/react-native-commons';
import {at} from 'lodash';

import columnPropType from './columnPropType';
import datumPropType from './datumPropType';
import styles from './styles';

const TableCell = ({datum, column}) => {
    const {componentClass: Comp} = column;
    return Comp ? (
        <Col>
            <Comp column={column} datum={datum}/>
        </Col>
    ) : (
        <Col style={[styles.col, column.style]}>
            <Text style={styles.text}>
                {at(datum, column.field)}
            </Text>
        </Col>
    );
};

TableCell.propTypes = {
    datum: datumPropType.isRequired,
    column: columnPropType.isRequired
};

export default TableCell;
