import { ActivityIndicator } from "react-native";

import { View, Text } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <ActivityIndicator className="flex-1 bg-gray-900 items-center justify-center"/>
  )
}