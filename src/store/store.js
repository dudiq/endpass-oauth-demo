import LoggedUsers from '@/store/LoggedUsers';
import Resulter from '@/store/Resulter';
import Connect from '@/store/Connect';

export default function () {
  const connect = new Connect();
  return {
    connect,
    resulter: new Resulter(connect),
    loggedUsers: new LoggedUsers(),
  }
}
