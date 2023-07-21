const Screen = require("../models/screenModel");
const response = require("../../utils/response");

// Add a new screen
const addScreen = async (req, res) => {
    try {
        const { screenId, movieName, showTime, ticketPrice, totalSeats } = req.body;
        const bookedSeats = [];

        const screen = new Screen({
            screenId,
            movieName,
            showTime,
            ticketPrice,
            totalSeats,
            bookedSeats,
        });

        await screen.save();
        response(res, 200, true, { message: 'Screen added successfully' });
    } catch (err) {
        response(res, 500, false, { error: 'Failed to add a new screen' });
    }
};

// Update a screen
const updateScreen = async (req, res) => {
    try {
        const { screenId } = req.params.id;
        const updates = req.body;
        const screen = await Screen.findByIdAndUpdate(screenId, updates, { new: true });

        if (!screen) {
            return response(res, 404, false, { error: 'Screen not found' });
        }

        response(res, 200, true, screen);
    } catch (err) {
        response(res, 500, false, { error: 'Failed to update the screen' });
    }
};

// Delete a screen
const deleteScreen = async (req, res) => {
    try {
        const { screenId } = req.params.id;
        const screen = await Screen.findByIdAndDelete(screenId);

        if (!screen) {
            return response(res, 404, false, { error: 'Screen not found' });
        }

        response(res, 200, true, { message: 'Screen deleted successfully' });
    } catch (err) {
        response(res, 500, false, { error: 'Failed to delete the screen' });
    }
};

// Get all screens
const getAllScreens = async (req, res) => {
    try {
      const screens = await Screen.find({});
      response(res, 200, true, screens);
    } catch (err) {
        response(res, 500, false, { error: 'Failed to get all screens' });
    }
  };

// Get all available seats for a specific screen
const getAvailableSeats = async (req, res) => {
    try {
        const { screenId } = req.params.id;
        const screen = await Screen.findById(screenId);

        if (!screen) {
            return response(res, 404, false, { error: 'Screen not found' });
        }

        const { totalSeats, bookedSeats } = screen;
        const availableSeats = [];

        for (let seatNumber = 1; seatNumber <= totalSeats; seatNumber++) {
            if (!bookedSeats.includes(seatNumber)) {
                availableSeats.push(seatNumber);
            }
        }

        response(res, 200, true, availableSeats);
    } catch (err) {
        response(res, 500, false, { error: 'Failed to get available seats' });
    }
};

// Book multiple seats for a specific screen
const bookSeats = async (req, res) => {
    try {
        const { screenId } = req.params.id;
        const { seatNumbers } = req.body;
        const screen = await Screen.findById(screenId);

        if (!screen) {
            return response(res, 404, false, { error: 'Screen not found' });
        }

        const bookedSeats = screen.bookedSeats;

        const seatsToBook = [];
        const alreadyBookedSeats = [];

        seatNumbers.forEach((seatNumber) => {
            if (bookedSeats.includes(seatNumber)) {
                alreadyBookedSeats.push(seatNumber);
            } else {
                seatsToBook.push(seatNumber);
            }
        });

        if (alreadyBookedSeats.length > 0) {
            return response(res, 404, false, {
                error: `Seats ${alreadyBookedSeats.join(', ')} are already booked`,
            });
        }

        seatsToBook.forEach((seatNumber) => {
            bookedSeats.push(seatNumber);
        });

        await screen.save();

        response(res, 200, true, { message: 'Seats booked successfully' });
    } catch (err) {
        response(res, 500, false, { error: 'Failed to book the seats' });
    }
};

// Deselect (unbook) multiple seats for a specific screen
const deselectSeats = async (req, res) => {
    try {
        const { screenId } = req.params.id;
        const { seatNumbers } = req.body;
      const screen = await Screen.findById(screenId);
  
      if (!screen) {
        return response(res, 404, false, { error: 'Screen not found' });
      }
  
      const bookedSeats = screen.bookedSeats;
      const deselectedSeats = [];
  
      seatNumbers.forEach((seatNumber) => {
        const index = bookedSeats.indexOf(seatNumber);
        if (index !== -1) {
          deselectedSeats.push(seatNumber);
          bookedSeats.splice(index, 1);
        }
      });
  
      if (deselectedSeats.length === 0) {
        return response(res, 400, false, { error: 'No seats to deselect' });
      }
  
      await screen.save();
  
      response(res, 200, true, { message: 'Seats deselected successfully' });
    } catch (err) {
        response(res, 500, false, { error: 'Failed to deselect seats' });
    }
  };

module.exports = { addScreen, updateScreen, deleteScreen, getAllScreens, getAvailableSeats, bookSeats, deselectSeats };
