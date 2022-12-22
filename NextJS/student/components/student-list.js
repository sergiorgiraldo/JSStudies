import styles from "../styles/Home.module.css";
export default function StudentList(props){
    const { list } = props;

    return( 
        <table>
            <tbody>
            {
                list.map((i)=> (
                    <tr key={i._id}>
                        <td>{i.student}</td>
                        <td><a href={`/student/edit/${i._id}`}>Edit</a></td>
                        <td><a href={`/student/delete/${i._id}`}>Delete</a></td>
                    </tr>
                ))}
            </tbody>
        </table>);
}