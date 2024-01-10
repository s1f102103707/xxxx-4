import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const fetchedUsers = await apiClient.api.public.users.$get().catch(returnNull);

    if (fetchedUsers) setUsers(fetchedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <h1>ユーザー一覧</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
