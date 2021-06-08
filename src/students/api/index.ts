type Student = {
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

export { listStudents };
