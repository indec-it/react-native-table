import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native';
import {isEmpty} from 'lodash';
import {Col, Row} from '@indec/react-native-commons';

import columnPropTypes from '../util/columnPropTypes';
import datumPropTypes from '../util/datumPropTypes';

import TableRow from './TableRow';
import TableHeader from './TableHeader';

const Table = ({
    data, columns, striped, getKey
}) => (
    <Col>
        <TableHeader columns={columns}/>
        <Row>
            <ScrollView>
                {!isEmpty(data) && data.map((datum, index) => (
                    <TableRow key={getKey(datum)} rowIndex={index} {...{striped, datum, columns}}/>
                ))}
            </ScrollView>
        </Row>
    </Col>
);

Table.propTypes = {
    columns: PropTypes.arrayOf(columnPropTypes).isRequired,
    data: PropTypes.arrayOf(datumPropTypes),
    getKey: PropTypes.func,
    striped: PropTypes.bool
};

Table.defaultProps = {
    data: [],
    getKey: datum => datum._id,
    striped: false
};

export default Table;
