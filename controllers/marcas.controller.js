import repository from "../repositories/marcas.repository";

const findAll = async (req, resp) => {
  const respuesta = await repository.findAll();
  return sendResponse(respuesta, "No se encontró.", 404, resp);
}

const create = async (req, resp) => {
  const { usuarioId, items } = req.body;

  if (!usuarioId || !Array.isArray(items) || items.length === 0)
    return sendResponse(null, "Se requiere usuarioId y al menos un item.", 400, resp);

  const respuesta = await repository.createConDetalles({ usuarioId, items });

  return sendResponse(respuesta, "No se pudo crear.", 400, resp);
}