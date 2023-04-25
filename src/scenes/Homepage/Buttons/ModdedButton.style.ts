import { ModeType } from "../types";
import { StyleSheet } from "react-native";

const getStyles = ({ mode }: ModeType) => {
    return StyleSheet.create({
        background: {
            backgroundColor: mode === "outlined" ? "transparent" : "#9386E9",
            borderColor: mode === "outlined" ? "#7868E4" : " #9386E9",
            borderWidth: mode === "outlined" ? 1 : 0,
            borderRadius: 15,
            height: 42,
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
