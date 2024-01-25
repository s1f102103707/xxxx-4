import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { returnNull } from 'src/utils/returnNull';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const fetchedTasks = await apiClient.api.public.tasks.$get().catch(returnNull);

    if (fetchedTasks) setTasks(fetchedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    const newTask = {
      title: "データベース設計",
      content: "イベント、ユーザー、カレンダー、招待などのエンティティに関するデータベーススキーマを設計します。正規化を行い、必要なインデックスを設定してパフォーマンスを最適化します。"
    };
    await apiClient.api.private.tasks.$post({ body: newTask }).catch(returnNull);
    await fetchTasks();
  };

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <h1>タスク一覧</h1>
        <button onClick={createTask}>新しいタスクを追加</button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title} - {task.content}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
