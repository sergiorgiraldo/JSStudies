export default function StudentList(props){
    const { list } = props;

    function handleDelete(event, studentId){
        event.preventDefault();
		fetch("/api/student", {
			method: "DELETE",
			body: JSON.stringify({ student: studentId }),
			headers: {
			  "Content-Type": "application/json",
			}
		  })
		  .catch((error) => {
			console.log(error);
		  });	
    }

    return( 
        <table>
            <tbody>
            {
                list.map((i)=> (
                    <tr key={i._id}>
                        <td>{i.student}</td>
                        <td><a href={`/student/${i._id}`}>Edit</a></td>
                        <td><a onClick={(event)=>handleDelete(event, i._id)} href="#">Delete</a></td>
                    </tr>
                ))}
            </tbody>
        </table>);
}