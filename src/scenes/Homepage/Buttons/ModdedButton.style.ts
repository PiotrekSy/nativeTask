import { ModeType } from "../types";
import { StyleSheet } from "react-native";

const getStyles = ({ mode }: ModeType) => {
    return StyleSheet.create({
        background: {
            backgroundColor: mode === "outlined" ? "transparent" : "#9386E9",
            borderColor: mode === "outlined" ? "#7868E4" : " #9386E9",
            borderWidth: mode === "outlined" ? 1 : 0,
            borderRadius: 15,
            height: 45,
            margin: 5,
        },
        content: {
            flexDirection: "row",backGroundColor: 'red'
        },
        text: {
            color: "#EDEDED",
            textAlign: "center",
        },
        image: {
            height: 30,
            width: 30,
            flex: 1,
            resizeMode: "cover",
        },
        gradient: {},
    });
};

export default getStyles;
