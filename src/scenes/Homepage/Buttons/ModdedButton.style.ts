import { ModeType } from "../types";
import { StyleSheet } from "react-native";

const getStyles = ({ mode }: ModeType) => {
    return StyleSheet.create({
        background: {
            backgroundColor: mode === "outlined" ? "transparent" : mode === "filled" ? "#9386E9" : 'grey',
            borderColor: mode === "outlined" ? "#7868E4" : mode === "filled" ? "#9386E9" : 'white',
            borderWidth: mode === "outlined" ? 1 : mode === "outlined" ? 0 : 1,
            borderRadius: 15,
            height: mode === "outlined" ? 42 : mode === "filled" ? 50 : 42,
            marginTop: 5,
            width: 350,
        },
        content: {
            height: '100%',
            width: '100%',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            fontSize: mode === "outlined" ? 13 : 17,
            color: "#EDEDED",
            textAlign: "center",
            fontWeight: '700',
            opacity: mode === "outlined" ? 0.7 : 1,
        },
        image: {
            position: 'absolute',
            left: 10,
            height: 40,
            width: 40,
            flex: 1,
            resizeMode: "cover",
        },
    });
};

export default getStyles;
