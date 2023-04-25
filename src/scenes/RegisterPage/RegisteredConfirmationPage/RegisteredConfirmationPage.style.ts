import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7868E4',
        height: 100,
        width: 100,
        borderRadius: 300,
        position: 'relative',
        marginTop: 30
    },
    succesMsg: {
        fontSize: 20,
        textAlign: 'left',
        width: '90%',
        color: '#EDEDED',
        fontWeight: "600"
    },
    serverMsg: {
        margin: 10,
        fontSize: 18,
        textAlign: 'left',
        width: '90%',
        color: '#d6a663',
        fontWeight: "900"
    },
});