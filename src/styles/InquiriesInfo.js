import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff"
    },
    infoHeader: {
        flexDirection: "row",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto"
    },

    textSize: {
        fontSize: 15
    },

    textPadding: {
        marginBottom: 10
    },
    info: {
        marginTop: 20,
        padding: 14,
        flex: 1,
        justifyContent: "center"
    },
    name: {
        fontSize: 24
    },
    address: {
        color: "grey",
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    button: {
        borderWidth: 1,
        borderColor: "#0066cc",
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: "#fff",
        marginTop: 10
    },
    buttonText: {
        color: "#0066cc",
        fontSize: 12,
        textAlign: "center"
    }
});

export default styles;
