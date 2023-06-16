import { auth, db } from "@/firebase/config";
import { collection, getDoc, doc } from "@firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function AuthGaurd(Component: any) {
  return function GAURD(props: any) {
    const [userData, setUserData] = useState<any>(false);

    useEffect((): any => {
      const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
        if (user) {
          const currUser = {
            uid: user.uid,
            email: user.email,
            displayname: user.displayName,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
          };
          const userCollectionRef = collection(db, "users"); // takes only two arguments
          await getDoc(doc(userCollectionRef, `${user.uid}`)).then(
            (docSnap) => {
              setUserData({ ...currUser, ...docSnap.data() }); // docSnap returns a complex object but .data() converts it to the actuall stuff.
            }
          );
        } else setUserData(null);
      });

      return () => unsubscribe;
    }, []);

    return userData ? (
      <Component {...props} userData={userData} />
    ) : (
      <p>Loading</p>
    );
  };
}

export default AuthGaurd;