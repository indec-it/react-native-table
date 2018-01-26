import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, TextStrong} from '@indec/react-native-commons';

import columnPropType from './columnPropType';
import styles from './styles';

const TableHeader = ({columns}) => (
    <Row>
        {columns.map(column => (
            <Col key={column.id} style={[styles.col, column.style]}>
                <TextStrong style={styles.header}>{column.label}</TextStrong>
            </Col>
        ))}
    </Row>
);

TableHeader.propTypes = {
    columns: PropTypes.arrayOf(columnPropType).isRequired
};

export default TableHeader;
