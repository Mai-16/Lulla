import React from "react";
import { View, Text ,TouchableOpacity} from "react-native";
import tw from 'twrnc'


export default function OnBoarding({navigation}) {
  return (
    <View style={tw`flex flex-col items-center`}>
        <View style={tw` w-9/10 my-auto border mt-40`}>
        <Text style={tw`font-bold my-auto mx-auto text-3xl py-20`}>Logo here</Text>
        </View>
      <TouchableOpacity onPress={() => navigation.navigate('login')} style={tw`my-10`}>
          <View style={tw`px-7 py-3 border`}>
          <Text>Go to Login</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <View style={tw`px-7 py-3 border`}>
          <Text>Go to Signup</Text>
          </View>
      </TouchableOpacity>
    </View>
  );
}
