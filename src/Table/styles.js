import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    row: {
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dcddde'
    },
    col: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    tableHeader: {
        marginTop: 30,
        flex: 0.08,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#b1b4b5',
        backgroundColor: '#dee2e3'
    },
    rowEven: {
        backgroundColor: '#f4f4f4'
    }
});
