import { defineStore } from "pinia";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
} from "firebase/firestore";
import Swal from "sweetalert2";

// isikan firebaseConfig disini
const firebaseConfig = {
  apiKey: "AIzaSyDK-61R5PiMyxVqAA3kFz2IH46KBs95MAY",
  authDomain: "todolist-project-669a1.firebaseapp.com",
  projectId: "todolist-project-669a1",
  storageBucket: "todolist-project-669a1.appspot.com",
  messagingSenderId: "337669925806",
  appId: "1:337669925806:web:037d2c03cfad0ef0f4763f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const useApp = defineStore({
    id: "App",
    state: () => ({
      users: [],
      menu: {
        edit_user: {
          show: false,
          data: {},
        }
      },
      input: {
        user: {}
      }
    }),
    actions: {
      async addUser(user) {
        await axios.post('http://127.0.0.1:3000/users', {
          nama: user.nama,
          email: user.email
        })
        .then((response) => {
          if(response.status) {
            Swal.fire({
              title: 'Success!',
              text: `Succesesfully added user ${user.name}`,
              icon: 'success',
              timer: 1500,
              showConfirmButton: false,
            });
          }
        }, (error) => {
          Swal.fire({
            title: 'Error!',
            text: `Seems like there is an error while adding user ${user.name}<br>${error}`,
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
          });
        }); 
        this.input.user.nama = '';
        this.input.user.email = '';
        this.input.user.password = '';
      },
      // async deleteUser(user_id) {
      //   // Isinya apa hayoo
      // },
      // async editUser(user) {
      //   // Isinya apa hayoo
      // },
      showEditUserMenu(user_id) {
        let user = this.users.find(user => user.id === user_id);
        this.menu.edit_user.data = {
          id: user.id,
          email: user.email,
          password: user.password,
        };
        this.menu.edit_user.show = true;
      },
      closeEditUserMenu() {
        this.menu.edit_user.data = {};
        this.menu.edit_user.show = false;
      },

      async getUsers() {
        onSnapshot(collection(db, "users"), (querySnapshot) => {
          let users = [];
          querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() });
          });
          this.users = users;
        },
        error => {
          Swal.fire({
            title: 'Error!',
            text: `Seems like there is an error while connecting to Firestore<br>${error}`,
            icon: 'error',
            confirmButtonText: 'Cool'
          });
        }
        );
      },
      
    },
});