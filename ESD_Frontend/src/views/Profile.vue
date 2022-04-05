<template>
  <div class="profile">

  </div>
</template>

<script>
console.log(sessionStorage.getItem("PatientID"));
export default {
  name: "Profile",
  data() {
    return {
      name: "",
      email: "",
      old_pwd: "",
      new_pwd: "",
      cfm_pwd: "",
      image: "",
    };
  },
  // beforeMount() {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       // logged in
  //       Swal.fire({
  //         icon: "error",
  //         title: "You are not logged in",
  //         text: "Redirecting to the login page...",
  //         showConfirmButton: false,
  //         timer: 1200,
  //       });
  //       this.$router.push("/login");
  //     }
  //   });
  // },
  // created() {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     // console.log(user);
  //     if (user) {
  //       const uid = user.uid;

  //       const db = getDatabase();
  //       const currentUser = ref(db, "BakeHelpsMember/" + uid);
  //       onValue(currentUser, (snapshot) => {
  //         const rec = snapshot.val();
  //         // console.log(rec, 'rec')
  //         // console.log(Object.keys(rec))

  //         this.name = rec["name"];
  //         this.email = rec["email"];

  //         var rec_keys = Object.keys(rec);
  //         if (rec_keys.includes("image")) {
  //           this.image = rec["image"];
  //           this.image = require(this.image);
  //         } else {
  //           this.image = require("@/assets/icons/BakeHelps.svg");
  //         }
  //       });
  //     } else {
  //       this.loginStatus = false;
  //     }
  //   });
  // },
  methods: {
    changePassword() {
      this.$router.push("/login");
    },
    logout() {
      this.$router.push("/login");
    }
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/global.sass'


</style>