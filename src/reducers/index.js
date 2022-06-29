

const songsReducer = ()=>{

    return [
        { title:'You are great', duration:'4:05'},
        { title:'Ancient of Days', duration:'2:00'},
        { title:'Dependable God', duration:'1:09'},
        { title:'Awesome God', duration:'1:45'}
    ]
}

const selectedSongReducer =(selectedSong=null , action)=>{

    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong


}