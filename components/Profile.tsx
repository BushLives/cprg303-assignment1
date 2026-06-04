import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
const posts = [
  require("../assets/images/imagesirl/img1.jpg"),
  require("../assets/images/imagesirl/img2.jpg"),
  require("../assets/images/imagesirl/img3.jpg"),
  require("../assets/images/imagesirl/img4.jpg"),
  require("../assets/images/imagesirl/img5.jpg"),
  require("../assets/images/imagesirl/img6.jpg"),
  require("../assets/images/imagesirl/img7.jpg"),
  require("../assets/images/imagesirl/img8.jpg"),
  require("../assets/images/imagesirl/img9.jpg"),
  require("../assets/images/imagesirl/img10.jpg"),
  require("../assets/images/imagesirl/img11.jpg"),
];
const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <button style={styles.Back_button}></button>
        <View>
          <Text style={styles.HeaderText}>Group Profile</Text>
          <Text style={styles.subtext}>ootd_everyday</Text>
        </View>
        <button style={styles.Add_postButton}></button>
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
            <Text style={styles.StatNUM_text}>100</Text>
            <Text style={styles.Stat_text}>Post</Text>
          </View>
          <View>
            <Text style={styles.StatNUM_text}>100</Text>
            <Text style={styles.Stat_text}>Members</Text>
          </View>
          <View>
            <Text style={styles.StatNUM_text}>100</Text>
            <Text style={styles.Stat_text}>Admins</Text>
          </View>
        </View>
        <Text style={styles.BioTitle_text}>OODT Everyday</Text>
        <Text style={styles.Bio_text}>
          {"Fit Check!\nYou know we'll hype you up."}
        </Text>
        <Text></Text>

        <button style={styles.Member_button}>Members</button>
      </View>

      <View style={styles.Post_images}>
        {posts.map((img, index) => (
          <Image key={index} source={img} style={styles.grid_post} />
        ))}
      </View>
    </ScrollView>
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
    fontSize: 12,
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
  Stat_text: {
    alignSelf: "center",
    fontSize: 12,
    fontWeight: "semibold",
    color: "gray",
  },
  StatNUM_text: {
    fontSize: 12,
    alignSelf: "center",
    fontWeight: "bold",
  },
  BioTitle_text: {
    marginTop: -10,
    marginBottom: -10,
    fontSize: 11,
    padding: 10,
    fontWeight: "bold",
  },
  Bio_text: {
    marginTop: -10,
    fontSize: 11,
    padding: 10,
  },

  Member_button: {
    margin: 5,
    alignSelf: "center",
    height: 22,
    width: 225,
    fontWeight: "semibold",
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 2.5,
  },
  Back_button: {
    backgroundColor: "white",
    marginRight: 60,
    height: 30,
    width: 30,
    borderWidth: 0,
  },
  Add_postButton: {
    backgroundColor: "white",
    marginLeft: 60,
    height: 30,
    width: 30,
    borderWidth: 0,
  },
  Post_images: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 5,
    gap: 2,
  },

  grid_post: {
    height: 120,
    width: 105,
    justifyContent: "center",
    aspectRatio: 0.5,
    resizeMode: "cover",
  },
});
