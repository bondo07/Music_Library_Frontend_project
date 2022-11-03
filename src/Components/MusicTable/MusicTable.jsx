import Table from 'react-bootstrap/Table'

const MusicTable = (props) => {



    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Title:</th>
                    <th>Artist:</th>
                    <th>Album:</th>
                    <th>Release-Date:</th>
                    <th>genre</th>
                </tr>
            </thead>
            <tbody>
                    {props.allMusic.map((songs) => {
                        return (
                            <tr>
                                <td>{songs.title}</td>
                                <td>{songs.artist}</td>
                                <td>{songs.album}</td>
                                <td>{songs.release_date}</td>
                                <tc>{songs.genre}</tc>
                            </tr>
                        )
                    })}
            </tbody>
        </Table>
    );
}
 
export default MusicTable;