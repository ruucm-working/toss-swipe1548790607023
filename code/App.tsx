import { Data, animate, Override, Animatable } from 'framer'

const data = Data({
  hangerTop: Animatable(675),
  hangerWidth: Animatable(345),
  hangerBackground: Animatable('#5B7ED7'),
  contentWidth: Animatable(345),
})

export const Hanger: Override = () => {
  return {
    top: data.hangerTop,
    width: data.hangerWidth,
    background: data.hangerBackground,
  }
}
export const Content: Override = () => {
  return {
    width: data.hangerWidth,
  }
}

export const DragCloseBar: Override = props => {
  return {
    hangerTop: data.hangerTop,
    hangerWidth: data.hangerWidth,
    hangerBackground: data.hangerBackground,
    contentWidth: data.contentWidth,
  }
}
