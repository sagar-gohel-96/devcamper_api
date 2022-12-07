// @description Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: 'Show all bootcamps', hello: req.hello });
};

// @description Get single bootcamps
// @route  GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "Show  bootcamp" });
};

// @description Create new bootcamp
// @route  POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "Create new bootcamp" });
};

// @description Update bootcamp
// @route  PUT /api/v1/bootcamp/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Upadte bootcamp ${req.params.id} ` });
};

// @description Delete bootcamp
// @route  PUT /api/v1/bootcamp/:id
// @access  Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id} ` });
};
