# BreakFlow

Este es un proyecto de maquetado en Angular para la aplicación web BreakFLow que utiliza Sass para los estilos, generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 20.3.2.

## Requisitos previos

### Versión de Node.js

Este proyecto requiere Node.js versión 18.0 o superior. Se recomienda usar la versión LTS más reciente.

Para verificar tu versión de Node.js, ejecuta:

```bash
node --version
```

Para verificar tu versión de npm, ejecuta:

```bash
npm --version
```

### Instalación de Node.js

Si no tienes Node.js instalado, puedes descargarlo desde [nodejs.org](https://nodejs.org/) o usar un administrador de versiones:

**Para Windows usando Chocolatey:**

```powershell
# Instalar Chocolatey (si no lo tienes instalado)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Instalar Node.js
choco install nodejs
```

**Para Windows usando Winget:**

```powershell
# Instalar Node.js LTS
winget install OpenJS.NodeJS
```

**Para Linux/macOS usando nvm:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

## Instalación del proyecto

1. Clona el repositorio:

    ```bash
    git clone https://github.com/CarlosRicoS/MISW4302-ux-web.git
    cd MISW4302-ux-web
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Instala Angular CLI globalmente (si no lo tienes instalado):

    ```bash
    npm install -g @angular/cli
    ```

## Ejecución del proyecto

### Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
npm start
```

o

```bash
ng serve
```

Una vez que el servidor esté funcionando, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques cualquiera de los archivos fuente.

## Estructura del proyecto

| URL | Vista | Responsable |
|-----|-------|-------------|
| `http://localhost:4200/login` | [Vista de Login](http://localhost:4200/login) | Carlos Rico |
| `http://localhost:4200/loading` | [Vista de carga](http://localhost:4200/loading) | Angel Henao |
| `http://localhost:4200/program` | [Vista de programa](http://localhost:4200/program) + sidenav y cerrar sesión | Carlos Rico |
| `http://localhost:4200/progress` | [Vista de progreso](http://localhost:4200/progress) + modal de chart expandido | Angel Henao |
