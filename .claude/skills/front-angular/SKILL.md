# Skill: Desarrollo Frontend con Angular 21

## Metadatos
**name**: Desarrollo Angular 21
**description**: Directrices para desarrollo frontend con Angular 21, Signals, TailwindCSS 4 y PrimeNG

## Descripción general
Esta Skill proporciona las directrices oficiales para desarrollar componentes y funcionalidades en Angular 21. El proyecto utiliza **Signals** como sistema reactivo principal, **TailwindCSS 4** para estilos y **PrimeNG** como librería de componentes UI.

Claude debe seguir estas directrices siempre que cree, modifique o refactorice código Angular en este proyecto. Es fundamental mantener la consistencia en el uso de Signals y consultar la documentación de PrimeNG antes de implementar componentes UI.

---

## Stack Tecnológico

### Core
- **Angular 21** (última versión estable)
- **TypeScript 5.7+**
- **Signals API** (sistema reactivo principal)

### UI y Estilos
- **PrimeNG 21** (componentes UI)
- **TailwindCSS 4** (utilidades de estilo)
- **PrimeFlex** (opcional, sistema de grid)

### Estado y Reactividad
- **Signals** (primitivas reactivas)
- **computed()** (valores derivados)
- **effect()** (efectos secundarios)

---

## Principios de Desarrollo

### 1. Uso Obligatorio de Signals

**SIEMPRE** usar Signals para manejo de estado en componentes:

```typescript
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  template: `
    <p>Contador: {{ contador() }}</p>
    <p>Doble: {{ doble() }}</p>
    <button (click)="incrementar()">+1</button>
  `
})
export class EjemploComponent {
  // ✅ CORRECTO: Usar signals
  contador = signal(0);
  doble = computed(() => this.contador() * 2);

  constructor() {
    // Efectos para side-effects
    effect(() => {
      console.log('Contador cambió:', this.contador());
    });
  }

  incrementar() {
    this.contador.update(v => v + 1);
  }

  // ❌ INCORRECTO: NO usar propiedades tradicionales
  // contador = 0;
  // get doble() { return this.contador * 2; }
}
```

### 2. Componentes Standalone

Todos los componentes deben ser **standalone**:

```typescript
@Component({
  selector: 'app-mi-componente',
  standalone: true,
  imports: [CommonModule, ButtonModule], // Importar dependencias
  templateUrl: './mi-componente.html'
})
export class MiComponenteComponent {
  // ...
}
```

### 3. Estructura de Componentes

```typescript
import { Component, signal, computed, effect, input, output } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [/* módulos necesarios */],
  templateUrl: './ejemplo.html',
  styleUrl: './ejemplo.css'
})
export class EjemploComponent {
  // 1. Inputs (signals de entrada)
  titulo = input<string>(''); // input signal
  datos = input.required<any[]>(); // input requerido

  // 2. Outputs (eventos)
  guardar = output<any>(); // nuevo API de outputs

  // 3. Signals de estado local
  cargando = signal(false);
  seleccionado = signal<any>(null);

  // 4. Computed signals
  total = computed(() => this.datos().length);

  // 5. Effects
  constructor() {
    effect(() => {
      console.log('Datos cambiaron:', this.datos());
    });
  }

  // 6. Métodos
  onGuardar() {
    this.guardar.emit(this.seleccionado());
  }
}
```

---

## Trabajo con PrimeNG

### Consulta Obligatoria de Documentación

**ANTES** de usar cualquier componente de PrimeNG:

1. **Consultar resumen**: Revisar [.claude/skills/front-angular/resources/PRIMENG_RESUME.md](.claude/skills/front-angular/resources/PRIMENG_RESUME.md) para:
   - Verificar si existe el componente necesario
   - Conocer el nombre del módulo a importar
   - Ver ejemplo básico de uso

2. **Consultar documentación completa**: Si necesitas detalles específicos:
   - Buscar en [.claude/skills/front-angular/resources/PRIMENG_FULL.md](.claude/skills/front-angular/resources/PRIMENG_FULL.md)
   - O visitar el enlace oficial proporcionado en el resumen

### Importación de Componentes PrimeNG

```typescript
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-ejemplo',
  standalone: true,
  imports: [ButtonModule, TableModule, DialogModule],
  template: `
    <p-button label="Guardar" icon="pi pi-check"></p-button>
  `
})
export class EjemploComponent { }
```

### Componentes PrimeNG Más Usados

Consultar siempre PRIMENG_RESUME.md, pero los más comunes son:

- **Formularios**: InputText, Dropdown, Calendar, MultiSelect, Checkbox
- **Datos**: Table, DataView, Tree, TreeTable
- **Botones**: Button, SplitButton, ToggleButton
- **Diálogos**: Dialog, ConfirmDialog, DynamicDialog
- **Mensajes**: Toast, Message, Messages
- **Layout**: Panel, Card, Toolbar, Divider

---

## Estilos con TailwindCSS 4

### Uso de Utilidades

Usar clases de Tailwind directamente en los templates:

```html
<!-- ✅ CORRECTO: Usar clases de Tailwind -->
<div class="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
  <h2 class="text-2xl font-bold text-gray-800">Título</h2>
  <p class="text-gray-600">Contenido</p>
</div>

<!-- ❌ EVITAR: Estilos inline -->
<div style="display: flex; padding: 1.5rem;">
  <!-- ... -->
</div>
```

### Combinación con PrimeNG

PrimeNG tiene sus propios estilos. Tailwind se usa para:
- Layout y espaciado (flex, grid, gap, p-*, m-*)
- Responsividad (sm:, md:, lg:)
- Colores personalizados adicionales
- Utilidades generales

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  <p-card class="h-full">
    <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold">Card 1</h3>
      <p-button icon="pi pi-cog" [rounded]="true"></p-button>
    </div>
  </p-card>
</div>
```

---

## Servicios y Estado Global

### Servicios con Signals

```typescript
import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Estado privado
  private _data = signal<any[]>([]);
  private _loading = signal(false);

  // Exposición pública (readonly)
  readonly data = this._data.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly count = computed(() => this._data().length);

  async cargarDatos() {
    this._loading.set(true);
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      this._data.set(data);
    } finally {
      this._loading.set(false);
    }
  }

  agregarItem(item: any) {
    this._data.update(items => [...items, item]);
  }
}
```

### Inyección en Componentes

```typescript
import { Component, inject } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  template: `
    <div>
      <p *ngIf="dataService.loading()">Cargando...</p>
      <ul>
        <li *ngFor="let item of dataService.data()">{{ item.name }}</li>
      </ul>
      <p>Total: {{ dataService.count() }}</p>
    </div>
  `
})
export class ListaComponent {
  // ✅ CORRECTO: Usar inject()
  dataService = inject(DataService);

  // ❌ EVITAR: Constructor injection (aunque sigue siendo válido)
  // constructor(private dataService: DataService) {}
}
```

---

## Formularios con Angular Forms Signals

### Introducción a Forms Signals (Angular 21+)

Angular 21 introduce un **nuevo sistema de formularios basado en señales** que reemplaza el enfoque tradicional de `FormControl` y `FormGroup`. Este sistema es más reactivo, type-safe y se integra perfectamente con el ecosistema de Signals.

**IMPORTANTE**: Usar SIEMPRE Forms Signals para nuevos formularios. Solo mantener FormControl/FormGroup en código legacy.

### Conceptos Básicos

#### 1. Creación de Formularios con `form()`

```typescript
import { Component, signal } from '@angular/core';
import { form, required, Field } from '@angular/forms/signals';

@Component({
  selector: 'app-ejemplo-form',
  standalone: true,
  imports: [Field, InputTextModule],
  template: `
    <input pInputText [field]="formulario.nombre" placeholder="Nombre" />
  `
})
export class EjemploFormComponent {
  // 1. Crear señal con datos iniciales
  datos = signal({
    nombre: '',
    email: '',
    edad: 0
  });

  // 2. Crear formulario desde la señal
  formulario = form(this.datos);
}
```

#### 2. Validaciones con `required()` y otras funciones

```typescript
import { form, required, minLength, email } from '@angular/forms/signals';

datos = signal({
  nombre: '',
  apellido: '',
  email: '',
  password: ''
});

// Agregar validaciones usando una función de configuración
formulario = form(this.datos, (path) => {
  required(path.nombre, { message: 'El nombre es obligatorio' });
  required(path.apellido, { message: 'El apellido es obligatorio' });
  email(path.email, { message: 'Email inválido' });
  minLength(path.password, 8, { message: 'Mínimo 8 caracteres' });
});
```

### Ejemplo Completo: Formulario de Ficha de Personal

#### TypeScript Component

```typescript
import { Component, inject, signal } from '@angular/core';
import { form, required, Field } from '@angular/forms/signals';
import { Card as CardModule } from 'primeng/card';
import { Button as ButtonModule } from 'primeng/button';
import { InputText as InputTextModule } from 'primeng/inputtext';
import { Select as SelectModule } from 'primeng/select';

interface Persona {
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  email: string;
  celular: string;
}

interface DatosLaborales {
  cargo: string;
  email_laboral: string;
  celular_laboral: string;
  sueldo_actual: number | null;
  observaciones: string;
}

@Component({
  selector: 'app-form-ficha',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    Field, // ✅ IMPORTANTE: Importar Field para usar [field]
  ],
  templateUrl: './form-ficha.html',
  styleUrl: './form-ficha.css',
})
export default class FormFicha {
  // 1. Señales con datos iniciales
  persona = signal<Persona>({
    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',
    email: '',
    celular: '',
  });

  datosLaborales = signal<DatosLaborales>({
    cargo: '',
    email_laboral: '',
    celular_laboral: '',
    sueldo_actual: null,
    observaciones: '',
  });

  // 2. Formularios con validaciones
  form_persona = form(this.persona, (path) => {
    required(path.nombres, { message: 'Debes ingresar al menos un nombre.' });
    required(path.apellido_paterno, { message: 'El apellido paterno es obligatorio.' });
  });

  form_laboral = form(this.datosLaborales, (path) => {
    required(path.cargo, { message: 'El cargo es obligatorio.' });
  });

  // 3. Estado de guardado
  guardando = signal(false);

  // 4. Método para enviar el formulario
  async onSubmit() {
    // Validar todos los formularios
    if (this.form_persona.valid() && this.form_laboral.valid()) {
      this.guardando.set(true);
      try {
        const data = {
          persona: this.persona(),
          laboral: this.datosLaborales(),
        };
        await this.guardarFicha(data);
      } finally {
        this.guardando.set(false);
      }
    }
  }

  async guardarFicha(data: any) {
    // Lógica de guardado
  }
}
```

#### HTML Template

```html
<p-card>
  <ng-template #header>
    <div class="flex justify-between items-center gap-3 p-3">
      <h2 class="text-2xl font-bold text-gray-800 m-0">Nueva Ficha de Personal</h2>
      <div class="flex gap-3">
        <p-button label="Cancelar" icon="pi pi-times" severity="secondary" [outlined]="true"></p-button>
        <p-button
          label="Guardar Ficha"
          icon="pi pi-check"
          severity="primary"
          (onClick)="onSubmit()"
          [loading]="guardando()"
        ></p-button>
      </div>
    </div>
  </ng-template>

  <div class="p-4">
    <!-- Sección: Datos Personales -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Campo con validación -->
      <div class="field">
        <label for="nombres" class="block text-sm font-medium text-gray-700 mb-2">
          Nombres <span class="text-red-500">*</span>
        </label>
        <!-- ✅ Usar [field] en lugar de [(ngModel)] -->
        <input
          pInputText
          id="nombres"
          [field]="form_persona.nombres"
          placeholder="Ingrese nombres"
          class="w-full"
        />
        <!-- ✅ Mostrar errores usando touched() e invalid() -->
        @if (form_persona.nombres().touched() && form_persona.nombres().invalid()) {
          <div class="">
            @for (error of form_persona.nombres().errors(); track error) {
              <small class="text-red-500">{{ error.message }}</small>
            }
          </div>
        }
      </div>

      <!-- Campo requerido con validación -->
      <div class="field">
        <label for="apellido_paterno" class="block text-sm font-medium text-gray-700 mb-2">
          Apellido Paterno <span class="text-red-500">*</span>
        </label>
        <input
          pInputText
          id="apellido_paterno"
          [field]="form_persona.apellido_paterno"
          placeholder="Ingrese apellido paterno"
          class="w-full"
        />
        @if (form_persona.apellido_paterno().touched() && form_persona.apellido_paterno().invalid()) {
          <div class="">
            @for (error of form_persona.apellido_paterno().errors(); track error) {
              <small class="text-red-500">{{ error.message }}</small>
            }
          </div>
        }
      </div>

      <!-- Campo opcional (sin validación) -->
      <div class="field">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email Personal
        </label>
        <input
          pInputText
          id="email"
          type="email"
          [field]="form_persona.email"
          placeholder="ejemplo@correo.com"
          class="w-full"
        />
      </div>
    </div>

    <!-- Sección: Datos Laborales -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div class="field">
        <label for="cargo" class="block text-sm font-medium text-gray-700 mb-2">
          Cargo <span class="text-red-500">*</span>
        </label>
        <input
          pInputText
          id="cargo"
          [field]="form_laboral.cargo"
          placeholder="Ingrese cargo"
          class="w-full"
        />
        @if (form_laboral.cargo().touched() && form_laboral.cargo().invalid()) {
          <div class="">
            @for (error of form_laboral.cargo().errors(); track error) {
              <small class="text-red-500">{{ error.message }}</small>
            }
          </div>
        }
      </div>

      <div class="field">
        <label for="observaciones" class="block text-sm font-medium text-gray-700 mb-2">
          Observaciones
        </label>
        <textarea
          pTextarea
          [field]="form_laboral.observaciones"
          rows="4"
          placeholder="Ingrese observaciones..."
          class="w-full"
        ></textarea>
      </div>
    </div>
  </div>
</p-card>
```

### Patrones Clave de Forms Signals

#### 1. Vinculación de Campos con `[field]`

```html
<!-- ✅ CORRECTO: Usar [field] para vincular con Forms Signals -->
<input pInputText [field]="formulario.nombre" />
<textarea pTextarea [field]="formulario.descripcion"></textarea>
<p-select [field]="formulario.categoria" [options]="categorias()" />
<p-datepicker [field]="formulario.fecha" />

<!-- ❌ INCORRECTO: NO usar [(ngModel)] con Forms Signals -->
<input pInputText [(ngModel)]="formulario.nombre()" />
```

#### 2. Acceso a Estado de Validación

```typescript
// Acceder a propiedades del campo como señales
formulario.nombre().value       // valor actual
formulario.nombre().touched()   // si el campo fue tocado
formulario.nombre().invalid()   // si el campo es inválido
formulario.nombre().errors()    // array de errores
formulario.nombre().dirty()     // si el campo fue modificado

// Validación del formulario completo
formulario.valid()              // si todo el formulario es válido
formulario.invalid()            // si el formulario es inválido
formulario.touched()            // si algún campo fue tocado
```

#### 3. Mostrar Errores de Validación

```html
<!-- Patrón estándar para mostrar errores -->
@if (formulario.campo().touched() && formulario.campo().invalid()) {
  <div class="">
    @for (error of formulario.campo().errors(); track error) {
      <small class="text-red-500">{{ error.message }}</small>
    }
  </div>
}
```

#### 4. Actualización de Valores

```typescript
// Actualizar un campo específico
this.formulario.nombre.set('Nuevo valor');

// Actualizar toda la señal de datos
this.persona.set({
  nombres: 'Juan',
  apellido_paterno: 'Pérez',
  // ...
});

// Actualizar parcialmente usando update
this.persona.update(prev => ({
  ...prev,
  nombres: 'Juan'
}));
```

#### 5. Resetear Formulario

```typescript
resetForm() {
  this.persona.set({
    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',
    email: '',
    celular: '',
  });

  // O usar valores por defecto
  this.formulario.reset();
}
```

### Validaciones Disponibles

```typescript
import {
  required,
  minLength,
  maxLength,
  email,
  pattern,
  min,
  max,
} from '@angular/forms/signals';

formulario = form(this.datos, (path) => {
  // Campo requerido
  required(path.nombre, { message: 'Campo obligatorio' });

  // Longitud mínima
  minLength(path.password, 8, { message: 'Mínimo 8 caracteres' });

  // Longitud máxima
  maxLength(path.descripcion, 500, { message: 'Máximo 500 caracteres' });

  // Validación de email
  email(path.email, { message: 'Email inválido' });

  // Patrón regex
  pattern(path.telefono, /^\d{9}$/, { message: 'Debe tener 9 dígitos' });

  // Valor mínimo
  min(path.edad, 18, { message: 'Debe ser mayor de 18' });

  // Valor máximo
  max(path.descuento, 100, { message: 'Máximo 100%' });
});
```

### Formularios Anidados

```typescript
interface Cliente {
  jefe: PersonalEmpresaModel | null;
  cargo: CargoModel | null;
}

interface Actividad {
  nombre: string;
  tipo: TipoActividad | null;
  modalidad: Modalidad | null;
}

// Crear señales separadas
cliente = signal<Cliente>({
  jefe: null,
  cargo: null
});

actividad = signal<Actividad>({
  nombre: '',
  tipo: null,
  modalidad: null
});

// Crear formularios individuales
form_cliente = form(this.cliente);
form_actividad = form(this.actividad, (path) => {
  required(path.nombre, { message: 'La actividad es obligatoria' });
});

// En el template, acceder a cada formulario
```

```html
<!-- Cliente -->
<p-select [field]="form_cliente.jefe" [options]="jefes()" />
<p-select [field]="form_cliente.cargo" [options]="cargos()" />

<!-- Actividad -->
<input pInputText [field]="form_actividad.nombre" />
<p-select [field]="form_actividad.tipo" [options]="tipos()" />
```

### Integración con PrimeNG

#### InputNumber

```html
<p-inputnumber
  [field]="formulario.sueldo_actual"
  mode="currency"
  currency="PEN"
  locale="es-PE"
  placeholder="S/ 0.00"
/>
```

#### DatePicker

```html
<p-datepicker
  [field]="formulario.fecha_ingreso"
  placeholder="Seleccione fecha"
  [showIcon]="true"
  dateFormat="dd/mm/yy"
/>
```

#### Select

```html
<p-select
  [field]="formulario.categoria"
  [options]="categorias()"
  optionLabel="nombre"
  optionValue="id"
  placeholder="Seleccione"
  [showClear]="true"
/>
```

### Checklist Forms Signals

Antes de finalizar un formulario, verificar:

- [ ] Se importó `Field` de `@angular/forms/signals`
- [ ] Se usa `form()` para crear el formulario desde una señal
- [ ] Se usa `[field]` en lugar de `[(ngModel)]`
- [ ] Las validaciones se definen con `required()`, `minLength()`, etc.
- [ ] Los errores se muestran con `.touched()` e `.invalid()`
- [ ] Los mensajes de error se iteran con `@for`
- [ ] Se verifica `formulario.valid()` antes de enviar
- [ ] Los campos opcionales no tienen validaciones innecesarias

---

## Patrones Comunes

### 1. Loading State

```typescript
cargando = signal(false);
datos = signal<any[]>([]);

async cargar() {
  this.cargando.set(true);
  try {
    const response = await fetch('/api/data');
    this.datos.set(await response.json());
  } finally {
    this.cargando.set(false);
  }
}
```

### 2. Modal/Dialog con PrimeNG

```typescript
import { DialogModule } from 'primeng/dialog';

visible = signal(false);

mostrarDialog() {
  this.visible.set(true);
}

cerrarDialog() {
  this.visible.set(false);
}
```

```html
<p-dialog
  [visible]="visible()"
  (visibleChange)="visible.set($event)"
  header="Título"
  [modal]="true">
  <p>Contenido del diálogo</p>
  <ng-template pTemplate="footer">
    <p-button label="Cancelar" (onClick)="cerrarDialog()"></p-button>
    <p-button label="Guardar" (onClick)="guardar()"></p-button>
  </ng-template>
</p-dialog>
```

### 3. Tabla con PrimeNG

```typescript
import { TableModule } from 'primeng/table';

datos = signal<any[]>([]);
seleccionado = signal<any>(null);
```

```html
<p-table
  [value]="datos()"
  [(selection)]="seleccionado()"
  selectionMode="single"
  [paginator]="true"
  [rows]="10">
  <ng-template pTemplate="header">
    <tr>
      <th>Nombre</th>
      <th>Email</th>
      <th>Acciones</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-item>
    <tr>
      <td>{{ item.nombre }}</td>
      <td>{{ item.email }}</td>
      <td>
        <p-button icon="pi pi-pencil" (onClick)="editar(item)"></p-button>
      </td>
    </tr>
  </ng-template>
</p-table>
```

---

## Cuándo Aplicar Esta Skill

Aplicar estas directrices siempre que:
- Crees nuevos componentes Angular
- Modifiques componentes existentes
- Implementes formularios
- Agregues funcionalidad con PrimeNG
- Manejes estado reactivo
- Desarrolles servicios
- Apliques estilos con TailwindCSS

## Recursos

- **Documentación PrimeNG**: [.claude/skills/front-angular/resources/PRIMENG_RESUME.md](.claude/skills/front-angular/resources/PRIMENG_RESUME.md)
- **Documentación completa**: [.claude/skills/front-angular/resources/PRIMENG_FULL.md](.claude/skills/front-angular/resources/PRIMENG_FULL.md)
- **Angular Signals**: https://angular.dev/guide/signals
- **TailwindCSS**: https://tailwindcss.com/docs

---

## Checklist de Revisión

Antes de finalizar cualquier componente, verificar:

- [ ] Se usan Signals para todo el estado reactivo
- [ ] El componente es standalone
- [ ] Se consultó PRIMENG_RESUME.md para componentes UI
- [ ] Se importaron correctamente los módulos de PrimeNG
- [ ] Se usan clases de TailwindCSS para layout y espaciado
- [ ] Los formularios usan ReactiveFormsModule con Signals
- [ ] Se usa `inject()` para inyección de dependencias
- [ ] Se usan `input()` y `output()` para props y eventos
- [ ] El código sigue la estructura estándar del proyecto
