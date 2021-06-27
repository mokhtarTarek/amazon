import jwt from "jsonwebtoken";
//import config from './config'

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET ||'somethingsecret' ,
    {
      expiresIn: "30d",
    }
  );
};

export const isAuth = (req,res,next)=>{
    const authorization = req.headers.authorization;

    if(authorization){
        const token = authorization.slice(7,token.length);
        jwt.verify(token,process.env.JWT_SECRET ||'secret',(err,decode)=>{
            if (err){
                return res.status(401).send({message:'Invalid Token'})
            }else{
              req.user = decode;
            next();//pass to the next middleware : next call
            }
            
            
        });
    }else{
        return res.status(401).send({msg:'Token is not supplied'})
    }

}

// const isAdmin = (req,res,next)=>{
//     if(req.user && req.user.isAdmin){
//         return next();
//     }
//     return res.status(401).send({msg: 'Admin Token is not valid'})


