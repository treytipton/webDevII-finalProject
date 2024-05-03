import { Router, Request, Response } from 'express';
import User from '../models/userModel'; // Adjust the path as necessary
import bcrypt from 'bcryptjs';

const router = Router();

//this works fine
// POST endpoint to create a new user
// router.post('/users', (req, res) => {
//   //Ensure username and password are provided
//   if (!req.body.username || !req.body.password) {
//     return res.status(400).json({ error: 'Username and password are required' });
//   }

//   const newUser = new User(req.body);

//   newUser.save()
//     .then(user => res.status(201).json(user))
//     .catch(err => {
//       console.error('User creation failed:', err);  // Log the error
//       // Customize error message if necessary, or keep as is for detailed feedback during development
//       res.status(400).json({ error: err.message });
//     });
// });

// POST endpoint to create a new user
router.post('/users', async (req: Request, res: Response) => {
  // Ensure username and password are provided
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const salt = await bcrypt.genSalt(10);  // Generate salt
    const hashedPassword = await bcrypt.hash(req.body.password, salt);  // Hash the password

    const newUser = new User({
      username: req.body.username,
      password: hashedPassword
    });

    await newUser.save();  // Save the new user
    res.status(201).json(newUser);  // Respond with the new user object
  } catch (err) {
    console.error('User creation failed:', err);  // Log the error
    res.status(400).json({ error: err });  // Respond with error message
  }
});

//bunch of errors
// POST endpoint for user login
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    console.log('User found:', user);  // Log the user object to see what is found
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch);  // Log whether the passwords matched
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user: { username: user.username } });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Error logging in', error: err });
  }
});


export default router;
