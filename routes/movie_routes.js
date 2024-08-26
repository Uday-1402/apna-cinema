const express=require('express');
const router=express.Router();
const{homepage,bookingpage,paymentpage,payment,upcoming,user,ticket,cab,restaurant,verify}=require("../controllers/movie_controller");

router.route('/home').get(homepage); 
router.route('/').get(homepage);


//now showing
router.route('/ruslaan').get(bookingpage);
router.route('/ruslaan/cab').get(cab);
router.route('/ruslaan/restaurant').get(restaurant);
router.route('/ruslaan/payment').get(paymentpage);
router.route('/ruslaan').post(payment);

router.route('/maidaan').get(bookingpage);
router.route('/maidaan/cab').get(cab);
router.route('/maidaan/restaurant').get(restaurant);
router.route('/maidaan/payment').get(paymentpage);
router.route('/maidaan').post(payment);

router.route('/bademiyaan').get(bookingpage);
router.route('/bademiyaan/cab').get(cab);
router.route('/bademiyaan/restaurant').get(restaurant);
router.route('/bademiyaan/payment').get(paymentpage);
router.route('/payment').post(payment);




//upcoming router
router.route('/deadpool').get(upcoming);
router.route('/ghostbuster').get(upcoming);
router.route('/kungfu').get(upcoming);



//router for tickets
router.route('/user').get(user);
router.route('/verify').get(verify);

router.route('/ticket').get(ticket);


// router.route('/contact').get(contact); 
// router.route('/contact').post(usermessage); 
// router.route('/about').get(about); 
// router.route('/gallery').get(gallery); 

module.exports = router;