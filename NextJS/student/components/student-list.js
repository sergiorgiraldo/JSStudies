import styles from "../styles/Home.module.css";
export default function StudentList(props){
    const { list } = props;

    return( 
        <table>
            {
            list.map((i)=> (
                <tr>
                    <td>{i.name}</td>
                    <td><a href={`/student/edit/${i.id}`}>Edit</a></td>
                    <td><a href={`/student/delete/${i.id}`}>Delete</a></td>
                </tr>
            ))}
        </table>);
}