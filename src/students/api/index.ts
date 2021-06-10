export type Student = {
  name: string;
  lastName: string;
  identificationType: string;
  identificationNumber: string;
};

export type StudentList = {
  items: Student[];
};

type ListArgs = {
  limit?: number;
  skip?: number;
};
function listStudents(args: ListArgs): Promise<StudentList> {
  return fetch("http://localhost:8080/students", {
    method: "GET",
  }).then((response) => response.json());
}

type CreateStudentResponse = {
  student: Student;
};

type CreateStudentArgs = {
  idNumber: string;
  idType: string;
  name: string;
  lastName: string;
};
function createStudent(
  args: CreateStudentArgs
): Promise<CreateStudentResponse> {
  return fetch("http://localhost:8080/students", {
    method: "POST",
    body: JSON.stringify(args),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export { listStudents, createStudent };
