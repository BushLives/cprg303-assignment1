import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.HeaderText}>Group Profile</Text>
          <Text style={styles.subtext}>ootd_everyday</Text>
        </View>
      </View>
      <View>
        <View style={styles.pfp}>
          <View style={styles.circleBorder}>
            <View style={styles.circlePFP}>
              <Text>{"OO\nTD"}</Text>

              <Image></Image>
            </View>
          </View>
          <View>
            <Text>100</Text>
            <Text>Post</Text>
          </View>
          <View>
            <Text>100</Text>
            <Text>Members</Text>
          </View>
          <View>
            <Text>100</Text>
            <Text>Admins</Text>
          </View>
        </View>
        <Text>OODT Everyday</Text>
        <Text>Fit Check!</Text>
        <Text>You know we'll hype you up.</Text>
      </View>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: 10,
  },
  HeaderText: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  subtext: {
    fontSize: 10,
    textAlign: "center",
    color: "gray",
    justifyContent: "center",
  },
  circlePFP: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: "#3498db",
  },
  circleBorder: {
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    height: 55,
    borderRadius: 100 / 2,
    backgroundColor: "white",
    borderWidth: 1.5,
  },
  pfp: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    textAlignVertical: "auto",
    padding: 12,
  },
});
