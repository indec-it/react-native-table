/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';
import {Row} from '@indec/react-native-commons';
import {composeStyles, stylePropType} from '@indec/react-native-commons/util';

import columnPropTypes from '../util/columnPropTypes';
import datumPropTypes from '../util/datumPropTypes';

import TableCell from './TableCell';
import styles from './styles';

const hasAccentStyle = (rowIndex, striped) => striped && rowIndex % 2 === 0;

const TableRow = ({
    datum, columns, rowIndex, striped, style
}) => (
    <Row
        key={datum._id}
        style={composeStyles(styles.row, style, hasAccentStyle(rowIndex, striped) && styles.rowEven)}
        size={0.1}
    >
        {columns.map(column => (
            <TableCell key={column.id} datum={datum} column={column}/>
        ))}
    </Row>
);

TableRow.propTypes = {
    rowIndex: PropTypes.number.isRequired,
    datum: datumPropTypes.isRequired,
    columns: PropTypes.arrayOf(columnPropTypes).isRequired,
    striped: PropTypes.bool,
    style: stylePropType
};

TableRow.defaultProps = {
    striped: false,
    style: null
};

export default TableRow;
