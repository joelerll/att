module.exports = ({ mongoSchema, logger }) => {
  let PreguntaEstudiante = mongoSchema.PreguntaEstudiante
  let Estudiante = mongoSchema.Estudiante
  let Profesor = mongoSchema.Profesor
  const proto = {
    crearParalelo({ codigo, materia, nombre, termino, anio }) {

    },
    anadirEstudianteAParalelo({ correo }) {

    },
    anadirProfesorAParalelo({ correo }) {

    },
    eliminarEstudiante({ correo }) {
      // eliminarlo de paralelo tambien
    },
    cambiarParaleloAEstudiante({ correo }) {
      // sin cambiar el id
    },
    crearEstudiante({ correo, matricula, nombres, apellidos }) {
      return new Promise(function(resolve, reject) {
        let estudiante = new Estudiante({ correo, matricula, nombres, apellidos })
        estudiante.crearEstudiante()
          .then(() => {
            resolve(estudiante)
          }).catch(err => logger.error(err))
      })
    },
    crearProfesor({ correo, tipo, nombres, apellidos }) {
      return new Promise(function(resolve, reject) {
        let profesor = new Profesor({ correo, tipo, nombres, apellidos })
        profesor.crearProfesor()
          .then(() => {
            resolve(profesor)
          }).catch(err => logger.error(err))
      })
    },
    obtenerDatosEstudiantePorCorreo({ correo }) {
      // FIXME: test
      // TODO: enviar datos del paralelo
      return new Promise(function(resolve, reject) {
        Estudiante.obtenerEstudiantePorCorreo({ correo })
          .then(estudiante => {
            resolve(estudiante)
          }).catch(err => logger.error(err))
      })
    },
    obtenerDatosProfesorPorCorreo({ correo }) {
      // FIXME: test
      // TODO: enviar los paralelos
      // TODO: como hacer cuando el profesor tenga mas de un paralelo?
      return new Promise(function(resolve, reject) {
        Profesor.obtenerProfesorPorCorreo({ correo })
          .then(estudiante => {
            resolve(estudiante)
          }).catch(err => logger.error(err))
      })
    },
    crearPreguntaEstudiante({ texto, paraleloId, creador: { _id, correo, matricula, nombres, apellidos } }) {
      // TODO: anadir a estudiante la lista de preguntas y a las preguntas de paralelo
      return new Promise(function(resolve, reject) {
        let pregunta = new PreguntaEstudiante({ texto, paralelo: paraleloId, 'creador': { _id, correo, nombres, apellidos } })
        pregunta.crearPreguntaEstudiante()
          .then(preguntaCreda => {
            resolve(pregunta)
          }).catch(err => logger.error(err))
      })
    },
    obtenerPreguntasEstudiantesPorParalelo({ paraleloId }) {
      return new Promise(function(resolve, reject) {
        PreguntaEstudiante.ObtenerPreguntasEstudiantesPorParalelo({ paraleloId })
          .then((preguntas) => {
            resolve(preguntas)
          }).catch(err => logger.error(err))
      })
    },
    crearPreguntaProfesorYHabilitarla({ texto, paraleloId, creador: { _id, correo, matricula, nombres, apellidos } }) {

    },
    crearRespuestaEstudiante({ text, preguntaId, paraleloId, creador: { _id, correo, matricula, nombres, apellidos } }) {

    }
  }
  return Object.assign(Object.create(proto), {})
}