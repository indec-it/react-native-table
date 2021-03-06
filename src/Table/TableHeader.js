import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Col, TextStrong} from '@indec/react-native-commons';
import {composeStyles} from '@indec/react-native-commons/util';

import columnPropTypes from '../util/columnPropTypes';

import styles from './styles';

const TableHeader = ({columns}) => (
    <View style={styles.tableHeader}>
        {columns.map(column => (
            <Col key={column.id} style={composeStyles(styles.col, column.style)}>
                <TextStrong style={styles.header}>
                    {column.label}
                </TextStrong>
            </Col>
        ))}
    </View>
);

TableHeader.propTypes = {
    columns: PropTypes.arrayOf(columnPropTypes).isRequired
};

export default TableHeader;
