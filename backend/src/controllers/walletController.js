const { makeRequest } = require("../config/rapydClient");
const { notifyUsers } = require("../websocket");
const { validationResult } = require("express-validator");

// Utility function to handle errors
const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: error.message });
};

exports.createWallet = async (req, res) => {};

exports.retrieveWallet = async (req, res) => {};

exports.transferFunds = async (req, res) => {};

exports.respondToTransfer = async (req, res) => {};
