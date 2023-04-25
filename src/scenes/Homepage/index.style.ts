import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    buttonsBackground: {
        width: "100%",
        height: '50%',
        shadowColor: '#595281',
        shadowTopOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
        zIndex: 2,
        borderRadius: 40,
        backgroundColor: '#241F44',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonsList: {
        width: '100%',
        // borderWidth: 1,
        display: 'flex',
        alignItems: 'center'
    },
    flatList: {
        width: '100%',
    },
    buttonText: {
        width: '100%',
        fontWeight: 900,
        paddingBottom: 20,
        textAlign: "center",
    },
    bannerText: {
        fontSize: 11,
        color: '#EDEDED',
        margin: 20,
        fontWeight: '500',
    }
});
