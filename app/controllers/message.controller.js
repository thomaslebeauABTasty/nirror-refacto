import Message from '../models/message.model';

/**
 * Create new message
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function create(req, next) {
  const message = new Message({
    b: req.b
  });

  message.save()
    .then((savedMessage) => {
      console.log("Message saved");
    })
    .catch(e => next(e));
}

export default { create };
