"use client";

import { OrderItem } from "@/components/OrderItem";
import { ProductTableItem } from "@/components/ProductTableItem";
import { ProductTableSkeleton } from "@/components/ProductTableSkeleton";
import { api } from "@/libs/api";
import { dateFormat } from "@/libs/dateFormat";
import { Category } from "@/types/Category";
import { Order } from "@/types/Order";
import { OrderStatus } from "@/types/OrderStatus";
import { Product } from "@/types/Product";
import { Refresh, Search } from "@mui/icons-material";
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputAdornment, Skeleton, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { KeyboardEvent, useEffect, useState } from "react";

const Page = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const [ showDeleteDialog, setShowDeleteDialog ] = useState(false);




    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        setLoading(true);

        setProducts(await api.getProducts());
        setCategories(await api.getCategories());

        setLoading(false);
    }

    const handleNewProduct = () => { }

    const handleEdit = (product: Product) => {}

    

    // Delete Product
    const handleDelete= (product: Product) => {
        setShowDeleteDialog(true)
    }

    const handleConfirmDelete = () => {

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
                            <TableCell sx={{ width: {xs: 50, md: 130 } }}>Açoes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {loading &&
                            <>
                                <ProductTableSkeleton />
                                <ProductTableSkeleton />
                                <ProductTableSkeleton />
                            </>
                        }

                        {!loading &&
                            products.map(item => (
                                <ProductTableItem 
                                    key={item.id}
                                    item={item}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            ))
                        }

                    </TableBody>
                </Table>

                <Dialog open={showDeleteDialog}>
                        <DialogTitle>Tem certeza que deseja deletar esse produto?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Não é possível voltar atrás após confirmar está ação.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setShowDeleteDialog(false)}>Não</Button>
                            <Button onClick={handleConfirmDelete}>Sim</Button>
                        </DialogActions>
                </Dialog>
            </Box>
        </>

    )
}

export default Page;