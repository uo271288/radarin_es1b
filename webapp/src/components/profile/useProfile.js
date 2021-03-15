import { useLDflex, useWebId } from "@solid/react";

export default (webId) => {

    //WebId es la direccion del perfil de solid logueado
    //Hace consultas a la información del perfil de solid
    //name es el nombre de del perfil
    //fn es el nombre del POD
    //photo es la foto de perfil de solid
    const [name, namePending, nameError] = useLDflex(`[${webId}].name`);
    const [fn, fnPending, fnError] = useLDflex(`[${webId}].vcard_fn`);
    const [image, imagePending, imageError] = useLDflex(`[${webId}].image`);
    const [photo, photoPending, photoError] = useLDflex(`[${webId}].vcard_hasPhoto`);
    const pending = namePending || imagePending || fnPending || photoPending;
    const error = nameError || imageError || fnError || photoError;
    const loggedUser = useWebId();
    return {
        webId,
        loggedUserWebID: loggedUser,
        pending,
        error,
        fullName: name || fn,
        imageSrc: image || photo
    }
}