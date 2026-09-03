const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'gitnews-super-secret-signing-key-2024';

function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

function generateSessionToken() {
  return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
}

function issueToken(user) {
  return jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = { hashPassword, generateSessionToken, issueToken, verifyToken };
