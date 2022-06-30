import React from 'react'
import {connect} from 'react-redux'

function SongDetail(props) {
    console.log(props)
  return (
    <div>SongDetail</div>
  )
}

const mapStateToProps =(state)=>{

    
    return {mySelectedSong : state.selectedSong}
    
}
export default connect(mapStateToProps)(SongDetail);