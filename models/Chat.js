var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = mongoose.SchemaTypes.ObjectId;

var ChatSchema = new Schema({
    _author: { type: ObjectId, required: true, ref: 'Person' }
  , created: { type: Date, default: Date.now }
  , message: { type: String }
});

ChatSchema.virtual('isoDate').get(function() {
  return this.created.toISOString();
});

var Chat = mongoose.model('Chat', ChatSchema);

// export the model to anything requiring it.
module.exports = {
  Chat: Chat
};