import ChatModel from '../models/Chat.js';
import UserModel from '../models/User.js';

export const saveResult = async (req, res) => {
  try {
    const chat = new ChatModel({
      response: req.body.response,
      category: req.body.category,
      type: req.body.type,
    });

    const user = await UserModel.findById(req.body.userId);

    chat.userId = user._id;
    const result = await chat.save();

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось сохранить результат',
    });
  }
};

export const getSavedResults = async (req, res) => {
  try {
    const result = await ChatModel.find({
      userId: req.body.userId,
      category: req.body.category,
      type: req.body.type,
    });

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить результат',
    });
  }
};

export const delFromSavedResults = async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await ChatModel.deleteOne({ _id: req.params.id });
    console.log('result', result);
    res.json(result.deletedCount);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось удалить пост',
    });
  }
};
