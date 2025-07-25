import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  let status = "authenticated";
  return (
    <div>
      {status == "authenticated" ? (
        <Link href="/">Login</Link>
      ) : (
        <Link href="/">Logout</Link>
      )}
    </div>
  );
};

export default AuthLinks;
