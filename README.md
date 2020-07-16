# walmart-web
## Walmart web buscador de productos basado en NodeJS y React

### Requisitos:

- Docker instalado

### Instrucciones de uso:

1. Descargar repositorio. <br/>
2. Verificar la URL de la API,  la variable de entorno REACT_APP_API_URL en el archivo Dockerfile. <br/>
3. Ingresar a la carpeta desde el terminal y ejecutar "make web-ini". Docker instalará todos los módulos necesarios y quedará arriba ejecutandose.<br/>

 *Consierar que para el presente ejemplo, se estableció un token estático para las consultas* <br/>
 <img src="/others/1.png" /><br/>


### Mas Opciones de Make:
- api-up: Levantar imágen Docker.
- api-ini: Instalar imagen y subir.
- api-reset: Reiniciar imagen.
- api-down: Bajar imágen
- api-install: Instalar imágen.
