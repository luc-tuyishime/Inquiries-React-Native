import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "styles/InquiriesInfo";

class InquiriesInfo extends Component {
    render() {
        const place = this.props.navigation.getParam("place");
        return (
            <ScrollView style={styles.root}>
                <View style={styles.infoHeader}>
                    <View style={styles.info}>
                        <Text style={styles.textPadding}>
                            <Text style={styles.address}>Name:</Text>{" "}
                            <Text style={styles.textSize}>{place.name}</Text>
                        </Text>
                        <Text style={styles.textPadding}>
                            <Text style={styles.address}>Category Name:</Text>{" "}
                            <Text style={styles.textSize}>{place.categoryName}</Text>
                        </Text>
                        <Text style={styles.textPadding}>
                            <Text style={styles.address}>Location:</Text>{" "}
                            <Text style={styles.textSize}>{place.location}</Text>
                        </Text>
                        <Text style={styles.textPadding}>
                            <Text style={styles.address}>ClassLocPref:</Text>{" "}
                            <Text style={styles.textSize}>{place.classLocPref}</Text>
                        </Text>
                        <Text style={styles.textPadding}>
                            <Text style={styles.address}>Tel:</Text>
                            <Text style={styles.textSize}> {place.phoneNumber}</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default InquiriesInfo;
