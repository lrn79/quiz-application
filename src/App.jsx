import { useEffect } from "react";
import { RootLayout } from "./layouts";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './libs/firebase';
import { useDispatch } from 'react-redux';
import { setLoading, setUser } from './redux/features/user/userSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });

  }, [dispatch]);


  return (
    <>
      <RootLayout />
    </>
  );
};

export default App;