import { useEffect, useState } from "react";
import { IUser } from "../helpers/types";
import { getAllUsers, deleteUser } from "../helpers/api";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getAllUsers().then((response) => {
      console.log(response)
      setUsers(response);
    });
  }, []);

  const handleDelete = (id: number) => {
    console.log(id)
    deleteUser(id).then(() => {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <div className="flex justify-center items-center w-16 h-16 bg-blue-500 text-white font-bold rounded-full text-xl mb-4">
              {user.name[0].toUpperCase()}
              {user.surname[0].toUpperCase()}
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-800">
                {user.name} {user.surname}
              </h2>
              <p className="text-gray-600">Age: {user.age}</p>
              <p className="text-gray-600">Salary: ${user.salary.toLocaleString()}</p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  to={"/users/edit/" + user.id}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <Link
                  to={`/users/details/${ user.id}`}
                  className="text-green-500 hover:underline"
                >
                  Details
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
