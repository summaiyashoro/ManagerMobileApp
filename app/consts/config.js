const _Environments = {
 development:{
     BASE_URL:'http://110.93.230.117:19010/v1/json/data/',
     LOGIN:'/login',
     CHANGE_PASSWORD:'/change-password',
     FORGOT_PASSWORD:'/forgot-password'
 },

 production:{
     BASE_URL:"",
     LOGIN:'/login',
     CHANGE_PASSWORD:'/change-password',
     FORGOT_PASSWORD:'/forgot-password'
 }
};

getEnvironment = () =>{
 const platform ="development";   //change on production
 return _Environments[platform];
}

const Environment =  getEnvironment();
export default Environment;