<template>
    <div className="user signupBx">
        <div className="formBx">
        <form action="">
            <h2>Create an account</h2>
            <input type="text" name="" placeholder="Username" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="password" name="" placeholder="Create Password" />
            <input type="password" name="" placeholder="Confirm Password" />
            <input type="submit" name="" value="Sign Up" />
            <p className="signup">
            Already have an account ?
            <a href="#" @click="$emit('toggleNewRegister', 'newreg')">
                Sign in.
            </a>
            </p>
            <div className="imgBx">
            <img
              src="https://images.unsplash.com/photo-1567935850829-e52d7bfe37ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt=""
            />
          </div>
        </form>
        </div>
    </div>
</template>