const Bootcamp = require('../models/Bootcamp');
// @description Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ sucess: true, data: bootcamps, count: bootcamps });
  } catch (err) {
    res.status(400).json({ sucess: false, msg: 'Show all bootcamps' });
  }
};

// @description Get single bootcamps
// @route  GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    res.status(200).json({ sucess: true, data: bootcamp });
    if (!bootcamp) {
      return res.status(400).json({ sucess: false });
    }
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

// @description Create new bootcamp
// @route  POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({ sucess: true, data: bootcamp });
  } catch {
    res.status(400).json({ sucess: false });
  }
};

// @description Update bootcamp
// @route  PUT /api/v1/bootcamp/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    res.status(400).json({ sucess: false, data: bootcamp });
  }
  res.status(200).json({ sucess: true, data: bootcamp });
};

// @description Delete bootcamp
// @route  PUT /api/v1/bootcamp/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    res.status(400).json({ sucess: false, data: {} });
  }
  res.status(200).json({ sucess: true, data: bootcamp });
};
