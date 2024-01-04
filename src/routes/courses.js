const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:id/edit', CourseController.edit);
router.get('/:slug', CourseController.show);
router.put('/:id', CourseController.update);
router.patch('/:id/restore', CourseController.restore);
router.delete('/:id', CourseController.delete);
router.delete('/:id/force', CourseController.forceDelete);








module.exports = router;
