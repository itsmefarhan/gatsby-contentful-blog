import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min.js"

import React from "react"

import AuthProvider from "./src/context/AuthContext"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)
