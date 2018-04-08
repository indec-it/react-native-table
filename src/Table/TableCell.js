import React from 'react';
import {Text} from 'react-native';
import {Col} from '@indec/react-native-commons';
import {at, isFunction} from 'lodash';

import columnPropType from '../util/columnPropType';
import datumPropType from '../util/datumPropType';
import styles from './styles';

const TableCell = ({datum, column}) => {
    const {componentClass: Comp, showValue, hideValue} = column;
    let visible = isFunction(showValue) ? showValue(datum) : true;
    if (isFunction(hideValue) && hideValue(datum)) {
        visible = false;
    }
    if (!visible) {
        return <Col/>;
    }
    return Comp ? (
        <Col>
            <Comp column={column} datum={datum}/>
        </Col>
    ) : (
        <Col style={[styles.col, column.style]}>
            <Text style={styles.text}>
                {isFunction(column.field) ? column.field(datum) : at(datum, column.field)}
            </Text>
        </Col>
    );
};

TableCell.propTypes = {
    datum: datumPropType.isRequired,
    column: columnPropType.isRequired
};

export default TableCell;
