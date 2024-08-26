const { movie } = require("../db/movielist");
const { customer } = require("../db/movielist");
const { upmovie } = require("../db/movielist");
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.databaseurl);
const database = client.db("Movie");
const db = database.collection("movies");
const Razorpay = require('razorpay');
const nodemailer = require('nodemailer');






const homepage = async (req, res) => {

    movie.find({})
        .then(data => {
            upmovie.find({}).then(updata => {

                res.status(200).render('home.ejs', { moviedata: data, upmoviedata: updata }
                );
            })
        });

}




const bookingpage = async (req, res, next) => {

    var moviename = req.url.toString();
    moviename = moviename.replace('/', '');

    movie.find({ url: moviename }).then(data => {

        res.render('bookingpage.ejs', { moviedata: data[0] });
    })


}

const cab = async (req, res, next) => {
    var moviename = req.url.toString();
    moviename = moviename.replace('/', '');
    moviename = moviename.replace('/cab', '');

    movie.find({ url: moviename }).then(data => {

        res.render('cab.ejs', { moviedata: data[0] });
    })
}

const restaurant = async (req, res, next) => {
    var moviename = req.url.toString();
    moviename = moviename.replace('/', '');
    moviename = moviename.replace('/restaurant', '');

    movie.find({ url: moviename }).then(data => {

        res.render('restaurant.ejs', { moviedata: data[0] });
    })
}


const paymentpage = async (req, res) => {
    var moviename = req.url.toString();
    moviename = moviename.replace('/payment', '');
    moviename = moviename.replace('/', '');
    movie.find({ url: moviename }).then(data => {
        res.render('paymentpage.ejs', { moviedata: data[0] });

    });

}
const payment = async (req, res) => {
    var myData = new customer(req.body);
    // customer.findOne({ })
    await myData.save().then(() => {
        var selseat = req.body.selSeat;
        var mname = req.body.moviename;
        for (var i = 0; i < selseat.length; i = i + 3) {
            var filter
            var updateOne
            var seatno = selseat[i] + selseat[i + 1];
            if (i + 2 < selseat.length && selseat[i + 2] != " ") {
                seatno = seatno + selseat[i + 2];
                i = i + 1;
            }

            if (seatno == "A1") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A1": 2
                    },
                }
            }
            else if (seatno == "A2") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A2": 2
                    },
                }
            }
            else if (seatno == "A3") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A3": 2
                    },
                }
            }
            else if (seatno == "A4") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A4": 2
                    },
                }
            }
            else if (seatno == "A5") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A5": 2
                    },
                }
            }
            else if (seatno == "A6") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A6": 2
                    },
                }
            }
            else if (seatno == "A7") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A7": 2
                    },
                }
            }
            else if (seatno == "A8") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A8": 2
                    },
                }
            }
            else if (seatno == "A9") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A9": 2
                    },
                }
            }
            else if (seatno == "A10") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A10": 2
                    },
                }
            }
            else if (seatno == "A11") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A11": 2
                    },
                }
            }
            else if (seatno == "A12") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.A12": 2
                    },
                }
            }
            else if (seatno == "B1") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B1": 2
                    },
                }
            }
            else if (seatno == "B2") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B2": 2
                    },
                }
            }
            else if (seatno == "B3") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B3": 2
                    },
                }
            }
            else if (seatno == "B4") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B4": 2
                    },
                }
            }
            else if (seatno == "B5") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B5": 2
                    },
                }
            }
            else if (seatno == "B6") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B6": 2
                    },
                }
            }
            else if (seatno == "B7") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B7": 2
                    },
                }
            }
            else if (seatno == "B8") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B8": 2
                    },
                }
            }
            else if (seatno == "B9") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B9": 2
                    },
                }
            }
            else if (seatno == "B10") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B10": 2
                    },
                }
            }
            else if (seatno == "B11") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B11": 2
                    },
                }
            } else if (seatno == "B12") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.B12": 2
                    },
                }
            }
            else if (seatno == "C1") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C1": 2
                    },
                }
            }
            else if (seatno == "C2") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C2": 2
                    },
                }
            }
            else if (seatno == "C3") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C3": 2
                    },
                }
            }
            else if (seatno == "C4") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C4": 2
                    },
                }
            }
            else if (seatno == "C5") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C5": 2
                    },
                }
            }
            else if (seatno == "C6") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C6": 2
                    },
                }
            }
            else if (seatno == "C7") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C7": 2
                    },
                }
            }
            else if (seatno == "C8") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C8": 2
                    },
                }
            }
            else if (seatno == "C9") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C9": 2
                    },
                }
            }
            else if (seatno == "C10") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C10": 2
                    },
                }
            }
            else if (seatno == "C11") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C11": 2
                    },
                }
            }
            else if (seatno == "C12") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.C12": 2
                    },
                }
            }
            else if (seatno == "D1") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D1": 2
                    },
                }
            }
            else if (seatno == "D2") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D2": 2
                    },
                }
            }
            else if (seatno == "D3") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D3": 2
                    },
                }
            }
            else if (seatno == "D4") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D4": 2
                    },
                }
            }
            else if (seatno == "D5") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D5": 2
                    },
                }
            }
            else if (seatno == "D6") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D6": 2
                    },
                }
            }
            else if (seatno == "D7") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D7": 2
                    },
                }
            }
            else if (seatno == "D8") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D8": 2
                    },
                }
            }
            else if (seatno == "D9") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D9": 2
                    },
                }
            }
            else if (seatno == "D10") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D10": 2
                    },
                }
            }
            else if (seatno == "D11") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D11": 2
                    },
                }
            }
            else if (seatno == "D12") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.D12": 2
                    },
                }
            }
            else if (seatno == "E1") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E1": 2
                    },
                }
            }
            else if (seatno == "E2") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E2": 2
                    },
                }
            }
            else if (seatno == "E3") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E3": 2
                    },
                }
            }
            else if (seatno == "E4") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E4": 2
                    },
                }
            }
            else if (seatno == "E5") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E5": 2
                    },
                }
            }
            else if (seatno == "E6") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E6": 2
                    },
                }
            }
            else if (seatno == "E7") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E7": 2
                    },
                }
            }
            else if (seatno == "E8") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E8": 2
                    },
                }
            }
            else if (seatno == "E9") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E9": 2
                    },
                }
            }
            else if (seatno == "E10") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E10": 2
                    },
                }
            }
            else if (seatno == "E11") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E11": 2
                    },
                }
            }
            else if (seatno == "E12") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.E12": 2
                    },
                }
            }
            else if (seatno == "F1") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F1": 2
                    },
                }
            }
            else if (seatno == "F2") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F2": 2
                    },
                }
            }
            else if (seatno == "F3") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F3": 2
                    },
                }
            }
            else if (seatno == "F4") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F4": 2
                    },
                }
            }
            else if (seatno == "F5") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F5": 2
                    },
                }
            }
            else if (seatno == "F6") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F6": 2
                    },
                }
            }
            else if (seatno == "F7") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F7": 2
                    },
                }
            }
            else if (seatno == "F8") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F8": 2
                    },
                }
            }
            else if (seatno == "F9") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F9": 2
                    },
                }
            }
            else if (seatno == "F10") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F10": 2
                    },
                }
            }
            else if (seatno == "F11") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F11": 2
                    },
                }
            }
            else if (seatno == "F12") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.F12": 2
                    },
                }
            }
            else if (seatno == "G1") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G1": 2
                    },
                }
            }
            else if (seatno == "G2") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G2": 2
                    },
                }
            }
            else if (seatno == "G3") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G3": 2
                    },
                }
            }
            else if (seatno == "G4") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G4": 2
                    },
                }
            }
            else if (seatno == "G5") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G5": 2
                    },
                }
            }
            else if (seatno == "G6") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G6": 2
                    },
                }
            }
            else if (seatno == "G7") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G7": 2
                    },
                }
            }
            else if (seatno == "G8") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G8": 2
                    },
                }
            }
            else if (seatno == "G9") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G9": 2
                    },
                }
            }
            else if (seatno == "G10") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G10": 2
                    },
                }
            }
            else if (seatno == "G11") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G11": 2
                    },
                }
            }
            else if (seatno == "G12") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.G12": 2
                    },
                }
            }
            else if (seatno == "H1") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H1": 2
                    },
                }
            }
            else if (seatno == "H2") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H2": 2
                    },
                }
            }
            else if (seatno == "H3") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H3": 2
                    },
                }
            }
            else if (seatno == "H4") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H4": 2
                    },
                }
            }
            else if (seatno == "H5") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H5": 2
                    },
                }
            }
            else if (seatno == "H6") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H6": 2
                    },
                }
            }
            else if (seatno == "H7") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H7": 2
                    },
                }
            }
            else if (seatno == "H8") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H8": 2
                    },
                }
            }
            else if (seatno == "H9") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H9": 2
                    },
                }
            }
            else if (seatno == "H10") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H10": 2
                    },
                }
            }
            else if (seatno == "H11") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H11": 2
                    },
                }
            }
            else if (seatno == "H12") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.H12": 2
                    },
                }
            }
            else if (seatno == "I1") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I1": 2
                    },
                }
            }
            else if (seatno == "I2") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I2": 2
                    },
                }
            }
            else if (seatno == "I3") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I3": 2
                    },
                }
            }
            else if (seatno == "I4") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I4": 2
                    },
                }
            }
            else if (seatno == "I5") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I5": 2
                    },
                }
            }
            else if (seatno == "I6") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I6": 2
                    },
                }
            }
            else if (seatno == "I7") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I7": 2
                    },
                }
            }
            else if (seatno == "I8") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I8": 2
                    },
                }
            }
            else if (seatno == "I9") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I9": 2
                    },
                }
            }
            else if (seatno == "I10") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I10": 2
                    },
                }
            }
            else if (seatno == "I11") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I11": 2
                    },
                }
            } else if (seatno == "I12") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.I12": 2
                    },
                }
            }
            else if (seatno == "J1") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J1": 2
                    },
                }
            }
            else if (seatno == "J2") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J2": 2
                    },
                }
            }
            else if (seatno == "J3") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J3": 2
                    },
                }
            }
            else if (seatno == "J4") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J4": 2
                    },
                }
            }
            else if (seatno == "J5") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J5": 2
                    },
                }
            }
            else if (seatno == "J6") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J6": 2
                    },
                }
            }
            else if (seatno == "J7") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J7": 2
                    },
                }
            }
            else if (seatno == "J8") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J8": 2
                    },
                }
            }
            else if (seatno == "J9") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J9": 2
                    },
                }
            }
            else if (seatno == "J10") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J10": 2
                    },
                }
            }
            else if (seatno == "J11") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J11": 2
                    },
                }
            }
            else if (seatno == "J12") {
                filter = { "moviename": mname };
                updateOne = {
                    $set: {
                        "seats.0.J12": 2
                    },
                }
            }
            const result = db.findOneAndUpdate(filter, updateOne);
        }

            //Nodemailer via email

        
            let mailTransporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.mailuserId,
                    pass: process.env.mailpassword
                }
            });

        let mailDetails = {
            from: 'cinemaapna8@gmail.com',
            to: myData.email,
            subject: 'Ticket Confirmation',
            text: 'Your ticket has been confirmed to check your ticket click on on the given link "http://localhost:3000/user"'
        };

        

        

            mailTransporter
                .sendMail(mailDetails,
                    function (err, data) {
                        if (err) {
                            console.log('Error Occurs', err);
                        } else {
                            console.log('Email sent successfully');
                        }
                    });



            movie.find({})
                .then(data => {
                    upmovie.find({}).then(updata => {
                        res.status(200).render('home.ejs', { moviedata: data, upmoviedata: updata });
                    })
                });
        }).catch((e) => {
            console.log(e);
            res.status(400).send("Item was not saved to the database");
        });

}
const upcoming = async (req, res, next) => {

    var moviename = req.url.toString();
    moviename = moviename.replace('/', '');

    upmovie.find({ url: moviename }).then(data => {

        res.render('upcoming.ejs', { moviedata: data[0] });
    });
}

const user = async (req, res) => {

    customer.find({}).then(data => {
        res.status(200).render('user.ejs');
    })
}

const verify = async (req, res, next) => {
    var number = req.query.phone;
    var check = customer.find({ phone: number });
    customer.find({ phone: number }).then(data => {
        if (data.length == 0) {
            movie.find({})
                .then(data => {
                    upmovie.find({}).then(updata => {

                        res.status(200).render('home.ejs', { moviedata: data, upmoviedata: updata });
                    })
                })
        }
        else {



            res.status(200).render('verify.ejs', { phoneno: number });
        }

    }
    )
}



const ticket = async (req, res) => {
    var number = req.query.phone;
    var check = customer.find({ phone: number });
    customer.find({ phone: number }).then(data => {
        if (data.length == 0) {
            movie.find({})
                .then(data => {
                    upmovie.find({}).then(updata => {

                        res.status(200).render('home.ejs', { moviedata: data, upmoviedata: updata });
                    })
                })
        }
        else {

            res.status(200).render('ticket.ejs', { ticketdata: data });
        }

    }
    )
}


module.exports = { homepage, bookingpage, paymentpage, payment, upcoming, user, ticket, cab, restaurant, verify };