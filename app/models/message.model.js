'use strict';

import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    r /* room */      : { type: String, index: true },
    t /* type */      : { type: String },
    b /* body */      : mongoose.Schema.Types.Mixed,
    d /* date */      : { type: Date, default: Date.now },
    n /* visit num */ : { type: String },
    p /* pageid */    : { type: String }
});

export default mongoose.model('Message', MessageSchema);
