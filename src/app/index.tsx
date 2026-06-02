import { StyleSheet, View } from "react-native";
import ProfilePage from "../../components/Profile";

export default function Index() {
  return (
    <View style={styles.container}>
      <ProfilePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
