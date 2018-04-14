import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native';
import {filter, isEmpty, map, sortBy} from 'lodash';
import {Col, Row} from '@indec/react-native-commons';

import columnPropType from '../util/columnPropType';
import datumPropType from '../util/datumPropType';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

const getData = (data, columns) => {
    const fields = map(filter(columns, column => column.order), item => item.field);
    return !isEmpty(fields) ? sortBy(data, fields) : data;
};

const Table = ({data, columns, striped}) => (
    <Col>
        <TableHeader columns={columns}/>
        <Row>
            <ScrollView>
                {!isEmpty(data) && getData(data, columns)
                    .map((datum, index) => (
                        <TableRow key={datum._id} striped={striped} rowIndex={index} datum={datum} columns={columns}/>
                    ))}
            </ScrollView>
        </Row>
    </Col>
);

Table.propTypes = {
    data: PropTypes.arrayOf(datumPropType).isRequired,
    columns: PropTypes.arrayOf(columnPropType).isRequired,
    striped: PropTypes.bool
};

Table.defaultProps = {
    striped: false
};

export default Table;
