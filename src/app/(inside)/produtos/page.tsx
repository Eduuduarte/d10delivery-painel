"use client";

import { OrderItem } from "@/components/OrderItem";
import { api } from "@/libs/api";
import { dateFormat } from "@/libs/dateFormat";
import { Order } from "@/types/Order";
import { OrderStatus } from "@/types/OrderStatus";
import { Refresh, Search } from "@mui/icons-material";
import { Box, Button, CircularProgress, Grid, InputAdornment, Skeleton, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { KeyboardEvent, useEffect, useState } from "react";

const Page = () => {

    const [loading, setLoading] = useState(false);

    const handleNewProduct = () => {

    }

    return (
        <>
            <Box sx={{ my: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography component="h5" variant="h5" sx={{ color: "#555", mr: 2 }}>Produtos</Typography>
                    <Button onClick={handleNewProduct}>Novo Produto</Button>
                </Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: 50, display: { xs: 'none', md: 'table-cell' } }}>ID</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Preço</TableCell>
                            <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Categoria</TableCell>
                            <TableCell sx={{ xs: 50, md: 130 }}>Açoes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    </TableBody>
                </Table>
            </Box>
        </>

    )
}

export default Page;