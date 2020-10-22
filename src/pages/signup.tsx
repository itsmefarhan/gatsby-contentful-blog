import React, { useState, useContext } from "react"
import firebase from "../context/firebaseConfig"
import "firebase/auth"
import { AuthContext } from "../context/AuthContext"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Helmet from "../components/head"
import {
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  Paper,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

interface FormItems {
  username: string
  phone: string
  email: string
  password: string
}

const useStyles = makeStyles(() => ({
  paper: {
    padding: "20px",
    marginTop: "20px",
  },
  form: {
    marginTop: "10px",
  },
  btn: {
    marginTop: "20px",
    textAlign: "center",
  },
}))

const SignUp = () => {
  const classes = useStyles()
  const authContext = useContext(AuthContext)
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  } as FormItems)

  const handleChange = (event: any) => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }
  const handleSubmit = (event: any) => {
    event?.preventDefault()
    console.log(values, "values")
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential: firebase.auth.UserCredential) => {
        authContext.setUser(userCredential)
        navigate("/login")
      })
  }
  return (
    <Layout>
      <Helmet title="Register" />
      <Typography variant="h3" align="center">
        Register
      </Typography>
      <Paper elevation={10} className={classes.paper}>
        <FormControl fullWidth className={classes.form}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input name="email" value={values.email} onChange={handleChange} />
        </FormControl>
        <FormControl fullWidth className={classes.form}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </FormControl>
        <div className={classes.btn}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Register
          </Button>
        </div>
      </Paper>
    </Layout>
  )
}
export default SignUp
