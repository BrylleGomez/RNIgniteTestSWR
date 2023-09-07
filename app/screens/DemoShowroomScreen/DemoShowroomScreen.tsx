import React, { FC, ReactElement } from "react"
import { View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"

export interface Demo {
  name: string
  description: string
  data: ReactElement[]
}

export const DemoShowroomScreen: FC<DemoTabScreenProps<"DemoShowroom">> =
  function DemoShowroomScreen(_props) {
    return (
      <Screen
        preset="fixed"
        safeAreaEdges={["top"]}
        contentContainerStyle={$screenContainer}
      ></Screen>
    )
  }

const $screenContainer: ViewStyle = {
  flex: 1,
}

// @demo remove-file
