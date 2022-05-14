import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'
import { auth } from '../Firebase/firebase-config';


const Authentication = (email, password, navigate) => {


    
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/signin')
         
    
            Swal.fire({
                icon: 'success',
                title: 'Congratulations ...',
                text: 'Account Created Successfully ',
              })
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            let err = error.code;
            if (err === "auth/email-already-in-use") {
                Swal.fire({
                    icon: 'error',    
                    title: 'Sorry ...',
                    text: 'This email is alrady exist',
                  })
                } else if (err === "auth/weak-password") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops ...',
                    text: ' Password Must be Atleast 6 Characters',
                  })
            }else if (err === "auth/invalid-email") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops ...',
                    text: ' Please Enter a valid email',
                  })
            }
            console.log(errorMessage);

        });
}

const LoginAuth = (email, password, navigate) => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            Swal.fire({
                icon: 'success',
                title: 'Congratulations ...',
                text: 'Successfully Login',
              })
            navigate("/")
        })
        .catch((error) => {
            console.log(error.code);
            let err = error.code;
            // auth/user-not-found
            // auth/wrong-password
            if (err === "auth/user-not-found") {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Email ...',
                    text: 'User not Found',
                  })
            } else if (err === "auth/wrong-password") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops ...',
                    text: ' Password Not Matched',
                  })
            }
        });
    }

    


export { Authentication, LoginAuth }