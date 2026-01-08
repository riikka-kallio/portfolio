import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";



function ContactForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            // Use the Next.js API route (same origin) instead of an absolute localhost URL
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: fullName,
                    email: email,
                    message: message,
                }),
            });

            const data = await res.json();
            console.log(data);

            if (res.ok && data.status === 'success') {
                alert('I have received your message. I will reach out to you as soon as possible.');
                setFullName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Oops. Something went wrong. Please try again.');
            }
        } catch (error) {
            console.log(error);
            alert('Network error. Please try again later.');
        }
    };

    return (
        <Container id="Contact Form" className="contact-form-container">
            <Box component="form" onSubmit={handleSubmit} className="contact-form-box">
                <Typography variant="h2">
                    Contact Form
                </Typography>

                <FormControl variant="filled" className="contact-form-grid">
                    <InputLabel htmlFor="fullName" required>Name</InputLabel>
                    <FilledInput
                        onChange={(e) => setFullName(e.target.value)}
                        name="fullName"
                        id="fullName"
                        placeholder="Enter your full name here"
                        type="text"
                        value={fullName}
                    />
                </FormControl>

                <FormControl variant="filled" className="contact-form-grid">
                    <InputLabel htmlFor="email" required>Email</InputLabel>
                    <FilledInput
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        placeholder="Enter your email address here"
                        type="email"
                        value={email}
                    />
                </FormControl>

                <FormControl variant="filled" className="contact-form-grid">
                    <InputLabel htmlFor="message" required>Message</InputLabel>
                    <FilledInput
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        id="message"
                        placeholder="Enter your message here"
                        type="text"
                        value={message}
                        multiline
                        rows={5}
                    />
                </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    className="contact-form-button"
                    fullWidth>
                    Submit</Button>
            </Box>
        </Container>
    )
}

export default ContactForm;