/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';
import {Row} from '@indec/react-native-commons';

import columnPropType from './columnPropType';
import TableCell from './TableCell';
import datumPropType from './datumPropType';
import styles from './styles';

const TableRow = ({datum, columns}) => (
    <Row key={datum._id} style={styles.row}>
        {columns.map(column => (
            <TableCell key={column.id} datum={datum} column={column}/>
        ))}
    </Row>
);

TableRow.propTypes = {
    datum: datumPropType.isRequired,
    columns: PropTypes.arrayOf(columnPropType).isRequired
};

export default TableRow;
