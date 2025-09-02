import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AccreditationManager.module.css';
import AccreditationForm from '@/components/AcreditationForm'; // Asegúrate que la ruta sea correcta
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Edit,Delete } from 'lucide-react'; 
import { ENV } from '@/API/api';
import Swal from 'sweetalert2';

const AccreditationManager = () => {
    const [accreditations, setAccreditations] = useState([]);
    const [selectedAccreditation, setSelectedAccreditation] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'

 
    useEffect(() => {
        async function fetchAccreditations() {
          try {
            const { data } = await axios.get(`${ENV.apiUrl}/api/v1/sumi`)

            if(data.success){
                setAccreditations(data.data)
            }

            
          } catch (error) {
            console.error("Error al cargar las acreditaciones:", error);
            Swal.fire('Algo Salio mal',`ERROR: ${error.message}`,'error')
          }
        }
        fetchAccreditations();
        
    }, []);

    const handleAddNew = () => {
        setSelectedAccreditation(null);
        setModalMode('add');
        setIsModalOpen(true);
    };

    const handleEdit = (accreditation) => {
        setSelectedAccreditation(accreditation);
        setModalMode('edit');
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        // Podrías añadir una lógica para recargar los datos aquí si es necesario
    };

    const handleDelete = async(accreditation)=>{
        setSelectedAccreditation(null)
        Swal.fire({
            title:'¿Deseas eliminar esta acreditación?',
            text:'Los registros eliminados no podran recuperarse',
            icon:'question',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo",
            cancelButtonText:'No, espera!'
        }).then(async(result)=>{
            if(result.isConfirmed){
                try {
                    const { data } = await axios.delete(`${ENV.apiUrl}/api/v1/sumi/${accreditation._id}`)
                    if(data.success){
                        setAccreditations(prev=>(prev.filter(item=>item._id !== accreditation._id)))
                        Swal.fire('Todo salio bien!',data.message,'success')
                    }
                } catch (error) {
                    Swal.fire('Algo Salio mal',`No se pudo eliminar. [ERROR CODE]:${error.message}`,'error')
                }
            }
        })
        
    }   

    return (
        <div className={styles.managerContainer}>
        <Card>
            <CardHeader className={styles.header}>
            <CardTitle className={styles.title}>Gestor de Acreditaciones</CardTitle>
            
            </CardHeader>
            <CardContent>
            <div className={styles.tableContainer}>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead className={styles.hideOnMobile}>Número</TableHead>
                    <TableHead className={styles.hideOnMobile}>Alcance</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {accreditations.map((acc) => (
                    <TableRow key={acc.id}>
                        <TableCell className="font-medium">{acc.nombre}</TableCell>
                        <TableCell className={styles.hideOnMobile}>{acc.numero}</TableCell>
                        <TableCell className={styles.hideOnMobile}>{acc.alcance}</TableCell>
                        <TableCell className="text-right flex gap-1">
                        <Button variant="outline" size="icon" onClick={() => handleEdit(acc)}>
                            <Edit className="h-4 w-4 cursor-pointer" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => handleDelete(acc)}>
                            <Delete className="h-4 w-4 text-red-400 cursor-pointer" />
                        </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
                {accreditations.length === 0 && (
                    <p className="text-center py-8 text-gray-500">No hay acreditaciones para mostrar.</p>
                )}
            </CardContent>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} >
                <DialogTrigger asChild>
                <Button onClick={handleAddNew}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Añadir Nueva
                </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] h-screen overflow-x-scroll">
                <DialogHeader>
                    <DialogTitle>
                    {modalMode === 'add' ? 'Añadir Nueva Acreditación' : 'Editar Acreditación'}
                    </DialogTitle>
                </DialogHeader>
                
                <AccreditationForm
                    initialData={selectedAccreditation}
                    onFormSubmit={handleModalClose}
                    isEdit={modalMode === 'edit'}
                />
                </DialogContent>
            </Dialog>
        </Card>
        </div>
    );
};

export default AccreditationManager;