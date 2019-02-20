import model from '../db/models';
const { job, accepted } = model;

class Accepteds {
  // Fetch all the jobs
  static get(req, res) {
    return accepted.findAll({
      attributes: [
        'id',
        'job_id',
        'tradie_id',
      ],
      // include: [
      //   { model: category, attributes: [ 'name' ] },
      //   { model: suburb, attributes: ['name', 'postcode'] }
      // ],
    })
      .then(jobs => res.status(200).send(jobs));
  }

  static create(req, res) {
    const { job_id, status } = req.body
    return accepted.create({
      job_id: job_id,
      tradie_id: '2',
      status: status
    })
    .then( acceptedJob => {
      res.status(200).send({
        message: 'created'
      })
    })
    .catch( err => {
      res.status(400).send(err)
    })
  }
}

export default Accepteds;