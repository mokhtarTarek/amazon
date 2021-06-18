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

// const isAuth = (req,res,next)=>{
//     const token = req.headers.authorization;

//     if(token){
//         const onlyToken = token.slice(7,token.length);
//         jwt.verify(onlyToken,config.JWT_SECRET,(err,decode)=>{
//             if (err){
//                 return res.status(401).send({msg:'Invalid Token'})
//             }
//             req.user = decode;
//             next();
//             return
//         });
//     }else{
//         return res.status(401).send({msg:'Token is not supplied'})
//     }

// }

// const isAdmin = (req,res,next)=>{
//     if(req.user && req.user.isAdmin){
//         return next();
//     }
//     return res.status(401).send({msg: 'Admin Token is not valid'})

// }
// export{
//     generateToken,isAuth,isAdmin
// }
