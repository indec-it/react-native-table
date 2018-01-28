import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Divider} from 'react-native-elements';
import {Col, Row, TextStrong} from '@indec/react-native-commons';

import columnPropType from './columnPropType';
import styles from './styles';

const TableHeader = ({columns}) => (
    <Fragment>
        <Row style={styles.headerContainer}>
            {columns.map(column => (
                <Col key={column.id} style={[styles.col, column.style]}>
                    <TextStrong style={styles.header}>{column.label}</TextStrong>
                </Col>
            ))}
        </Row>
        <Divider style={styles.headerDivider}/>
    </Fragment>
);

TableHeader.propTypes = {
    columns: PropTypes.arrayOf(columnPropType).isRequired
};

export default TableHeader;
