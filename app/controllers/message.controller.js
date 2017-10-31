import Message from '../models/message.model';

/**
 * Create new message
 */
function create(req, next) {
  const message = new Message({
    b: req.b
  });

  message.save()
    .then((savedMessage) => {
      console.log('Message saved');
    })
    .catch(e => next(e));
}



export default { create };
