# Proyecto de Angular - PAGOS 360

Este es un proyecto de Angular que incluye un módulo de login básico y un modulo de Cobranzas. El objetivo principal es permitir que los usuarios inicien sesión en la aplicación y accedan a contenido protegido el cual despliega una tabla con registros de los reportes de Cobranzas de PAGOS 360 según corresponda al día de la fecha seleccionada.

## IMPORTANTE

Este proyecto no esta realizado una autenticación con una API real, de igual forma esta simulando el mismo caso utilizando las credenciales entregadas para la tarea, al ingresar al login, puede escribir datos de prueba que cumplan con el formato válido para autenticarse y asi obtener el token que necesita para la consulta a la API de PAGOS360 el cual se está seteando en el localStorage de su dispositivo. 

## Requisitos previos

Antes de comenzar, asegurarse de tener instalado lo siguiente:
- Node.js: https://nodejs.org/
- Angular CLI: Instálalo globalmente ejecutando `npm install -g @angular/cli`

## Instalación

Sigua estos pasos para instalar y configurar el proyecto localmente:

1. Clone este repositorio.
2. Navege al directorio del proyecto: `cd pagos360`
3. Instale las dependencias: `npm install`

## Configuración

Antes de ejecutar la aplicación, necesitará realizar algunas configuraciones adicionales:

1. **Ambiente**: Configure las variables de entorno necesarias, en este caso la API_PRUEBA_PAGOS(se encuentra previamente seteada para fines practicos de desarrollo y producción).


## Servidor de Desarrollo

Para ejecutar el proyecto localmente, utilize el siguiente comando: ng serve (si agrega la flag -o abrira su ventana de navegador predeterminado)

Una vez que la compilación esté completa, podrá acceder a la aplicación en http://localhost:4200/ desde su navegador.

## Build

Esta aplicación proporciona una interfaz simple para que los usuarios ingresen sus credenciales y accedan a la misma. Sim embargo es importante mencionar que este es un ejemplo básico y no debe utilizarse en un entorno de producción sin las debidas mejoras en seguridad.
De igual manera en caso de querer realizar el build de la aplicacion para producción, el mismo se realiza con el comando: ng build 

## Gracias por tomarse el tiempo de revisar mi desafío, intenté plasmar en el menor tiempo la mayor cantidad de conocimiento posbile dada la tarea propuesta, espero sea de su agrado y para cualquier colaboración o comentario me encuentro a su disposición. Saludos Mario