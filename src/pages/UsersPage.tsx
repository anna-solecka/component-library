import React, { useState, useEffect } from "react";
import {
  CardNavigationItem,
  CardNavigationGroup,
} from "../components/CardNavigation";
import LayoutComponent from "../components/LayoutComponent";

interface User {
  id: number;
  name: string;
  email: string;
  bio: string;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <LayoutComponent>
      <div className="ds_wrapper">
        <CardNavigationGroup>
          {users.map((user) => (
            <CardNavigationItem
              key={user.id}
              title={user.name}
              summary={user.bio}
              href={`/users/${user.id}`}
            />
          ))}
        </CardNavigationGroup>
      </div>
    </LayoutComponent>
  );
};

export default UsersPage;
