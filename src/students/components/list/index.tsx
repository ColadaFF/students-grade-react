import React from "react";
import { listStudents, StudentList, Student } from "../../api";

function StudentsList() {
  const [list, setList] = React.useState<StudentList>({
    items: [],
  });

  React.useEffect(() => {
    listStudents({}).then((studentList) => setList(studentList));
  }, []);

  function createStudentRow(student: Student) {
    const { identificationNumber, identificationType, name, lastName } =
      student;
    return (
      <tr key={identificationNumber}>
        <td>{identificationNumber}</td>
        <td>{identificationType}</td>
        <td>{name}</td>
        <td>{lastName}</td>
      </tr>
    );
  }

  const studentsList = list.items.map((student) => createStudentRow(student));

  return (
    <div>
      <h1>Students List</h1>
      <table>
        <tbody>{studentsList}</tbody>
      </table>
    </div>
  );
}

export default StudentsList;
