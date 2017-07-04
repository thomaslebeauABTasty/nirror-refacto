'use strict';

import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    r /* room */   : { type: String, index: true },
    t /* type */    : { type: String },
    b /* body */    : { type: String }
    d /* date */    : { type: Date, default: Date.now },
    p /* pageid */  : { type: String }
});

export default mongoose.model('Message', MessageSchema);
