module.exports = app => {
    const courseController = require('../controllers/course.controller');

    app.post('/course', courseController.createNewCourse);

    app.get('/course/:did', courseController.getCourseByDID);

    app.get('/courses', courseController.getAllCourses)

    // app.get('/httpcourse', courseController.displayCourseOnHttp);

    // app.get('/coursejwt', courseController.coursesWithJwt);

    // app.get('/course/:id', courseController.getCourseById);

    // app.put('/course/:id', courseController.updateCourseGrade);
};