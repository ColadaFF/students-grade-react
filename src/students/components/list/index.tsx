import React from "react";
import { listStudents, StudentList } from "../../api";

function StudentsList() {
  const [list, setList] = React.useState<StudentList>({
    items: [],
  });

  React.useEffect(() => {
    listStudents({}).then((studentList) => setList(studentList));
  }, []);

  return (
    <div>
      <h1>Students List</h1>
      <pre>
        <code>{JSON.stringify(list, null, 3)}</code>
      </pre>
    </div>
  );
}

export default StudentsList;
