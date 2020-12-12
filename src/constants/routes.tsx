// External API routes
export const WEB_SERVICE_API = process.env.REACT_APP_WEB_SERVICE_API
export const WEB_SERVICE_API_LOGIN = `${WEB_SERVICE_API}/login`
export const WEB_SERVICE_API_BUSINESS = `${WEB_SERVICE_API}/empresa_centro`
export const WEB_SERVICE_API_PERSONAL_MENU = `${WEB_SERVICE_API}/menu_personal`
export const WEB_SERVICE_API_GET_PERSONAS = `${WEB_SERVICE_API}/persona`
export const WEB_SERVICE_API_GET_NACIONALITIES = `${WEB_SERVICE_API}/pais/nationality`

export const WEB_SERVICE_API_GET_COUNTRIES = `${WEB_SERVICE_API}/pais/get_paises`


export const WEB_SERVICE_API_GET_COINS = `${WEB_SERVICE_API}/moneda`

// Internal routes
export const PATH_LOGIN = '/login'
export const PATH_MAIN = '/'
export const PATH_REGISTER_PERSON = '/registrar_cliente'
export const PATH_DATOS_TRANSFERENCIA = '/datos_transferencia'
export const PATH_GENERAL_DATA_PHYSICAL_PERSON =
  '/formalizaciones_reg_persona_fisica'
export const PATH_FORMALIZATION_MANAGER = '/gestor_formalizaciones'
export const PATH_FORMALIZATION_MANAGER_VEHICULE = '/vehiculo_formalizar'
export const PATH_CHECK_DATA = '/datos_cheque'
export const PATH_CUSTOMER_RECORD = '/registro_cliente'
