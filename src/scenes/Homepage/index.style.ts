import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    fullPage: {
        flex: 1,
        backgroundColor: '#241F44',
    },
    buttonsBackground: {
        height: '110%',
        width: '100%',
        shadowColor: '#595281',
        shadowTopOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
        zIndex: 2,
        borderRadius: 50,
        backgroundColor: '#241F44',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsList: {
        width: '95%',
        alignItems: "center",
    },
    buttonText: {
        color: 'red',
        fontWeight: 900,
        paddingBottom: 20,
        textAlign: "center",
    },
    bannerText: {
        fontSize: 11,
        color: '#EDEDED',
        margin: 5,
        fontWeight: '500',
    }
});
