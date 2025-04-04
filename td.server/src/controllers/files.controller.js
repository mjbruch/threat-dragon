import fs from 'fs';
import path from 'path';

const MODELS_DIR = '/models';

export const saveFile = (req, res) => {
  const filePath = path.join(MODELS_DIR, req.params.filename);
  fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
  res.status(200).json({ message: `Saved ${req.params.filename}` });
};

export const loadFile = (req, res) => {
  const filePath = path.join(MODELS_DIR, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }
  const json = fs.readFileSync(filePath);
  res.json(JSON.parse(json));
};
