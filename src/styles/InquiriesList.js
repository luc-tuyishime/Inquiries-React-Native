import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },

    raw: {
        marginBottom: 2
    },

    loading: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 250,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center"
    },

    pAddress: {
        color: "gray"
    },

    nameAddress: {
        flexDirection: "column",
        flex: 8
    },

    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#444",
        borderBottomWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#f5f5f5"
    }
});

export default styles;
