import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const RF = percent => {
    const deviceHeight = height - StatusBar.currentHeight;
    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
};

export default StyleSheet.create({
    row: {
        borderBottomWidth: 1,
        borderBottomColor: '#dcddde'
    },
    col: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    },
    tableHeader: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#666',
        backgroundColor: '#e6e6e6'
    },
    rowEven: {
        backgroundColor: '#f4f4f4'
    },
    rfFontTable: {
        fontSize: RF(3.2)
    }
});
