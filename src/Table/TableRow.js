/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';
import {Row} from '@indec/react-native-commons';

import columnPropType from '../util/columnPropType';
import TableCell from './TableCell';
import datumPropType from '../util/datumPropType';
import styles from './styles';

const hasAccentStyle = (rowIndex, striped) => striped && rowIndex % 2 === 0;

const TableRow = ({
    datum, columns, rowIndex, striped
}) => (
    <Row key={datum._id} style={[styles.row, hasAccentStyle(rowIndex, striped) && styles.rowEven]} size={0.1}>
        {columns.map(column => (
            <TableCell key={column.id} datum={datum} column={column}/>
        ))}
    </Row>
);

TableRow.propTypes = {
    rowIndex: PropTypes.number.isRequired,
    datum: datumPropType.isRequired,
    columns: PropTypes.arrayOf(columnPropType).isRequired,
    striped: PropTypes.bool
};

TableRow.defaultProps = {
    striped: false
};

export default TableRow;
