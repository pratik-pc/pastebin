import express from "express";
import mongoose from "mongoose";
import Text from "../models/Text.js";

export const createText = async (req, res) => {
  const newText = new Text(req.body)

  try {
    //mongoose.Collection.createIndex({createdAt: savedText.createdAt}, {expireAfterSeconds: savedText.expireAt})
    const savedText = await newText.save();
    res.status(200).json(savedText);
    
  } catch (err) {
    res.status(500).json(err)
  }
};

export const getText = async (req, res) => {
  try {
    const text = await Text.findById(req.params.id);
    res.status(200).json(text);
  } catch (err) {
    res.status(500).json(err)
  }
};