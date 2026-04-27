import mongoose, { mongo } from "mongoose";

const employmentSchema = new mongoose.Schema({
  company_name: { type: String, required: true },
  job_title:    { type: String, required: true },
  location:     { type: String, required: true },
  start_date:   { type: Date,   required: true },
  end_date:     { type: Date,   default: null },
  description:  { type: String, default: 'Ingen beskrivning tillgänglig' }
}, {
  timestamps: true
});

const Employment = mongoose.model('Employment', employmentSchema);

export default Employment;