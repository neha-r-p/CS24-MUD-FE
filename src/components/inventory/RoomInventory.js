import React, { useState } from 'react'
import Item from './Item'
//styles
import makeStyles from '@material-ui/core/styles/makeStyles'
//store
import { connect } from 'react-redux'


const useStyles = makeStyles({
  root: {
    color: '#FFF',
    backgroundColor: '#B89090',
    minWidth: '200px',
    height: '175px'
  },
  itemBoxes: {
    display: 'flex',
    margin: '10px',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  itemBox: {
    display: 'flex',
    width: '46px',
    height: '46px',
    backgroundColor: '#382727',
    margin: '3px',
    border: '1px solid #92734F'
  }
})

const RoomInventory = props => {
  const classes = useStyles()

  const [roomItems, setRoomItems] = useState(props.roomItems)
  const numOfItems = roomItems.length - 1
  const emptyItems = new Array(9 - numOfItems).fill(null)

  const completeRoomItems = roomItems.concat(emptyItems)

  return (
    <div className={classes.root}>
      <h3>CURRENT ROOM</h3>
      <div className={classes.itemBoxes}>
        {completeRoomItems.map(item =>
          item ? (
            <Item key={item.item_id} item={item} />
          ) : (
            <div className={classes.itemBox}></div>
          )
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        roomItems: state.inventory.roomItems
    }
}

export default connect(mapStateToProps)(RoomInventory)

// const dummyItems = [
//     {
//       item_id: 3,
//       item_name: 'banana',
//       item_description: 'ripe',
//       has_player: 0,
//       in_room: 1
//     },
//     {
//       item_id: 4,
//       item_name: 'orange',
//       item_description: 'blood',
//       has_player: 0,
//       in_room: 1
//     }
//   ]
  