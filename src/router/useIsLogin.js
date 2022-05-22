import { useSelector } from 'react-redux';

export default function useIsLogin() {
  const user = useSelector((state) => state.user);
  return user;
}
