import { connect } from 'react-redux';
import React from 'react'

function SongDetail({ song }) {
  if (!song) {
    return <div>Select a song!</div>;
  }
  return (
    <div>{song.title}</div>
  )
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong} 
};

export default connect(mapStateToProps)(SongDetail);