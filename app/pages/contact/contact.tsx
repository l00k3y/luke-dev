import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

import "./contact.css";

const ContactPage = () => {
  return (
    <main>
      <div className="contact-page">
        <Box flexDirection={"column"} display="flex" gap={2} flex={1}>
          <Typography variant="h5" component="h1">
            Contact Me
          </Typography>
          <Typography variant="body2" component="p">
            If you have any questions or would like to get in touch, please feel
            free to reach out to me via email using the form to the right or
            through my social media channels.
          </Typography>
        </Box>

        <Box
          flexDirection={"column"}
          display="flex"
          gap={4}
          flex={1}
          className="contact-form">
          <TextField
            required
            id="name-required"
            label="Name"
            // defaultValue="Hello World"
            variant="standard"
          />
          {/* <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl> */}
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email-input" type="email" />
            <FormHelperText>Your email will never be shared</FormHelperText>
          </FormControl>
          {/* </Box> */}

          <FormControl>
            <InputLabel htmlFor="message">Message</InputLabel>
            <Input id="message-input" type="text" multiline />
          </FormControl>

          <TextareaAutosize
            maxRows={4}
            aria-label="contact message"
            placeholder="Message me with website inquiries, freelance work, or just to say hi!"
            minRows={4}
            className="contact-textarea"
          />

          <FormControl variant="outlined">
            <Input id="submit" type="submit" />
          </FormControl>
        </Box>
      </div>
    </main>
  );
};

export default ContactPage;
