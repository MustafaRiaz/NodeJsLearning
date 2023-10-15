const mongoose = require('mongoose');

const InvoiceSchema = mongoose.Schema({
  invoiceNumber:String,
  items:String,
  tax:Number,
  total:Number,
  createdAt:Date
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
