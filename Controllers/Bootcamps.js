const Bootcamp=require("../model/Bootcamp")
// @desc Get all bootcamps
// @Routes Get/api/v1/bootcamps
// @access Public 

exports.getBootcamps=(req,rews,next)=>{
    res.status(200).json({success:true,msg:"Show all bootcamps"});
};



// @desc Get Single bootcamps
// @Routes Get/api/v1/bootcamps/:id 
// @acess public 

exports.getBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:"Show bootcamps"});
}

// @desc Create New bootcamps
// @Routes Get/api/v1/bootcamps/:id 
// @acess public 

exports.getBootcamp=(req,res,next)=>{
    console.log(req.body)
    res.status(200).json({success:true,msg:"Create a new bootcamps"});

};
// @desc Update bootcamps
// @Routes Get/api/v1/bootcamps/:id 
// @acess public 

exports.createBootcamp=async(req,res,next)=>{
    const bootcamp= await Bootcamp.create(req.body)
    console.log(req.body);
    res.status(200).json({success:true,msg:"Update bootcamps"});

};

// @desc Update bootcamps
// @Routes Get/api/v1/bootcamps/:id 
// @acess public 

exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Update bootcamps ${req.params.id}`});

};
// @desc Delete bootcamps
// @Routes Get/api/v1/bootcamps/:id 
// @acess private 

exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).json({success:true,msg:`Delete bootcamps ${req.params.id}`});

}

exports.createBootcamp=async(req,res,next)=>{
    try
    {
        const bootcamp=await Bootcamp.create(req.body);
        res.status(201).json({
            success:ture,
            data:bootcamp
        });
    }
    catch(err){
        res.status(400).json({success:false})
    }
}
