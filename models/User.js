const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    resumePath: String,
  });
  
  const User = mongoose.model('User', UserSchema);