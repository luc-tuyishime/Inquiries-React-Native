import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    pAddress: {
        color: "gray"
    },

    bgColor: {
        backgroundColor: "#fff",
        paddingBottom: 20,
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#ddd"
    },

    row: {
        flexDirection: "row"
    },

    nameText: {
        marginTop: 5
    },

    edges: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 70
    },

    textDate: {
        color: "#9e9e9e",
        fontSize: 13,
        position: "relative",
        bottom: 5
    },

    nameAddress: {
        flexDirection: "column",
        flex: 8
    },
    button: {
        borderWidth: 1,
        borderColor: "#0066cc",
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: "#fff"
    },

    buttonText: {
        color: "#0066cc",
        fontSize: 12
    },
    info: {
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderWidth: 10,
        borderColor: "#ddd",
        borderRadius: 4
    }
});
