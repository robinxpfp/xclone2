"use client"
import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '@/db/index';

export default function Home() {
  const [users, setUsers] = useState<{ id: number; name: string; age: number; email: string; }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAllUsers();
        setUsers(result);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}