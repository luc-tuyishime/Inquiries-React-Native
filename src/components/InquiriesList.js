import React, { Component } from "react";
import { View, TextInput, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

import styles from "styles/InquiriesList";
import InquiriesRow from "./InquiriesRow";
import { inquiries } from "../redux/actions/inquiries";

class InquiriesList extends Component {
    state = {
        inquiries: [],
        search: null,
        loadgin: false
    };

    componentDidMount() {
        const { inquiries } = this.props;
        inquiries();
    }

    static getDerivedStateFromProps(props) {
        return {
            inquiries: props?.listOfInquiries,
            loading: props?.loading
        };
    }

    render() {
        const { inquiries, search, loading } = this.state;
        return (
            <View>
                {loading ? (
                    <View style={styles.loading}>
                        <ActivityIndicator />
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                ) : (
                    <>
                        <TextInput
                            placeholder="Search Inquiries....."
                            style={styles.input}
                            onChangeText={(text) => {
                                this.setState({ search: text });
                            }}
                            value={search}
                        />
                        <FlatList
                            contentContainerStyle={{ paddingBottom: 50 }}
                            data={inquiries.filter((place) => {
                                return (
                                    !this.state.search ||
                                    place.name
                                        .toLowerCase()
                                        .indexOf(this.state.search.toLowerCase()) > -1
                                );
                            })}
                            renderItem={({ item, index }) => (
                                <InquiriesRow
                                    index={index}
                                    place={item}
                                    navigation={this.props.navigation}
                                />
                            )}
                        />
                    </>
                )}
            </View>
        );
    }
}

const mapStateToProps = ({
    inquiries: {
        listOfInquiries,
        fetchInquiries: { loading, message, errors }
    }
}) => ({ listOfInquiries, loading, message, errors });

export default connect(mapStateToProps, { inquiries })(InquiriesList);
