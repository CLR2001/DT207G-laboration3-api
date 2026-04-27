import express from 'express';
import Employment from '../models/employment.js';
const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                                     GET                                    */
/* -------------------------------------------------------------------------- */
router.get('/', async (req, res) => {
  const employments = await Employment.find({});
  res.json(employments);
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employment = await Employment.findById(id);

    if (!employment) {
      return res.status(404).json({
        error: 'Not found',
        message: `ID not found`
      });
    }

    res.json(employment);

  } catch (error) {
    res.status(500).json({ 
      error: 'Internal error',
      message: error.message 
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                                    POST                                    */
/* -------------------------------------------------------------------------- */
router.post('/', async (req, res) => {
  try {
    const newEmployment = new Employment(req.body);
    const savedEmployment = await newEmployment.save();

    res.status(201).json({
      message: 'Employment saved successfully',
      data: savedEmployment
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation error',
        message: `Inputs didn't validate correctly`,
        details: error.errors 
      });
    }

    res.status(500).json({ 
      error: 'Internal error',
      message: error.message 
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                                     PUT                                    */
/* -------------------------------------------------------------------------- */
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployment = await Employment.findByIdAndUpdate(id, req.body, {
      new: true, 
      runValidators: true
    });

    if (!updatedEmployment) {
      return res.status(404).json({
        error: 'Not found',
        message: `ID not found`
      });
    }

    res.json({
      message: 'Employment updated successfully',
      data: updatedEmployment
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: 'Validation error',
        message: `Inputs didn't validate correctly`,
        details: error.errors 
      });
    }

    res.status(500).json({ 
      error: 'Internal error',
      message: error.message 
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                                   DELETE                                   */
/* -------------------------------------------------------------------------- */
router.delete('/:id', async (req, res) => { 
  try {
    const  { id } = req.params;
    const deletedEmployment = await Employment.findByIdAndDelete(id);
    
    if (!deletedEmployment) {
      return res.status(404).json({
        error: 'Not found',
        message: `ID not found`
      });
    }

    res.json({
      message: 'Employment deleted successfully',
      data: deletedEmployment
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      error: 'Internal error',
      message: error.message 
    });
  }
});

export default router;