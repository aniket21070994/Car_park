import { parking } from "../models/parkingSchema.js";
import { User } from "../models/userSchema.js";
import { Account } from "../models/accountSchema.js";
import { vehical } from "../models/vehicalSchema.js";
//searching parking for city
export const search = async (req, res) => {
    try {
        const {city} = req.query;
        const parkingArea = await parking.findById(city)
        return res.status(200).json({
            parkingArea,
        })
    }
    catch (err) {

    }
}
//Booking Controller

export const Booking = async (req, res) => {
    try {
        //reading data from body 
        const { name, licence,location, pid,slot,start,end } = req.body;
        //enshoring all fields are given 
        if (!name|| !licence||!location||!pid|| !slot || !start|| !end) {
            return res.status(401).json({
                message: "All fields are require",
                success: false
            })
        }
        //cheking existence of user in db 
        const vehicals = await parking.findOne({ licence })
        if (vehicals) {

            return res.status(401).json({
                message: " parking sloat alredy booked.",
                success: false
            })

        }
        //adding new parking vehical to db
        await User.create({ name, number })
        const user = await User.findOne({ number })
        await parking.create({ licence,location,pid,start,end })
        await parking.create({ licence,location,pid,start,end })
        const uid =user.find({ licence: licence })
        //user id for schema traversing 
        uid=uid._id
        //creating accounts for managing payments
        await Account.create({ uid,amount:payment})
        //manage vehical info
        await vehical.create({uid,licence,location,pid,start,end })
        return res.status(201).json({
            message: " Sloat booked successfully.",
            success: true
        })

    }
    catch (err) {
        console.log(err)
    }
}