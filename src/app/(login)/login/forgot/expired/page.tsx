"use client"

import { Link as MuiLink, Alert } from "@mui/material";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <Alert variant="filled" severity="error" sx={{ mt: 3, mb: 3 }}>Esse link expirou, refaça o procedimento.</Alert>
        
            <MuiLink href="/login/forgot" component={Link} variant="button">Esqueci minha senha</MuiLink>
        </>
    )
}

export default Page;