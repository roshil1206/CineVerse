import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
} from "@mui/material";

const TheatreModal = ({ open, onClose, isUpdate, theatreData, movies, onSubmit }) => {
  const defaultTheatreData = {
    name: "",
    movieDetails: "",
    showTimes: [],
    price: 0,
  };

  const [formData, setFormData] = React.useState({ ...defaultTheatreData });
  const [errors, setErrors] = React.useState({});

  useEffect(() => {
    if (isUpdate) setFormData({ ...theatreData });
  }, [theatreData, isUpdate]);

  const showTimes = [
    "7:00 AM",
    "9:30 AM",
    "10:00 AM",
    "12:30 PM",
    "1:00 PM",
    "2:30 PM",
    "3:00 PM",
    "5:30 PM",
    "6:00 PM",
    "8:30 PM",
    "9:00 PM",
    "11:30 PM",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    const requiredFields = ["name", "movieDetails", "showTimes", "price"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required.";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData);
    setFormData({ ...defaultTheatreData });
    setErrors({});
    onClose();
  };

  const handleCancel = () => {
    setFormData({ ...defaultTheatreData });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isUpdate ? "Update Movie" : "Create Movie"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
        <FormControl fullWidth margin="normal" error={!!errors.movie}>
          <InputLabel>Movie</InputLabel>
          <Select
            label="Movie"
            name="movieDetails"
            value={formData.movieDetails || ""}
            onChange={handleChange}
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}>
            {movies.map((movie) => (
              <MenuItem key={movie.name} value={movie._id}>
                {movie.name}
              </MenuItem>
            ))}
          </Select>
          {errors.movie && <span>{errors.movie}</span>}
        </FormControl>
        <TextField
          label="Price"
          name="price"
          type="number"
          InputProps={{
            inputProps: {
              min: 0,
            },
          }}
          value={formData.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.price}
          helperText={errors.price}
        />
        <FormControl fullWidth margin="normal" error={!!errors.showTimes}>
          <InputLabel>Show Times</InputLabel>
          <Select
            label="Show Times"
            name="showTimes"
            multiple
            value={formData.showTimes || []}
            onChange={handleChange}
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}>
            {showTimes.map((showTime) => (
              <MenuItem key={showTime} value={showTime}>
                {showTime}
              </MenuItem>
            ))}
          </Select>
          {errors.showTimes && <span>{errors.showTimes}</span>}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
        <Button onClick={handleCancel} variant="outlined" color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TheatreModal;
