import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";



function ContactForm() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container id="Contact Form" className="contact-form-container">
      <Box component="form" className="contact-form-box">
        <Typography variant="h2">Contact Form</Typography>

        <Grid xs={12} sm={6} item className="contact-form-grid">
          <TextField id="fullName" name="fullName" type="text" label="Name" placeholder="Enter your name" variant="filled" fullWidth required>Name</TextField>
        </Grid>

        <Grid className="contact-form-grid">
          <TextField id="email" name="email" type="email" label="Email" placeholder="Enter email address" variant="filled" fullWidth required>Email</TextField>
        </Grid>

        <Grid className="contact-form-grid">
          <TextField id="message" name="message" label="Message" multiline rows={5} placeholder="Enter your message" fullWidth variant="filled" required>Message</TextField>
        </Grid>

        <Button type="submit" variant="contained" className="contact-form-button" fullWidth>Submit</Button>
      </Box>
    </Container>
  )
}

export default ContactForm;
