import { Box } from "@mui/material";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{ padding: 2, width: "100%", height: "100vh" }}>
        {children}
    </Box>
  );
}