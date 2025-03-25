import User from "../models/UserModel.js";

// GET
async function getUsers(req, res) {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
async function createUser(req, res) {
  try {
    const inputResult = req.body;
    await User.create(inputResult);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getUsers, createUser };

export const updateUser = async(req, res) => {
  try{
    await User.update(req.body, {
    where:{
      id: req.params.id
    }
  });
  res.status(200).json({msg: "User Update"});
  }catch (error){
    console.log(error.message);
  }
}

export const deleteUser = async(req, res) => {
  try{
    await User.destroy({
    where:{
      id: req.params.id
    }
  });
  res.status(200).json({msg: "User Deleted"});
  }catch (error){
    console.log(error.message);
  }
}
  
