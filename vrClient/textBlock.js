import React from 'react'
import {
  asset,
  Text,
  View
} from 'react-vr'

const TextBlock = (props)  => {
  const tooltip = props.tooltip
  const PPM = props.pixelsPerMeter
  const fontSize = {
    attrib: 0.05 * PPM,
    text: 0.1 * PPM,
    title: 0.15 * PPM,
  }
  return (
    <View
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 0.1 * PPM
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: fontSize.title,
          width: tooltip.width * PPM,
        }}>
        {tooltip.title}
      </Text>
      {tooltip.title &&
        <View
          style={{
            backgroundColor: '#777879',
            height: 0.01 * PPM,
            width: tooltip.width * PPM,
          }}
        />}
      <Text
        style={{
          color: 'white',
          fontSize: fontSize.text,
          width: tooltip.width * PPM,
        }}>
        {tooltip.text}
      </Text>
    </View>
  )
}

export default TextBlock
