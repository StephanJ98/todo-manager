# Todo Manager

## Requisitos

- Cuenta gratuita en [Vercel](https://vercel.com/dashboard).
- Cuenta gratuita en [appwrite](https://cloud.appwrite.io).

## Pasos a seguir

1. En appwrite crear un nuevo proyecto del tipo `Web App`.
2. En un primer momento usar como holstname `localhost`.
3. Pulsar en `Skip optional setup`.
4. Una vez en el dashboard
    1. Copiamos el `Project ID` y lo guardamos siguiente forma `NEXT_PUBLIC_APPWRITE_PROJECT_ID='cadena copiada'`.
    2. Creamos una nueva database y copiamos el `Database ID` y lo guardamos de la siguiente forma `NEXT_PUBLIC_DATABASE_ID='cadena copiada'`.
    3. Dentro de la database creada creamos una collecion `todos`, copiamos el `Collection ID` y lo guardamos de la siguiente forma `NEXT_PUBLIC_TODOS_COLLECTION_ID='cadena copiada'`.
    4. Dentro de Storage creamos un nuevo bucket llamado `images`, copiamos el `Bucket ID` y lo guardamos de la siguiente forma `NEXT_PUBLIC_BUCKET_ID='cadena copiada'`.
5. Crear un fork del repositorio [todo-manager](https://github.com/StephanJ98/todo-manager).
6. En la pagina de vercel.
    1. Creamos un nuevo proyecto vercel desde el repositorio de Github.
    2. Dentro del proyecto que se ha creado vamos a `/settings/environment-variables`
    3. Añadimos una a una las variables creadas y guardadas en appwrite.
    4. Añadimos una nueva a mayores que sera nuestra contraseña de acceso, de la forma `NEXT_PUBLIC_PASS='nuestra contraseña'`.
    5. Vamos a `/deployments` y en el unico deploy que deberia apareces pulsamos en los 3 puntos y `redeploy`.
    > En Vercel, se puede ir a `/settings/domains` y pulsando en `edit` modificar la url de publicación.
7. Volvemos a appwrite.
    1. En el dashboard seleccionar la plataforma que hemos creado.
    2. En `Update Hostname` pegamos la url donde vercel a publicado la página.
