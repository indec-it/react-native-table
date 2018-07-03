import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native';
import {isEmpty} from 'lodash';
import {Col, Row} from '@indec/react-native-commons';

import columnPropTypes from '../util/columnPropTypes';
import datumPropTypes from '../util/datumPropTypes';

import TableRow from './TableRow';
import TableHeader from './TableHeader';

const Table = ({data, columns, striped}) => (
    <Col>
        <TableHeader columns={columns}/>
        <Row>
            <ScrollView>
                {!isEmpty(data) && data.map((datum, index) => (
                    <TableRow key={datum._id} striped={striped} rowIndex={index} datum={datum} columns={columns}/>
                ))}
            </ScrollView>
        </Row>
    </Col>
);

Table.propTypes = {
    data: PropTypes.arrayOf(datumPropTypes).isRequired,
    columns: PropTypes.arrayOf(columnPropTypes).isRequired,
    striped: PropTypes.bool
};

Table.defaultProps = {
    striped: false
};

export default Table;
