import User from '../models/userSchema.js';
import Vehicle from '../models/vehicalSchema.js';
export const Register = async (req, res) => {
    try {
        //reading data from body 
        const { name, number } = req.body;
        //enshoring all fields are given 
        if (!name || !number) {
            return res.status(401).json({
                message: "All fields are require",
                success: false
            })
        }
        //cheking existence of user in db 
        const user = await User.findOne({ number })
        if (user) {

            return res.status(201).json({
                user,
                message: "User alread exist.",
                success: true
            })

        }
        //adding new user to db
       const users= await User.create({ name, number })
        return res.status(201).json({
            users,
            message: "Account create successfully .",
            success: true
        })

    }
    catch (err) {
        console.log(err)
    }

}
//vehical registraion
export const registerVehical = async (req, res) => {
    try {
        //reading data from body 
        const { userid,payment,licensePlate,vehicleType } = req.body;
        //enshoring all fields are given 
        if (!userid || !payment || !licensePlate || !vehicleType) {
            return res.status(400).json({
                message: "All fields are require",
                success: false
            })
        }
        
        //adding new user to db
      
        let vehical=await Vehicle.findOne({licensePlate});
        if(vehical)
        {
            return res.status(200).json({
                vehical,
                message: "vehical alredy registerd  .",
                success: true
            })
        }
      
            vehical= await Vehicle.create({ user:userid,payment,licensePlate,vehicleType, })
            const user = await User.findOne({ _id:userid })
            console.log(user);
           if(user)
           {
              user.vehicles.push(vehical._id);
              await user.save(); // Save the updated user documen
           }

    
     
        return res.status(201).json({
            vehical,
            message: "vehical added  successfully .",
            success: true
        })

    }
    catch (err) {
        console.log(err)
    }

}
