export const types = {
    login: '[Auth] Login',
    Logout: '[Auth] Logout',

    // errors
    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    // loadinLogin
    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    // platos controlador
    CrearPlato: '[Platos] Create',
    LeerPLatos: '[Platos] Read',
    ActualizarPlatos: '[Platos] Update',
    EliminarPlatos: '[Platos] Delete',
    SeleccionPlato: '[Platos] Seleccion',
    limpiar: '[limpiar] limpiar',

    // carrito
    AgregarProducto: '[Carrito] Agregar',
    EliminarProducto: '[Carrito] Eliminar',
    Cantidad: '[Carrito] Cantidad',
    FinalizarPedido: '[Carrito] Finalizar',
    limpiarCarro: '[Carrito] Limpiar',

    // perfil
    leerDatos: '[Perfil] leer Perfil',
    
    ActDatos: '[Perfil] Actualizar Perfil',
    cerrarSesion:'[Perfil] Cerrar Sesion',

    // pedidos
    leerPedidos: '[Pedidos] leer Pedidos',

}