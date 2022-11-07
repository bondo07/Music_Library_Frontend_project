import './MusicTable.css'

const MusicTable = (props) => {

    return (
        <table className='table_style'>
            <thead>
                <tr>
                    <th>Title:</th>
                    <th>Artist:</th>
                    <th>Album:</th>
                    <th>Release-Date:</th>
                    <th>Genre:</th>
                </tr>
            </thead>
            <tbody>
                    {props.allMusic.map((songs) => {
                        return (
                            <tr key={songs.id}>
                                <td>{songs.title}</td>
                                <td>{songs.artist}</td>
                                <td>{songs.album}</td>
                                <td>{songs.release_date}</td>
                                <td>{songs.genre}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    );
}
 
export default MusicTable;