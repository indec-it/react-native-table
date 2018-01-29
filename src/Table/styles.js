import {StyleSheet} from 'react-native';

const divider = {
    flex: 1,
    marginTop: 3,
    marginRight: 10,
    marginBottom: 3,
    marginLeft: 10
};

export default StyleSheet.create({
    row: {
        marginTop: 20
    },
    col: {
        paddingLeft: 20
    },
    headerContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    rowDivider: {
        ...divider,
        backgroundColor: '#dcdcdc'
    },
    headerDivider: {
        ...divider,
        backgroundColor: '#0e516e'
    }
});
