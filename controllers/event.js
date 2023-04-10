const Event = require('../models/event')
const asyncHandler = require("express-async-handler");

exports.getEventData = (req, res) => {
    Event.find({})
        .then(events => {
            res.status(200).json({ events })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.postEventData = asyncHandler(async (req, res) => {
    //Get details from request
  const { FullName, email, request, phoneNum } = req.body;

  //Throw error if user details is not filled
  if (!phoneNum || !FullName || !email || !request) {
    res.status(400).json({success: 'false', error: 'Please Fill in all Fields'});
  }

  //Check if user already exists
  const checkUser = await Event.findOne({ email });

  if(err) {
    return res.status(500).json({ success: false, error: 'Something went wrong' })
  }

  //Throw error if user already exists
  if (checkUser) {
    res.status(400).json({ success: false, error: 'Seat reserved with this email already' });
  }

  //Create or Register new User
  const event = await Event.create({
    fullName: fullName,
    email: email,
    request: request,
    phoneNum: phoneNum,
  });
  res.status(200).json({code: 201, description: "Success", msg: `Thank you ${name}, you just reserved a seat!`})
  //Send newly Created User
  if (event) {
    res.send({
      fullName: event.fullName,
      request: event.request,
      email: event.email,
      phoneNum: event.phoneNum,
    });
  } else {
    res.status(400).json({ success: false, error: err });
  }
});
