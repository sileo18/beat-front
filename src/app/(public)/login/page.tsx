"use client";

import { Container, Paper, Typography, Box, TextField, Grid, Button, Link } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image"; // Ajuste o caminho conforme necessário
export default function RegisterPage() {

    const handleSubmit = () => {
        console.log('Form submitted');
    }

    return (
        <Container maxWidth="xs">

            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <img src="/logo.png" alt="Logo" width="70" height="70" />
            </Box>


            <Paper elevation={10} sx={{
                backgroundImage: "none", // Remove qualquer gradiente ou imagem de fundo
                padding: 2,
                borderRadius: 2,
                border: "1px solid rgba(255, 255, 255, 0.2)",
            }}>
                <Typography variant="h5" component="h1" sx={{ mb: 4, color: "#fff", textAlign: 'center' }}>
                    Sign In
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    autoComplete="off"
                >

                    <TextField placeholder="Enter email" fullWidth required autoFocus sx={{ mb: 3 }} />

                    <TextField placeholder="Enter password" fullWidth required type="password" sx={{ mb: 3 }} />

                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                        Sign In
                    </Button>

                </Box>

                <Grid container justifyContent={'space-between'} sx={{ mt: 3 }}>
                    <Grid>
                        <Link component={NextLink} href={"/register"} to="/register">
                            <Typography variant="body2" color="textSecondary" sx={{ textDecoration: 'none', color: '#fff' }}>
                                Dont have an account? Sign Up
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid>
                        <Link component={NextLink} href={"/forgot"} to="/forgot">
                            <Typography variant="body2" color="textSecondary" sx={{ textDecoration: 'none', color: '#fff' }}>
                                Forgot password?
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}