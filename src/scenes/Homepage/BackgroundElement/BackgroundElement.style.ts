import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        width: "100%",
        minHeight: "55%",
        margin: 0,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greeting: {
        color: "#EDEDED",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 17
    },
    image: {
        top: 0,
        width: "110%",
        height: "110%",
        flex: 1,
        resizeMode: "cover",
        position: "absolute",
        zIndex: -1,
    },
});


