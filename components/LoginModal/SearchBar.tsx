import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome6, Fontisto } from '@expo/vector-icons'

const SearchBarComp = () => {
  return (
    <View className="border mt-4 bg-white border-zinc-300 rounded-xl p-4 mx-4 flex flex-row items-center justify-between">
    <TextInput
      placeholder="Search for food, restaurants"
      className="text-zinc-500 w-60 text-base"
    />
    <View className="flex flex-row items-center space-x-3">
      <TouchableOpacity>
        <Fontisto name="search" size={20} color="#6d7072" />
      </TouchableOpacity>
      <View className="h-[20px] w-[1px] bg-[#cccccc]"></View>
      <TouchableOpacity>
        <FontAwesome6 name="microphone" size={20} color="#fc801a" />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default SearchBarComp