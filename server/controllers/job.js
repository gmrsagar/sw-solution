import model from '../db/models';
const { job, category, suburb } = model;

class Jobs {
  // Fetch all the jobs
  static get(req, res) {
    return job.findAll({
      attributes: [
        'contact_name',
        'status',
        'created_at',
        'id',
        'description',
        'price',
        'contact_email',
        'contact_phone',
        
      ],
      include: [
        { model: category, attributes: [ 'name' ] },
        { model: suburb, attributes: ['name', 'postcode'] }
      ],
    })
      .then(jobs => res.status(200).send(jobs));
  }

  // Update the job status
  static update(req, res) {
    const { status } = req.body
    return job.findById(req.params.jobId).then( job => {
      job.update({
        status: status
      })
      .then( updatedJob => {
        res.status(200).send({ 
          message: 'Updated Successfully',
      })
      })
      .catch(error => {
        res.status(400).send(error)
      })
      .catch(error => {
        res.status(400).send(error)
      });
    })
  }
}

export default Jobs;