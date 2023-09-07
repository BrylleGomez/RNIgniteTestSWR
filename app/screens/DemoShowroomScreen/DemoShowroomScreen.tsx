import React, { FC, ReactElement } from "react"
import { ViewStyle } from "react-native"
import { Screen } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { SWRTest } from "./SWRTest"

export interface Demo {
  name: string
  description: string
  data: ReactElement[]
}

export const DemoShowroomScreen: FC<DemoTabScreenProps<"DemoShowroom">> =
  function DemoShowroomScreen(_props) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
        <SWRTest />
      </Screen>
    )
  }

const $screenContainer: ViewStyle = {
  flex: 1,
}

// @demo remove-file
