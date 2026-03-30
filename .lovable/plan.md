

## Plan actualizado: Web + AMS — Carrasco Rodriguez v1

El alcance ahora incluye dos grandes bloques: la **web pública** (landing, industrias, productos, cotizador) y un **portal interno de gestión (AMS)** para la agencia. El AMS requiere autenticación y base de datos.

### Bloque 1 — Web Pública (sin cambios al plan anterior)

Páginas: Home, Industrias (8), Productos (personas + empresas), Wellness, Aseguradoras, Cotizar, Billetera (coming soon).

### Bloque 2 — Portal AMS (nuevo)

Acceso vía `/admin` con login protegido. Requiere **Supabase** (auth + DB + storage).

**Funcionalidades mínimas:**

| Módulo | Ruta | Descripción |
|--------|------|-------------|
| Dashboard | `/admin` | Vista general de la agencia: KPIs, pólizas activas, renovaciones próximas, comisiones |
| Clientes y Pólizas | `/admin/clients` | CRUD de clientes, pólizas asociadas, historial, búsqueda |
| Almacén de Documentos | `/admin/documents` | Upload/descarga de documentos por cliente/póliza (Supabase Storage) |
| Formularios ACORD | `/admin/acord-forms` | Plantillas ACORD pre-llenadas, generación PDF |
| Workflows | `/admin/workflows` | Flujos personalizados por tipo de trámite (nuevo negocio, siniestro, endoso) con estados |
| Pipeline de Ventas | `/admin/pipeline` | Kanban de oportunidades: prospecto → cotización → cierre |
| Centro de Renovaciones | `/admin/renewals` | Lista de pólizas próximas a vencer con alertas y acciones |
| Reportes | `/admin/reports` | Reportes interactivos: producción por aseguradora, por ramo, por vendedor |
| Facturación | `/admin/billing` | Cuentas por cobrar/pagar, estados de cuenta |
| Conciliación Comisiones | `/admin/commissions` | Registro de comisiones esperadas vs recibidas por aseguradora |
| PDF Forms (Suplementales) | `/admin/pdf-forms` | Mapeo y llenado de formularios PDF suplementales |
| Intake Forms | `/admin/intake` | Formularios de intake mapeados a PDF para captura inicial de clientes |

### Base de datos (Supabase — tablas principales)

- `profiles` — datos del usuario de la agencia
- `user_roles` — roles (admin, agente, asistente)
- `clients` — clientes (empresa o persona)
- `policies` — pólizas (cliente, aseguradora, ramo, vigencia, prima, comisión)
- `documents` — metadata de documentos (referencia a Storage)
- `workflows` — definición de flujos
- `workflow_instances` — instancias activas de flujos
- `pipeline_opportunities` — oportunidades de venta (estado, valor, cliente)
- `renewals` — vista/tabla de renovaciones
- `billing_entries` — movimientos de facturación
- `commissions` — registro de comisiones
- `acord_templates` — plantillas de formularios

### Enfoque de implementación

Dado que esto es v1 con cotizador básico, la implementación se hará en fases:

**Fase 1 — Web pública** (implementar primero)
- Todas las páginas públicas, navegación, cotizador WhatsApp
- Sin backend

**Fase 2 — Setup backend + Auth**
- Conectar Supabase
- Auth con login/registro
- Tablas base: profiles, user_roles, clients, policies

**Fase 3 — AMS Core**
- Dashboard, Clientes/Pólizas, Documentos, Pipeline de Ventas
- Centro de Renovaciones

**Fase 4 — AMS Avanzado**
- ACORD Forms, Workflows, Reportes, Facturación, Comisiones
- PDF mapping (intake + suplementales)

### Navegación

- Web pública: Header existente
- AMS: Layout separado con sidebar (Dashboard, Clientes, Pólizas, Documentos, Pipeline, Renovaciones, Reportes, Facturación, Comisiones, Formularios)
- Botón "Portal Agencia" en el header público (visible solo para usuarios autenticados)

### Detalle técnico

- Supabase para auth, DB, storage y edge functions
- RLS en todas las tablas — acceso por rol
- React Query para data fetching
- Recharts para reportes interactivos
- react-beautiful-dnd o similar para Kanban del pipeline
- PDF generation con edge functions para ACORD forms

