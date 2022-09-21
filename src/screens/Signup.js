import React from "react";
import { View, Text ,TouchableOpacity} from "react-native";
import tw from 'twrnc'
export default function Signup({navigation}) {
  return (
    <View style={tw`mx-auto my-auto`}>
      <Text>Signup</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
