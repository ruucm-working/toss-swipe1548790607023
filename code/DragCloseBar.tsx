import * as React from 'react'
import { PropertyControls, ControlType, Draggable, animate } from 'framer'
import styled, { css } from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`
const StyledDraggable = styled(Draggable)`
  background: red !important;
  width: 100% !important;
  height: 100% !important;
  opacity: 0;
`

// Define type of property
interface Props {}

var dragLimit = -100
var leftSpace = 30

var isOpened = false

export class DragCloseBar extends React.Component<Props> {
  state = { left: 0, top: 0 }

  // Set default properties
  static defaultProps = {}

  // Items shown in property panel
  static propertyControls: PropertyControls = {}

  onMove = e => {
    this.setState({ left: e.x, top: e.y })

    if (e.y < 0) {
      // drag up
      if (e.y > dragLimit && !isOpened) {
        let move = leftSpace * (e.y / dragLimit)
        this.props.hangerTop.set(e.y + 675)
        this.props.hangerWidth.set(move + 345)
      } else {
        animate.ease(this.props.hangerTop, 44, {
          duration: 0.3,
        })
        this.props.hangerWidth.set(leftSpace + 345)
        animate.ease(this.props.hangerBackground, '#496DC6', {
          duration: 0.3,
        })
        animate.ease(this.props.contentWidth, 375, {
          duration: 0.3,
        })
        isOpened = true
      }
    } else {
      // drag down
      if (e.y < -dragLimit && isOpened) {
        let move = leftSpace * (e.y / dragLimit)
        this.props.hangerTop.set(e.y + 44)
        this.props.hangerWidth.set(move + 375)
      } else {
        animate.ease(this.props.hangerTop, 675, {
          duration: 0.3,
        })
        animate.ease(this.props.hangerBackground, '#5B7ED7', {
          duration: 0.3,
        })
        isOpened = false
      }
    }
  }

  render() {
    return (
      <Wrap>
        <StyledDraggable
          left={this.state.left}
          top={this.state.top}
          onMove={this.onMove}
        />
      </Wrap>
    )
  }
}
