import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native';
import {isEmpty} from 'lodash';
import {Col, Row} from '@indec/react-native-commons';

import columnPropType from '../util/columnPropType';
import datumPropType from '../util/datumPropType';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

const Table = ({data, columns}) => (
    <Col>
        <TableHeader columns={columns}/>
        <Row>
            <ScrollView>
                {!isEmpty(data) && data.map(datum => (
                    <TableRow key={datum._id} datum={datum} columns={columns}/>
                ))}
            </ScrollView>
        </Row>
    </Col>
);

Table.propTypes = {
    columns: PropTypes.arrayOf(columnPropType).isRequired,
    data: PropTypes.arrayOf(datumPropType).isRequired
};

export default Table;
