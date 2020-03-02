const express = require('express');
const {
  registerClub,
  approveClub,
  declineClub,
  getAllClubsforAdmin,
  getAllClubsforManager
} = require('../controllers/club');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', protect, registerClub);
router.patch('/:clubId/approve', protect, approveClub);
router.patch('/:clubId/decline', protect, declineClub);
router.get('/admin/all', protect, getAllClubsforAdmin);
router.get('/manager/all', protect, getAllClubsforManager);

module.exports = router;
