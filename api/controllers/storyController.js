exports.generateStory = async(req,res,next)=>{
    try{
        const {photoMetadata} = req.body;
        //placeholder for AI story generation logic
        res.status(200).json({message:`Story generated for photo metadata: ${photoMetadata}`});
    }catch(err){
        console.error(err);
        res.staus(500).send("server error");
    }
};

