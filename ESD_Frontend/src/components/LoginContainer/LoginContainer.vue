<template>
  <div class="login-container">
    <div id="bg">
      <div class="white_container container-fluid">
        <div class="content mx-auto">
          <div
            class="first_row"
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <h2 class="login_name" style="font-weight: bold; margin: 0">
              Log In
            </h2>
            <button
              class="nav-link"
              title="Proceed to register"
              style="
                margin: 0;
                padding: 0;
                background-color: transparent;
                border: 0;
              "
              @click="$emit('toggleRegister', 'register')"
            >
              <span
                class="text-dark"
                style="margin-right: 3px; font-weight: normal; font-size: 14px"
                >or</span
              >
              <b>Register</b>
            </button>
          </div>

          <div
            class="input-group"
            style="display: flex; flex-direction: column"
          >
            <div
              class="email_row mx-auto"
              style="display: flex; flex-direction: column"
            >
              <p class="email_name">Email</p>
              <input
                v-model="email"
                type="text"
                class="login-input email_box form-control mx-auto"
                title="email"
              />
            </div>

            <div
              class="another_rem_row mx-auto"
              style="display: flex; flex-direction: column"
            >
              <p class="pw_name">Password</p>
              <input
                v-model="password"
                type="password"
                class="login-input pw_box form-control"
                title="password"
              />
              <div class="rem">
                <input type="checkbox" class="small_box" title="remember me" />
                Remember me
              </div>
            </div>
          </div>

          <router-link
            to=""
            style="display: flex; align-items: center"
            class="
              nav-link
              login_button
              text-center
              justify-content-center
              mx-auto
            "
            title="Click to login"
            @click="login()"
          >
            Login
          </router-link>

          <div
            class="separator mx-auto"
            style="display: flex; justify-content: center; align-items: center"
          >
            <hr class="hr" />
            <div class="line mx-2">or log in with</div>
            <hr class="hr_" />
          </div>

          <div
            id="row_with_icons"
            class="row"
            style="display: flex; align-items: center; justify-content: center"
          >
            <img
              style="width: 65px"
              class="rounded-circle mx-4"
              src="../../assets/icons/google_icon.png"
              title="Google sign in"
            />
            <img
              style="width: 65px"
              class="rounded-circle mx-4"
              src="../../assets/icons/fb.png"
              title="Facebook sign in"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var patientURL = "http://localhost:5004/patient/getAll"
var doctorURL = "http://localhost:5001/doctor"

export default {
  name: "LoginContainer",
  data() {
    return {
      patientList: [],
      doctorList:[],
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.email == "" || this.password == "") {
        this.$swal({
          icon: "error",
          position: 'center',
          title: "Please fill in all inputs fields!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
      else if (this.patientList.includes(this.email)) {
          this.$swal({
            icon: "success",
            position: 'center',
            title: "Login success for User!",
            text: "Welcome back to __",
            showConfirmButton: false,
            timer: 1400,
          });
          sessionStorage.setItem("PatientICNo", this.email);
          this.$router.push("/index.html");
      } else if (this.doctorList.includes(this.email)) {
          this.$swal({
            icon: "success",
            position: 'center',
            title: "Login success for Doctor!",
            text: "Welcome back to __",
            showConfirmButton: false,
            timer: 1400,
          });
          sessionStorage.setItem("DoctorID", this.email);
          this.$router.push("/index.html");
      } else {
            this.$swal({
            icon: "error",
            position: 'center',
            title: "User not found",
            text: "Please register before Logging In!",
            showConfirmButton: false,
            timer: 1400,
          });
      }
    },
  },
    mounted(){
        fetch(patientURL)
          .then(response => response.json())
          .then(data => 
            {
              var patients = data.data.patients;
              for (let x in patients){
                this.patientList.push(patients[x].ICNo);
              }
            }
          ),
        fetch(doctorURL)
          .then(response => response.json())
          .then(data => 
            {
              var doctor = data.data.doctors;
              for (let x in doctor){
                this.doctorList.push(doctor[x].DoctorID.toString());
              }
            }
          )
    }
    
};
</script>

<style scoped lang="sass" src="./LoginContainer.sass"></style>
