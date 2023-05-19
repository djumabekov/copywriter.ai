import TemplateModel from '../models/Template.js';

export const getTemplate = async (req, res) => {
  try {
    const result = await TemplateModel.findOne({
      template: req.body.template,
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить шаблон',
    });
  }
};

export const saveTemplate = async (req, res) => {
  try {
    const template = new TemplateModel({
      title: req.body.title,
      theme: req.body.theme,
      company: req.body.company,
      context: req.body.context,
      target: req.body.target,
      tone: req.body.tone,
      template: req.body.template,
    });

    const result = await template.save();

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось сохранить шаблон',
    });
  }
};
